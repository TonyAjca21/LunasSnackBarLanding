import React from "react";
import { type Menu } from "../../lib/data.ts";
interface ModalProductProps {
  isOpen: boolean;
  onClose: () => void;
  menu: Menu | null;
}

const ModalProducts: React.FC<ModalProductProps> = ({ isOpen, onClose, menu }) => {
  if (!isOpen) return null; // No renderiza si no está abierto

  return (
    <section className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
  
    <div className="rounded-lg max-w-2xl w-full p-6 shadow-lg relative max-h-[90vh] overflow-y-auto bg-gray-900">

  {/* Botón de eliminar en la esquina superior derecha */}
  <button 
    onClick={onClose} 
    className="absolute top-2 right-2 text-red-500 hover:text-red-700 bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md"
  >
    <span className="text-xl">x</span>
  </button>
        <img src={menu?.photo} alt="foto Producto" className="w-full h-60 object-cover rounded-lg" />
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2px_1fr] gap-6 mt-6 text-white">

          {/* COLUMNA IZQUIERDA */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-2">{menu?.name}</h2>
            <p className="text-gray-200 mb-2">{menu?.descriptionProduct}</p>

            <ul className="list-disc list-inside space-y-1 text-amber-300">
              {menu?.caracteristicas.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <p className="text-xl font-semibold text-amber-500">Precio: {menu?.price}</p>
          </div>

          {/* LINEA DIVISORIA VERTICAL */}
          <div className="bg-gray-400 w-full md:w-px h-full"></div>

          {/* COLUMNA DERECHA */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span>👥</span>
              <p>Rinde para {menu?.cantidadPerosonas} personas</p>
            </div>
          <div className="bg-gray-400 w-full h-px"></div>
            <div className="flex items-center gap-2">
              <span>⏰</span>
              <p className="">Anticipación: {menu?.anticipacion}</p>
            </div>
    <div className="bg-gray-400 w-full h-px"></div>
            <div>
              <p className="mb-1">Eventos ideales para:</p>
              <ul className="space-y-1">
                {menu?.eventos.map((evento, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span>🎉</span> {evento}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>



      </div>
    </section>


  );
};

export default ModalProducts;
