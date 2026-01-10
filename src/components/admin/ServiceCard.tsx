import { Edit2, Trash2, Tag } from 'lucide-react';

import type { Menu } from '../../lib/data';

interface ServiceCardProps {
  service: Menu;
  onEdit: (service: Menu) => void;
  onDelete: (id: number) => void;
}

export function ServiceCard({ service, onEdit, onDelete }: ServiceCardProps) {
  return (
    <div className="bg-linear-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-purple-500/20 hover:shadow-xl group">
      {service.photo && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={service.photo}
            alt={service.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-900 to-transparent opacity-60"></div>
          {!service.estado && (
            <div className="absolute top-3 right-3 px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full">
              No disponible
            </div>
          )}
          {service.estado && (
            <div className="absolute top-3 right-3 px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
              Disponible
            </div>
          )}
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-white">{service.name}</h3>
          <span className="text-xl font-bold text-purple-400">{service.price}</span>
        </div>
        
        <p className="text-slate-400 mb-4 line-clamp-2">{service.descriptionProduct}</p>
        
        <div className="flex items-center gap-2 mb-4">
          <Tag className="w-4 h-4 text-purple-400" />
          <span className="text-sm text-slate-300 capitalize">{service.caracteristicas}</span>
        </div>

        <div className="flex gap-2 pt-4 border-t border-slate-700">
          <button
            onClick={() => onEdit(service)}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
          >
            <Edit2 className="w-4 h-4" />
            Editar
          </button>
          <button
            onClick={() => onDelete(service.id)}
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
