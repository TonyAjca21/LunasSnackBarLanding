import { Calendar, Clock, MapPin, Edit2, Trash2 } from 'lucide-react';
import type { Eventos } from '../../lib/data';

interface EventCardProps {
  event: Eventos;
  onEdit: (event: Eventos) => void;
  onDelete: (id: string) => void;
}

export function EventCard({ event, onEdit, onDelete }: EventCardProps) {
  return (
    <div className="bg-linear-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-indigo-500/20 hover:shadow-xl group">
      {event.galeria && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={event.image || event.galeria[0].url}
            alt={event.nombre}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-900 to-transparent opacity-60"></div>
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-3">{event.nombre}</h3>
        <p className="text-slate-400 mb-4 line-clamp-2">{event.descripcion}</p>   
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <Calendar className="w-4 h-4 text-indigo-400" />
            <span>{event.fechaevento}</span>
          </div>
         
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <MapPin className="w-4 h-4 text-indigo-400" />
            <span>{event.ubicacion}</span>
          </div>
        </div>

        <div className="flex gap-2 pt-4 border-t border-slate-700">
          <button
            onClick={() => onEdit(event)}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
          >
            <Edit2 className="w-4 h-4" />
            Editar
          </button>
          <button
            onClick={() => onDelete(event.id)}
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
