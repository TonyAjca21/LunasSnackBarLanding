export type Caracteristica = string;

export interface Menu {
  id: number;
  photo: string;
  name: string;
  descriptionProduct: string;
  price: string;
  caracteristicas: Caracteristica[];
  eventos: string[];
  cantidadPerosonas: number;
  anticipacion: string;
  estado?:boolean;
}



export interface HowItWorksStep {
  icons: string;
  title: string;
  description: string;
}

export const listMenu: Menu[] = [
  {
    id: 1,
    photo: 'ImagenPrueba.jpg',
    name: 'Hamburguesa Clásica',
    descriptionProduct: 'Deliciosa hamburguesa con carne 100% vacuna, lechuga, tomate y queso.',

    price: '$5.99',
    caracteristicas: [
      'Ingredientes frescos y de alta calidad',
      'Preparación rápida y servicio amable'
    ],
    eventos: ['Cumpleaños', 'Reuniones'],
    cantidadPerosonas: 1,
    anticipacion: '24 horas minimo'
  },
  {
    id: 2,
    photo: 'ImagenPrueba.jpg',
    name: 'Papas Fritas',
    descriptionProduct: 'Papas Fritas delciosas crujientes y doradas, servidas con salsa a elección.',

    price: '$2.99',
    eventos: ['Eventos Corporativos', 'Fiestas'],
    cantidadPerosonas: 1,
    anticipacion: '12 horas minimo',
    caracteristicas: ['Precios competitivos y promociones especiales']
  },
  {
    id: 3,
    photo: 'ImagenPrueba.jpg',
    name: 'Refresco',
    descriptionProduct: 'Bebida refrescante para acompañar tu comida favorita.',

    price: '$1.99',
    eventos: ['Cumpleaños', 'Reuniones', 'Eventos Corporativos', 'Fiestas'],
    cantidadPerosonas: 1,
    anticipacion: '6 horas minimo',
    caracteristicas: ['Opciones vegetarianas y veganas disponibles']
  },
  {
    id: 4,
    photo: 'ImagenPrueba.jpg',
    name: 'Ensalada César',
    descriptionProduct: 'Ensalada fresca con lechuga romana, crutones, queso parmesano y aderezo César.',
    price: '$4.99',
    eventos: ['Reuniones', 'Eventos Corporativos'],
    cantidadPerosonas: 1,
    anticipacion: '18 horas minimo',
    caracteristicas: [
      'Opciones vegetarianas y veganas disponibles',
      'Ambiente acogedor y familiar'
    ]
  },
  {
    id: 5,
    photo: 'ImagenPrueba.jpg',
    name: 'Taco de Pollo',
    descriptionProduct: 'Taco relleno de jugoso pollo sazonado, acompañado de salsa fresca y guarniciones.',
    price: '$3.49',
    eventos: ['Cumpleaños', 'Fiestas'],
    cantidadPerosonas: 1,
    anticipacion: '24 horas minimo',
    caracteristicas: ['Ingredientes frescos y de alta calidad']
  },
  {
    id: 6,
    photo: 'ImagenPrueba.jpg',
    name: 'Batido de Frutas',
    descriptionProduct: 'Batido natural hecho con frutas frescas de temporada.',
    price: '$3.99',
    eventos: ['Reuniones', 'Eventos Corporativos', 'Fiestas'],
    cantidadPerosonas: 1,
    anticipacion: '24 horas minimo',
    caracteristicas: ['Opciones vegetarianas y veganas disponibles']
  }
];


export const galeriesImages: string[] = [
  '../../public/fondoLunas.png',
  '../../public/ImagendePruebaComida.jpg',
  '../../public/ImagenPrueba.jpg',
  '../../public/images.jfif',

]


export const howitworksSteps: HowItWorksStep[] = [
  { icons: 'jhj', title: 'Elige tu producto favorito del menú', description: 'elige tu producto favorito del menú' },
  { icons: 'jhj', title: 'Reserva tu fecha y hora para el evento', description: 'reserva tu fecha y hora para el evento' },
  { icons: 'jhj', title: "Escribinos por whatsapp o llamanos para coordinar", description: "escribinos por whatsapp o llamanos para coordinar" },
]


