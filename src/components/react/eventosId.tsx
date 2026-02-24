
import { useState, useEffect } from "react";
import { mockEventos } from "../../lib/data";

import { doc } from "firebase/firestore";
import { MessageCircle } from 'lucide-react';
import { motion } from "framer-motion";
import { ImageWithFallback } from "../react/ImageWithFallback.tsx";
import { ArrowLeft } from 'lucide-react';

interface Props {
  id?: string;
  onBack?: () => void;
}

interface Evento {
  id: string;
  nombre: string;
  descripcion?: string;
  ubicacion?: string;
  fecha?: string;
  fechaevento?: string;
 invitados?: number | string;
  image?: string;
  fotos?: string[];
  videoUrl?: string;
  whatsappNumber?: string;
}

export function EventosId() {
 const [mockeventomock, setMockEvento] = useState<Evento[]>(mockEventos as Evento[]);
  const [evento, setEvento] = useState<Evento | null>(null);
    

  // Seleccionamos el evento actual basado en la URL
  useEffect(() => {
    const id = window.location.pathname.split("/").pop();
    if (!id) return;

    const eventoSeleccionado = mockeventomock.find(e => e.id === id) || mockeventomock[0];
    setEvento(eventoSeleccionado);

     /* 
    // 🔹 Código Firebase comentado para usar después
    let mounted = true;
    const fetchEvento = async () => {
      try {
        if (typeof window === "undefined") return;

        const { doc, getDoc } = await import("firebase/firestore");
        const { db } = await import("../../lib/firebase");

        const ref = doc(db, "eventos", id);
        const snap = await getDoc(ref);

        if (mounted) {
          setEvento({ id: snap.id, ...snap.data() } as Evento);
        }
      } catch (err) {
        console.error("Error cargando evento:", err);
        setError("Error cargando el evento");
      }
    };

    fetchEvento();
    return () => { mounted = false; };
    */
  }, [mockeventomock]);

  if (!evento) {
    return <p className="text-white">Cargando evento...</p>;
  }

  const handleWhatsAppClick = () => {
    const number = evento.whatsappNumber || "99268791";
    const message = encodeURIComponent(`Hola! Me interesa cotizar un evento similar a "${evento.nombre}"`);
    window.open(`https://wa.me/${number}?text=${message}`, "_blank");
  };

  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-[#0a0a0a] to-[#1a1a1a] text-white">
      {/* Botón Regresar */}
      <motion.button
        onClick={handleBackClick}
        className="fixed top-6 left-6 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-4 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl border border-white/20 flex items-center gap-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05, x: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="hidden sm:inline">Regresar</span>
      </motion.button>

      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={evento.image}
          alt={evento.nombre}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2" style={{ fontFamily: 'Crimson Text, serif' }}>
            {evento.nombre}
          </h1>
          <p className="text-white text-sm md:text-base mb-2 flex items-center gap-2">
            📍 {evento.ubicacion} • {evento.fecha || evento.fechaevento}
          </p>
          {evento.invitados && (
            <p className="text-white text-xs md:text-sm max-w-2xl">
              Evento realizado para {evento.invitados} personas con nuestro exclusivo snack bar.
            </p>
          )}
          {!evento.invitados && evento.descripcion && (
            <p className="text-white text-xs md:text-sm max-w-2xl">
              {evento.descripcion}
            </p>
          )}
        </div>
      </section>

      {/* Descripción Detallada */}
      {evento.descripcion && (
        <section className="py-16 px-4 md:px-8 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
            <h2 className="text-3xl md:text-4xl text-center mb-6" style={{ fontFamily: 'Crimson Text, serif' }}>Sobre el Evento</h2>

            <motion.div className="w-24 h-1 bg-linear-to-r from-transparent via-white to-transparent mx-auto mb-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />

            <motion.div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.p className="text-gray-300 text-base md:text-lg leading-relaxed text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {evento.descripcion}
              </motion.p>

              <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {evento.ubicacion && (
                  <div className="text-center">
                    <div className="text-4xl mb-2">📍</div>
                    <p className="text-sm text-gray-400 mb-1">Ubicación</p>
                    <p className="text-white font-medium">{evento.ubicacion}</p>
                  </div>
                )}
                {(evento.fecha || evento.fechaevento) && (
                  <div className="text-center">
                    <div className="text-4xl mb-2">📅</div>
                    <p className="text-sm text-gray-400 mb-1">Fecha</p>
                    <p className="text-white font-medium">{evento.fecha || evento.fechaevento}</p>
                  </div>
                )}
                {evento.invitados && (
                  <div className="text-center">
                    <div className="text-4xl mb-2">👥</div>
                    <p className="text-sm text-gray-400 mb-1">Invitados</p>
                    <p className="text-white font-medium">{evento.invitados} personas</p>
                  </div>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        </section>
      )}

      {/* Galería */}
      {evento.fotos && evento.fotos.length > 0 && (
        <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
          <motion.h2 className="text-2xl md:text-3xl text-center mb-8" style={{ fontFamily: 'Crimson Text, serif' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Galería de Fotos
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {evento.fotos.map((foto, index) => (
              <motion.div key={index} className="relative aspect-4/3 overflow-hidden rounded-lg group cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <ImageWithFallback
                  src={foto}
                  alt={`Foto ${index + 1} del evento ${evento.nombre}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Video */}
      {evento.videoUrl && (
        <section className="py-12 px-4 md:px-8 max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl text-center mb-8" style={{ fontFamily: 'Crimson Text, serif' }}>
            Así se vivió este evento 🎉
          </h2>

          <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl">
            <video controls className="w-full h-full" poster={evento.image}>
              <source src={evento.videoUrl} type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
        </section>
      )}

      {/* WhatsApp */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-50"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
}