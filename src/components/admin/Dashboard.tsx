import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import type { User } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { Plus, Moon, Calendar as CalendarIcon, Package,LogOut } from 'lucide-react';
import type { Menu } from "../../lib/data";
import { EventCard } from "./EventsCard";
import { ServiceCard } from "./ServiceCard";
type Tab = 'events' | 'services';
import type { Event } from "./EventForm";
import { Modal } from "./modal";
import { EventForm } from "./EventForm";
import { ServiceForm } from "./ServiceForm";
export  function Dashboards() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<Tab>('events');
  const [events, setEvents] = useState<Event[]>([]);
  const [services, setServices] = useState<Menu[]>([]);
  
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  
  const [editingEvent, setEditingEvent] = useState<Event | undefined>();
  const [editingService, setEditingService] = useState<Menu | undefined>();
  // Verificar si el usuario está logueado
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        // No logueado → redirige al login
        window.location.href = "/admin";
      } else {
        setUser(currentUser);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = "/admin";
  };

  if (loading) {
    return <p className="text-center mt-20">Cargando...</p>;
  }

  const handleAddEvent = (eventData: Omit<Event, 'id'>) => {
    if (editingEvent) {
      setEvents(events.map(e => 
        e.id === editingEvent.id ? { ...eventData, id: editingEvent.id } : e
      ));
      setEditingEvent(undefined);
    } else {
      const newEvent: Event = {
        ...eventData,
        id: Date.now().toString(),
      };
      setEvents([...events, newEvent]);
    }
    setIsEventModalOpen(false);
  };

  const handleEditEvent = (event: Event) => {
    setEditingEvent(event);
    setIsEventModalOpen(true);
  };

  const handleDeleteEvent = (id: string) => {
    if (confirm('¿Estás seguro de que quieres eliminar este evento?')) {
      setEvents(events.filter(e => e.id !== id));
    }
  };

  // Service handlers
  const handleAddService = (serviceData: Omit<Menu, 'id'>) => {
    if (editingService) {
      setServices(services.map(s => 
        s.id === editingService.id ? { ...serviceData, id: editingService.id } : s
      ));
      setEditingService(undefined);
    } else {
      const newService: Menu = {
        ...serviceData,
        id: Date.now(),
      };
      setServices([...services, newService]);
    }
    setIsServiceModalOpen(false);
  };

  const handleEditService = (service: Menu) => {
    setEditingService(service);
    setIsServiceModalOpen(true);
  };

  const handleDeleteService = (id: number) => {
    if (confirm('¿Estás seguro de que quieres eliminar este servicio?')) {
      setServices(services.filter(s => s.id !== id));
    }
  };

  const closeModals = () => {
    setIsEventModalOpen(false);
    setIsServiceModalOpen(false);
    setEditingEvent(undefined);
    setEditingService(undefined);
  };
    return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-indigo-950">
      {/* Header */}
      <header className="bg-slate-900/50 backdrop-blur-lg border-b border-slate-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-linear-to-br from-indigo-600 to-purple-600 rounded-xl shadow-lg shadow-indigo-500/30">
                <Moon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">Lunas Snack Bar</h1>
                <p className="text-slate-400 text-sm">Panel de Administración</p>
              </div>
            </div>
              <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors shadow-lg shadow-red-500/20"
            >
              <LogOut className="w-5 h-5" />
              <span className="hidden sm:inline">Salir</span>
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab('events')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              activeTab === 'events'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
            }`}
          >
            <CalendarIcon className="w-5 h-5" />
            Eventos
          </button>
          <button
            onClick={() => setActiveTab('services')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              activeTab === 'services'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
            }`}
          >
            <Package className="w-5 h-5" />
            Servicios
          </button>
        </div>

        {/* Events Section */}
        {activeTab === 'events' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-white">Gestión de Eventos</h2>
              <button
                onClick={() => {
                  setEditingEvent(undefined);
                  setIsEventModalOpen(true);
                }}
                className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition-colors shadow-lg shadow-indigo-500/30"
              >
                <Plus className="w-5 h-5" />
                Agregar Evento
              </button>
            </div>

            {events.length === 0 ? (
              <div className="text-center py-20 bg-slate-900/50 rounded-2xl border border-slate-800">
                <CalendarIcon className="w-16 h-16 text-slate-700 mx-auto mb-4" />
                <p className="text-slate-400 text-lg">No hay eventos registrados</p>
                <p className="text-slate-500 text-sm mt-2">Comienza agregando tu primer evento</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map(event => (
                  <EventCard
                    key={event.id}
                    event={event}
                    onEdit={handleEditEvent}
                    onDelete={handleDeleteEvent}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Services Section */}
        {activeTab === 'services' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-white">Gestión de Servicios</h2>
              <button
                onClick={() => {
                  setEditingService(undefined);
                  setIsServiceModalOpen(true);
                }}
                className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition-colors shadow-lg shadow-purple-500/30"
              >
                <Plus className="w-5 h-5" />
                Agregar Servicio
              </button>
            </div>

            {services.length === 0 ? (
              <div className="text-center py-20 bg-slate-900/50 rounded-2xl border border-slate-800">
                <Package className="w-16 h-16 text-slate-700 mx-auto mb-4" />
                <p className="text-slate-400 text-lg">No hay servicios registrados</p>
                <p className="text-slate-500 text-sm mt-2">Comienza agregando tu primer servicio</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map(service => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    onEdit={handleEditService}
                    onDelete={handleDeleteService}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
  <Modal
        isOpen={isEventModalOpen}
        onClose={closeModals}
        title={editingEvent ? 'Editar Evento' : 'Nuevo Evento'}
      >
        <EventForm
          event={editingEvent}
          onSubmit={handleAddEvent}
          onCancel={closeModals}
        />
      </Modal>

      <Modal
        isOpen={isServiceModalOpen}
        onClose={closeModals}
        title={editingService ? 'Editar Servicio' : 'Nuevo Servicio'}
      >
        <ServiceForm
          service={editingService}
          onSubmit={handleAddService}
          onCancel={closeModals}
        />
      </Modal>
    
    </div>
  );
}
