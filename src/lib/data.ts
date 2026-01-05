export  interface Menu {
    id: number;
    photo: string;
    name: string;
    price: string;
}

export interface HowItWorksStep {
    icons: string;
    title: string;
    description: string;
}

 export const listMenu : Menu[] = [
        { id:1 ,photo: 'ImagenPrueba.jpg', name: 'Hamburguesa Clásica', price: '$5.99' },
        { id:2 ,photo: 'ImagenPrueba.jpg', name: 'Papas Fritas', price: '$2.99' },
        { id:3 ,photo: 'ImagenPrueba.jpg', name: 'Refresco', price: '$1.99' },
        { id:4 ,photo: 'ImagenPrueba.jpg', name: 'Ensalada César', price: '$4.99' },
        { id:5 ,photo: 'ImagenPrueba.jpg', name: 'Taco de Pollo', price: '$3.49' },
    ];


export const galeriesImages: string[] = [
    '../../public/fondoLunas.png',
    '../../public/ImagendePruebaComida.jpg',
    '../../public/ImagenPrueba.jpg',
    '../../public/images.jfif',

]


export const howitworksSteps: HowItWorksStep[] = [
    {icons: 'jhj',title: 'Elige tu producto favorito del menú',description: 'elige tu producto favorito del menú'},
    {icons: 'jhj',title: 'Reserva tu fecha y hora para el evento',description: 'reserva tu fecha y hora para el evento'},
    {icons: 'jhj',title: "Escribinos por whatsapp o llamanos para coordinar",description: "escribinos por whatsapp o llamanos para coordinar"},
]


