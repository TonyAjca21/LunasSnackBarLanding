import { useState } from 'react';
import { DollarSign, Upload, X, Package, User, Clock } from 'lucide-react';
import type { Servicios } from '../../lib/data';



interface ServiceFormProps {
  service?: Servicios;
  onSubmit: (service: Omit<Servicios, 'id'> & { imageFile?: File }) => void;
  onCancel: () => void;
}

export function ServiceForm({ service, onSubmit, onCancel }: ServiceFormProps) {
  const [formData, setFormData] = useState<Omit<Servicios, "id"> & { imageFile?: File }>({
    name: service?.name || '',
    descriptionProduct: service?.descriptionProduct || '',
    price: service?.price || '',
    caracteristicas: service?.caracteristicas || [],
    image: service?.image || '',
    cantidadPerosonas: service?.cantidadPerosonas || 1,
    eventos: service?.eventos || [],
    anticipacion: service?.anticipacion || '',
    estado: service?.estado ?? true,
    imagePath: service?.imagePath || '',

    imageFile: undefined
  });

  const [imagePreview, setImagePreview] = useState(service?.image || '');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     const file = e.target.files?.[0];
  if (file) {
    setFormData({ ...formData, imageFile: file }); // Guardamos el File
    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result as string);
    reader.readAsDataURL(file);
  }
  };

  const removeImage = () => {
    setImagePreview('');
    setFormData({ ...formData, image: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submit iniciado");
    // Solo enviar data sin imageFile
    await onSubmit({
      name: formData.name,
      descriptionProduct: formData.descriptionProduct,
      price: formData.price,
      caracteristicas: formData.caracteristicas || [],
      imageFile: formData.imageFile,
  
      image: imagePreview,
      imagePath: formData.imagePath,
      cantidadPerosonas: formData.cantidadPerosonas,
      eventos: formData.eventos,
      anticipacion: formData.anticipacion,
      estado: formData.estado,

    });
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Nombre del Servicio/Producto
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          placeholder="Ej: Café Lunar"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Descripción
        </label>
        <textarea
          value={formData.descriptionProduct}
          onChange={(e) => setFormData({ ...formData, descriptionProduct: e.target.value })}
          rows={4}
          className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
          placeholder="Describe el servicio o producto..."
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            <User className="inline w-4 h-4 mr-1" />
            Cantidad de Personas
          </label>
          <input
            type="number"
            value={formData.cantidadPerosonas}
            onChange={(e) => setFormData({ ...formData, cantidadPerosonas: e.target.valueAsNumber })}
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="1"
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              <DollarSign className="inline w-4 h-4 mr-1" />
              Precio
            </label>
            <input
              type="text"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Ej: $5.00"
              required
            />
          </div>
        
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                <Clock className="inline w-4 h-4 mr-1" />
                Anticipación
              </label>
              <input
                type="text"
                value={formData.anticipacion}
                onChange={(e) => setFormData({ ...formData, anticipacion: e.target.value })}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Ej: 2 horas"
                required
              />
            </div>
        </div>  
      </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            <Package className="inline w-4 h-4 mr-1" />
            Caracteristica del servicio
          </label>
          <input
            value={formData.caracteristicas}
            onChange={(e) => setFormData({ ...formData, caracteristicas: e.target.value.split(',').map(item => item.trim()) })}
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required
          >

          </input>
        </div>
      

         <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            <Package className="inline w-4 h-4 mr-1" />
            Eventos 
          </label>
          <input
            value={formData.eventos}
            onChange={(e) => setFormData({ ...formData, eventos: e.target.value.split(',').map(item => item.trim()) })}
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required
          >

          </input>
        </div>

      <div className="flex items-center gap-8 ">
        <input
          type="checkbox"
          id="available"
          checked={formData.estado}
          onChange={(e) => setFormData({ ...formData, estado: e.target.checked })}
          className="w-5 h-5 rounded bg-slate-800/50 border-slate-700 text-purple-600 focus:ring-2 focus:ring-purple-500"
        />
        <label htmlFor="available" className="text-sm font-medium text-slate-300">
          Disponible
        </label>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          <Upload className="inline w-4 h-4 mr-1" />
          Imagen del Producto
        </label>
        {imagePreview ? (
          <div className="relative">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-full h-48 object-cover rounded-lg"
            />
            <button
              type="button"
              onClick={removeImage}
              className="absolute top-2 right-2 p-2 bg-red-500 hover:bg-red-600 rounded-full transition-colors"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>
        ) : (
          <div className="border-2 border-dashed border-slate-700 rounded-lg p-8 text-center hover:border-purple-500 transition-colors">
            <Upload className="w-12 h-12 text-slate-500 mx-auto mb-3" />
            <label className="cursor-pointer">
              <span className="text-purple-400 hover:text-purple-300">
                Seleccionar imagen
              </span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>
        )}
      </div>

      <div className="flex gap-3 pt-4">
        <button
          type="submit"
          className="flex-1 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-medium"
        >
          {service ? 'Actualizar Servicio' : 'Crear Servicio'}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors font-medium"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}
