import React from "react";

interface ModalProductProps {
    isOpen: boolean;
    onClose: () => void;
    productId: number | null;
    nameProduct: string | null;
    priceProduct: string | null;
    photoProduct: string ;
}

const ModalProducts: React.FC<ModalProductProps> = ({ isOpen, onClose, productId, nameProduct, priceProduct, photoProduct }) => {
    if (!isOpen) return null; // No renderiza si no está abierto

    return (
        <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-80 text-center">
                <h2 className="text-xl font-bold mb-4">Modal Producto</h2>
                <img src={photoProduct} alt="foto Producto" />
                <p className="mb-4">ID del producto: <strong>{productId}</strong></p>
                <p className="mb-4">Nombre del producto: <strong>{nameProduct}</strong></p>
                <p className="mb-4">Precio del producto: <strong>{priceProduct}</strong></p>
                <button
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={onClose}
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
};

export default ModalProducts;
