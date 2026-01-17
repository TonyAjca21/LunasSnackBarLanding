import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import type { User } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { Plus, Moon, Calendar as CalendarIcon, Package, LogOut } from 'lucide-react';
import type { Menu } from "../../lib/data";
import { EventCard } from "./EventsCard";
import { ServiceCard } from "./ServiceCard";
type Tab = 'events' | 'services';
import type { Eventos } from '../../lib/data';
import { Modal } from "./modal";
import { EventForm } from "./EventForm";
import { ServiceForm } from "./ServiceForm";
import { uploadImage, saveEvent, deleteImage } from "../../services/storage.services.ts";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { onSnapshot } from "firebase/firestore";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
export function Dashboards() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<Tab>('events');
  const [events, setEvents] = useState<Eventos[]>([]);
  const [services, setServices] = useState<Menu[]>([]);

  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);

  const [editingEvent, setEditingEvent] = useState<Eventos | undefined>();
  const [editingService, setEditingService] = useState<Menu | undefined>();
  // Verificar si el usuario está logueado
  useEffect(() => {
    // 1️⃣ Escuchar autenticación
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        window.location.href = "/admin"; // redirigir si no está logueado
      } else {
        setUser(currentUser);
        setLoading(false);
      }
    });

    return () => unsubscribeAuth(); // cleanup de auth
  }, []); // solo al montar

  useEffect(() => {
    // 2️⃣ Traer eventos desde Firestore **solo si hay usuario**
    if (!user) return;

    const eventsRef = collection(db, "eventos");
    const unsubscribeEvents = onSnapshot(eventsRef, (snapshot) => {
      const fetchedEvents = snapshot.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as Omit<Eventos, "id">)
      }));
      console.log("Eventos traídos:", fetchedEvents); // depuración
      setEvents(fetchedEvents);
    });

    return () => unsubscribeEvents(); // cleanup de snapshot
  }, [user]); // se ejecuta cuando 'user' cambia

  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = "/admin";
  };

  if (loading) {
    return <p className="text-center mt-20">Cargando...</p>;
  }



  const handleAddEvent = async (data: Omit<Eventos, "id"> & { imageFile?: File }) => {
    try {
      console.log("handleAddEvent llamado con:", data);

      let uploadedImage = data.imageFile ? await uploadImage(data.imageFile) : { url: "", path: "" };

      const eventData = {
        nombre: data.nombre,
        descripcion: data.descripcion,
        fechaevento: data.fechaevento,
        ubicacion: data.ubicacion,
        image: uploadedImage.url,      // URL para mostrar
        imagePath: uploadedImage.path, // path para eliminar luego
        url: data.url || "",
      };

      console.log("Guardando evento:", eventData);

      // Guardar en Firestore
      const docRef = await saveEvent(eventData);



      // Cerrar modal
      closeModals();

      console.log("Evento guardado correctamente y modal cerrado");

    } catch (error) {
      console.error("Error al guardar evento:", error);
      alert("Error al guardar el evento");
    }
  };


  const handleEditEvent = (event: Eventos) => {
    setEditingEvent(event);
    setIsEventModalOpen(true);
  };
  const handleDeleteEvent = async (event: Eventos) => {
    if (!confirm("¿Seguro que quieres eliminar este evento?")) return;

    try {
      // Eliminar imagen si existe
      if (event.image) {
        await deleteImage(event.image);
      }

      // Eliminar documento de Firestore
      await deleteDoc(doc(db, "eventos", event.id));

      alert("Evento eliminado correctamente");
    } catch (error) {
      console.error("Error al eliminar evento:", error);
      alert("No se pudo eliminar el evento");
    }
  };


  const handleFormSubmit = async (data: Omit<Eventos, "id"> & { imageFile?: File }) => {
    if (editingEvent) {
      // Editar evento
      await handleUpdateEvent({ ...data, id: editingEvent.id, image: data.image });
    } else {
      // Crear nuevo evento
      await handleAddEvent(data);
    }
  };
  const handleUpdateEvent = async (updatedEvent: Omit<Eventos, "id"> & { id: string; imageFile?: File; imagePath?: string }) => {
    try {
      let imageUrl = updatedEvent.image || "";       // URL existente
      let imagePath = updatedEvent.imagePath || "";  // Path existente

      if (updatedEvent.imageFile) {
        // Si hay imagen anterior, eliminarla
        if (imagePath) {
          console.log("Eliminando imagen anterior:", imagePath);
          await deleteImage(imagePath);
        }

        // Subir nueva imagen
        const uploadedImage = await uploadImage(updatedEvent.imageFile);
        imageUrl = uploadedImage.url;
        imagePath = uploadedImage.path;
      }

      // Actualizar Firestore
      const eventRef = doc(db, "eventos", updatedEvent.id);
      await updateDoc(eventRef, {
        nombre: updatedEvent.nombre,
        descripcion: updatedEvent.descripcion,
        fechaevento: updatedEvent.fechaevento,
        ubicacion: updatedEvent.ubicacion,
        image: imageUrl,
        imagePath: imagePath,
        url: updatedEvent.url || "",
      });

      // Actualizar UI
      setEvents(prev =>
        prev.map(e =>
          e.id === updatedEvent.id
            ? { ...updatedEvent, image: imageUrl, imagePath } // actualizamos URL y path
            : e
        )
      );

      setIsEventModalOpen(false);
      setEditingEvent(undefined);

      alert("Evento actualizado correctamente");
    } catch (error) {
      console.error("Error al actualizar evento:", error);
      alert("No se pudo actualizar el evento");
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
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${activeTab === 'events'
              ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
              : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
              }`}
          >
            <CalendarIcon className="w-5 h-5" />
            Eventos
          </button>
          <button
            onClick={() => setActiveTab('services')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${activeTab === 'services'
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
        key={isEventModalOpen ? "open" : "closed"} // fuerza re-render
        isOpen={isEventModalOpen}
        onClose={closeModals}
        title={editingEvent ? 'Editar Evento' : 'Nuevo Evento'}
      >
        <EventForm
          event={editingEvent}
          onSubmit={handleFormSubmit}
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
