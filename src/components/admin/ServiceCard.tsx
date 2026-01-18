import { Edit2, Trash2, Tag } from 'lucide-react';

import type { Servicios } from '../../lib/data';

interface ServiceCardProps {
  service: Servicios;
  onEdit: (service: Servicios) => void;
  onDelete: (service: Servicios) => void;
}

export function ServiceCard({ service, onEdit, onDelete }: ServiceCardProps) {
  return (
    <div className="bg-linear-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-purple-500/20 hover:shadow-xl group">

      {/* Imagen */}
      {service.image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-900 to-transparent opacity-60" />

          {/* Estado */}
          <span
            className={`absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full
        ${service.estado ? 'bg-green-500' : 'bg-red-500'} text-white`}
          >
            {service.estado ? 'Disponible' : 'No disponible'}
          </span>
        </div>
      )}

      {/* Contenido */}
      <div className="p-6 space-y-4">

        {/* Nombre */}
        <h3 className="text-xl font-semibold text-white">
          {service.name}
        </h3>

        {/* Precio + Personas */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-purple-400">
            {service.price} Lps
          </span>
          <div className='flex flex-col gap-2 '> <span className="text-xs text-slate-400 font-bold">
            {service.anticipacion} de anticipación
          </span>
            <span className="text-sm font-medium text-slate-400">
              Para {service.cantidadPerosonas} persona(s)
            </span>
          </div>

        </div>

        {/* Descripción */}
        <p className="text-slate-400 text-sm line-clamp-3">
          {service.descriptionProduct}
        </p>

        {/* Detalles */}
        <div className='flex flex-row gap-4'>

          {/* Características */}
          <div className='flex-1'>
            <div className="flex items-center gap-2 mb-2">
              <Tag className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-semibold text-slate-200">
                Características
              </span>
            </div>

            <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
              {service.caracteristicas?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Eventos */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Tag className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-semibold text-slate-200">
                Eventos
              </span>
            </div>

            <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
              {service.eventos?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

        </div>


        {/* Acciones */}
        <div className="flex gap-2 pt-4 border-t border-slate-700">
          <button
            onClick={() => onEdit(service)}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
          >
            <Edit2 className="w-4 h-4" />
            Editar
          </button>

          <button
            onClick={() => onDelete(service)}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
          >
            <Trash2 className="w-4 h-4" />
            Eliminar
          </button>
        </div>
      </div>
    </div>

  );
}
