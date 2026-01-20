import { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Plus, Upload, Users, X } from 'lucide-react';
import type { Eventos } from '../../lib/data';



interface EventFormProps {
  event?: Eventos;
  onSubmit: (data: Omit<Eventos, "id"> & { imageFile?: File } & { videoFile?: File }) => void; // incluye File opcional
  onCancel: () => void;
}


export function EventForm({ event, onSubmit, onCancel }: EventFormProps) {
  const [formData, setFormData] = useState<Omit<Eventos, "id"> & { imageFiles?: File[] } & { videoFile?: File }>({
    nombre: event?.nombre || "",
    descripcion: event?.descripcion || "",
    fechaevento: event?.fechaevento || "",
    ubicacion: event?.ubicacion || "",
    image: event?.image || "",
    url: event?.url || "",
    imagePath: event?.imagePath || "",
    imageFiles: [],        // <-- ahora es un array de File
    estado: event?.estado ?? true,
    fotos: event?.fotos || [],
    videoUrl: event?.videoUrl || "",
    videoPath: event?.videoPath || "",
    whatsappNumber: event?.whatsappNumber || "",
    invitados: event?.invitados || "",
  });


  const [imagePreviews, setImagePreviews] = useState(event?.fotos || []);

  const [imageFiles, setImageFiles] = useState<File[]>([]);

  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoPreview, setVideoPreview] = useState<string>(event?.videoUrl || "");

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;

    const file = e.target.files[0];

    setFormData(prev => ({
      ...prev,
      videoFile: file, // 🔥 CLAVE
    }));

    setVideoPreview(URL.createObjectURL(file));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    if (!e.target.files) return;

    const filesArray = Array.from(e.target.files);


    // Crear previews para mostrar en el UI
    const newPreviews = filesArray.map(file => URL.createObjectURL(file));

    // Actualizar estado local de previews e imágenes
    setImageFiles(prev => [...prev, ...filesArray]);
    setImagePreviews(prev => [...prev, ...newPreviews]);

    // ⚡ Actualizar formData para que handleAddEvent reciba los archivos
    setFormData(prev => ({
      ...prev,
      imageFiles: prev.imageFiles ? [...prev.imageFiles, ...filesArray] : filesArray,
    }));
  };

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      imageFiles: prev.imageFiles?.filter((_, i) => i !== index),
    }));
    setImagePreviews(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData); // 🔥 ENVÍA TODO
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
            type="text"
            value={formData.fechaevento}
            onChange={(e) => setFormData({ ...formData, fechaevento: e.target.value })}
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            required
          />
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
            <Users className="inline w-4 h-4 mr-1" />
            Invitado
          </label>
          <input
            type="text"
            value={formData.invitados}
            onChange={(e) => setFormData({ ...formData, invitados: e.target.value })}
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="Ej: Lunas Snack Bar"
            required
          />
        </div>
      </div>


      <div className="flex items-center gap-3">
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

      {/* Upload de imágenes múltiples */}
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          <Upload className="inline w-4 h-4 mr-1" />
          Imágenes del Evento
        </label>

        {imagePreviews.length > 0 ? (
          <div className="grid grid-cols-3 gap-4">
            {imagePreviews.map((preview, index) => (
              <div key={index} className="relative">
                <img
                  src={preview}
                  alt={`Preview ${index}`}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-2 right-2 p-2 bg-red-500 hover:bg-red-600 rounded-full transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            ))}
            <label className="flex h-48 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-700 hover:border-indigo-500 transition-colors">
              <Plus className="w-10 h-10 text-indigo-400 mb-2" />
              <span className="text-sm text-indigo-400">
                Agregar más
              </span>

              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>
        ) : (
          <div className="border-2 border-dashed border-slate-700 rounded-lg p-8 text-center hover:border-indigo-500 transition-colors">
            <Upload className="w-12 h-12 text-slate-500 mx-auto mb-3" />
            <label className="cursor-pointer">
              <span className="text-indigo-400 hover:text-indigo-300">
                Seleccionar imágenes
              </span>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>




        )}
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium text-slate-300 mb-2">
          <Upload className="inline w-4 h-4 mr-1" />
          Video del Evento
        </label>

        {videoPreview ? (
          <div className="relative">
            <video
              src={videoPreview}
              controls
              className="w-full h-48 object-cover rounded-lg"
            />
            <button
              type="button"
              onClick={() => {
                setVideoFile(null);
                setVideoPreview("");
              }}
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
                Seleccionar video
              </span>
              <input
                type="file"
                accept="video/*"
                onChange={handleVideoChange}
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