export  interface Product {
    id: number;
    photo: string;
    name: string;
    price: string;
}

 export const listProducts : Product[] = [
        { id:1 ,photo: 'ImagenPrueba.jpg', name: 'Hamburguesa Clásica', price: '$5.99' },
        { id:2 ,photo: 'ImagenPrueba.jpg', name: 'Papas Fritas', price: '$2.99' },
        { id:3 ,photo: 'ImagenPrueba.jpg', name: 'Refresco', price: '$1.99' },
        { id:4 ,photo: 'ImagenPrueba.jpg', name: 'Ensalada César', price: '$4.99' },
        { id:5 ,photo: 'ImagenPrueba.jpg', name: 'Taco de Pollo', price: '$3.49' },
    ];