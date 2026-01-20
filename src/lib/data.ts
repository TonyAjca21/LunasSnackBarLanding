export type Caracteristica = string;
import { Coffee, Calendar, MessageSquare, type LucideIcon } from "lucide-react";

export interface Servicios {
  id: string;

  // Imagen
  image?: string;       // URL pública (Firebase Storage)
  imagePath?: string;   // Path en Storage

  // Info básica
  name: string;
  descriptionProduct: string;
  price: string;

  // Listas
  caracteristicas: string[];
  eventos: string[];

  // Detalles
  cantidadPerosonas: number;
  anticipacion: string;
  estado?: boolean;
}


export interface Eventos {
  id: string;
  image?: string;
  url: string;
  nombre: string;
  imagePath?: string;
  ubicacion?: string;
  descripcion?: string;
  fecha?: string;
  fechaevento?: string; // Agregado para compatibilidad
  invitados?: string; // Opcional - puede no existir en Firebase
  estado?: boolean;
  fotos?: string[]; // Opcional - Array de URLs de fotos para la galería
  videoUrl?: string; // Opcional - URL del video
  videoPath?: string; // Opcional - Path del video en Storage
  imageFiles?: File[]; // Opcional - Archivos de imagen para subir
  whatsappNumber?: string; // Opcional - Número de WhatsApp para cotizar
}


export interface HowItWorksStep {
  icons: LucideIcon;
  title: string;
  description: string;
}

export interface eventoDetalle {
  id: number;
  url: string;
}



export const howitworksSteps: HowItWorksStep[] = [
  {
    icons: Coffee, // icono de comida / producto
    title: "Elige tu producto favorito del menú",
    description: "Elige tu producto favorito del menú",
  },
  {
    icons: Calendar, // icono de calendario para reserva
    title: "Reserva tu fecha y hora para el evento",
    description: "Reserva tu fecha y hora para el evento",
  },
  {
    icons: MessageSquare, // icono de mensaje para contacto
    title: "Escribinos por whatsapp o llamanos para coordinar",
    description: "Escribinos por whatsapp o llamanos para coordinar",
  },

];


