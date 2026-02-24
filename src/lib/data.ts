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



// Mock de Servicios
// Mock de Servicios con imágenes reales
export const mockServicios: Servicios[] = [
  {
    id: 'srv-001',
    image: 'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg', // Catering evento real :contentReference[oaicite:1]{index=1}
    imagePath: 'services/srv-001-catering.jpg',
    name: 'Servicio de Catering',
    descriptionProduct: 'Catering completo con platillos variados para eventos de todo tipo.',
    price: '1500',
    caracteristicas: ['Menú gourmet', 'Servicio profesional', 'Montaje elegante'],
    eventos: ['Evento corporativo', 'Boda', 'Cumpleaños'],
    cantidadPerosonas: 100,
    anticipacion: '2 semanas',
    estado: true,
  },
  {
    id: 'srv-002',
    image: 'https://images.pexels.com/photos/857869/pexels-photo-857869.jpeg', // Mesa y vajilla de evento :contentReference[oaicite:2]{index=2}
    imagePath: 'services/srv-002-decoracion.jpg',
    name: 'Decoración de Eventos',
    descriptionProduct: 'Decoración temática y ambientación para bodas y fiestas especiales.',
    price: '800',
    caracteristicas: ['Temática personalizada', 'Iluminación', 'Accesorios decorativos'],
    eventos: ['Boda', 'Baby Shower', 'Cumpleaños'],
    cantidadPerosonas: 50,
    anticipacion: '1 semana',
    estado: true,
  },
  {
    id: 'srv-003',
    image: 'https://images.pexels.com/photos/414647/pexels-photo-414647.jpeg', // Chef preparando catering :contentReference[oaicite:3]{index=3}
    imagePath: 'services/srv-003-fotografia.jpg',
    name: 'Fotografía Profesional',
    descriptionProduct: 'Cobertura fotográfica del evento y entrega de imágenes editadas.',
    price: '600',
    caracteristicas: ['Cobertura completa', 'Edición profesional', 'Galería digital'],
    eventos: ['Boda', 'Cumpleaños'],
    cantidadPerosonas: 0,
    anticipacion: '3 días',
    estado: false,
  },
];

// Mock de Eventos con imágenes reales
export const mockEventos: Eventos[] = [
  {
    id: 'evt-001',
    image: 'https://images.pexels.com/photos/1181367/pexels-photo-1181367.jpeg', // Conferencia / evento tech real :contentReference[oaicite:4]{index=4}
    imagePath: 'events/evt-001-tech.jpg',
    url: 'https://mercaplan.com/evento-001',
    nombre: 'Conferencia de Tecnología 2026',
    ubicacion: 'San Pedro Sula, Honduras',
    descripcion: 'Evento anual con paneles, networking y charlas de expertos.',
    fecha: '2026-03-15',
    fechaevento: '2026-03-15 09:00',
    invitados: '500 personas',
    estado: true,
    fotos: [
      'https://images.pexels.com/photos/1181368/pexels-photo-1181368.jpeg', // Networking :contentReference[oaicite:5]{index=5}
      'https://images.pexels.com/photos/1181371/pexels-photo-1181371.jpeg',
    ],
    videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    whatsappNumber: '+50491234567',
  },
  {
    id: 'evt-002',
    image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg', // Taller evento real :contentReference[oaicite:6]{index=6}
    imagePath: 'events/evt-002-workshop.jpg',
    url: 'https://mercaplan.com/evento-002',
    nombre: 'Taller de Emprendimiento',
    ubicacion: 'Tegucigalpa, Honduras',
    descripcion: 'Sesión práctica con expertos para nuevos emprendedores.',
    fecha: '2026-04-05',
    fechaevento: '2026-04-05 14:00',
    estado: true,
  },
  {
    id: 'evt-003',
    image: 'https://images.pexels.com/photos/960309/pexels-photo-960309.jpeg', // Festival gastronomico real :contentReference[oaicite:7]{index=7}
    imagePath: 'events/evt-003-festival.jpg',
    url: 'https://mercaplan.com/evento-003',
    nombre: 'Festival Gastronómico',
    ubicacion: 'Tegucigalpa, Honduras',
    descripcion: 'Festival al aire libre con variedad de comidas y bebidas locales.',
    fecha: '2026-05-20',
    fotos: [
      'https://images.pexels.com/photos/960307/pexels-photo-960307.jpeg',
    ],
    videoPath: 'events/videos/festival-gastronomico.mp4',
    estado: false,
  },
];

