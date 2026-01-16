import { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Upload, X } from 'lucide-react';
import type { Eventos } from '../../lib/data';



interface EventFormProps {
  event?: Eventos;
  onSubmit: (data: Omit<Eventos, "id"> & { imageFile?: File }) => void; // incluye File opcional
  onCancel: () => void;
}


export function EventForm({ event, onSubmit, onCancel }: EventFormProps) {
 const [formData, setFormData] = useState<Omit<Eventos, "id"> & { imageFile?: File }>({
  nombre: event?.nombre || "",
  descripcion: event?.descripcion || "",
  fechaevento: event?.fechaevento || "",
  ubicacion: event?.ubicacion || "",
  image: event?.image || "",
  url: event?.url || "",
  galeria: event?.galeria || [],
  imageFile: undefined,
});

  const [imagePreview, setImagePreview] = useState(event?.image || '');
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

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  onSubmit({
    nombre: formData.nombre,
    descripcion: formData.descripcion,
    fechaevento: formData.fechaevento,
    ubicacion: formData.ubicacion,
    image: formData.image,     // puede ser base64 mientras no haya file
    url: formData.url || '',
    galeria: formData.galeria || [],
    imageFile: formData.imageFile, // aquí está el archivo real
  });
};


  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Título del Evento
        </label>
        <input
          type="text"
          value={formData.nombre}
          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
          className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          placeholder="Ej: Noche de Luna Llena"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Descripción
        </label>
        <textarea
          value={formData.descripcion}
          onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
          rows={4}
          className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
          placeholder="Describe el evento..."
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            <Calendar className="inline w-4 h-4 mr-1" />
            Fecha
          </label>
          <input
            type="date"
            value={formData.fechaevento}
            onChange={(e) => setFormData({ ...formData, fechaevento: e.target.value })}
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            required
          />
        </div>

        
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          <MapPin className="inline w-4 h-4 mr-1" />
          Ubicación
        </label>
        <input
          type="text"
          value={formData.ubicacion}
          onChange={(e) => setFormData({ ...formData, ubicacion: e.target.value })}
          className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          placeholder="Ej: Lunas Snack Bar"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          <Upload className="inline w-4 h-4 mr-1" />
          Imagen del Evento
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
          <div className="border-2 border-dashed border-slate-700 rounded-lg p-8 text-center hover:border-indigo-500 transition-colors">
            <Upload className="w-12 h-12 text-slate-500 mx-auto mb-3" />
            <label className="cursor-pointer">
              <span className="text-indigo-400 hover:text-indigo-300">
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
          className="flex-1 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors font-medium"
        >
          {event ? 'Actualizar Evento' : 'Crear Evento'}
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