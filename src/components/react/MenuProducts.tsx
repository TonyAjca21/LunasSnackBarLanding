
import { useState } from "react";
import ModalProduct from "./ModalProducts.tsx";
import { listProducts, type Product } from "../../lib/data.ts";

export function MenuProducts() {
      const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [nameProduct, setNameProduct] = useState<string| null>(null);
  const [priceProduct, setPriceProduct] = useState<string| null>(null);
  const [photoProduct, setPhotoProduct] = useState<string>('');
  
      const openModal = (product: Product) => {
    setSelectedId(product.id); // Guardamos el ID
    setIsOpen(true);   // Abrimos el modal
    setNameProduct(product.name);
    setPriceProduct(product.price);
    setPhotoProduct(product.photo);
  };
    return (
        <div className="p-6 bg-zinc-900 rounded-xl shadow-xl">
            {/* Título */}
            <div className="text-center mb-10">
                <h1 className="text-yellow-500 text-3xl md:text-4xl font-extrabold tracking-tight">
                    Productos del Menú
                </h1>
            </div>

            {/* Grid de productos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center">

                {listProducts.map((product, index) => (
                    <div
                        key={index}
                        className="border border-zinc-700 p-4 rounded-xl bg-zinc-800/60 hover:bg-green-700/20 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl w-72"
                    >
                        <img
                            src={product.photo}
                            alt={product.name}
                            className="w-full h-48 object-cover mb-4 rounded-lg"
                        />
                        <h3 className="text-center text-white font-bold text-lg mb-1">{product.name}</h3>
                        <p className="text-center text-gray-400 mb-4">{product.price}</p>
                        <button className="block mx-auto bg-yellow-700 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300"
                        onClick={() => openModal(product)} >
                            Ver más
                        </button>
                    </div>
                ))}
            </div>

             <ModalProduct
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        productId={selectedId}
        nameProduct={nameProduct}
        priceProduct={priceProduct}
        photoProduct={photoProduct}
      />
    </div>
  );
       
}

export default MenuProducts;