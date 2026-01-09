
import { useState } from "react";
import ModalProduct from "./ModalProducts.tsx";
import { listMenu, type Menu } from "../../lib/data.ts";


export function MenuProducts() {
const [isOpen, setIsOpen] = useState(false);
const [selectedMenu, setSelectedMenu] = useState<Menu | null>(null);
    const openModal = (product: Menu) => {
          // Guardamos el ID
          setIsOpen(true);   // Abrimos el modal
          setSelectedMenu(product);
    };
    return (
        <section id="menu" className="p-6 bg-zinc-900 rounded-xl shadow-xl">
            {/* Título */}
            <div className="text-center mb-16">
                <div className="inline-block">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-px w-16 bg-amber-500"></div>
                        <h2 className="text-4xl md:text-5xl font-bold text-amber-400" style={{ fontFamily: 'Crimson Text, serif' }}>
                            Menu Destacado
                        </h2>
                        <div className="h-px w-16 bg-amber-500"></div>
                    </div>
                </div>
            </div>

            {/* Grid de productos */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {listMenu.map((item) => (
              <div
                key={item.id}
                className="bg-black border border-amber-500/20 rounded-lg overflow-hidden hover:border-amber-500/60 transition-all group cursor-pointer"
                onClick={() =>  openModal(item)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.photo}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                  <p className="text-amber-400 mb-4">Desde ${item.price}</p>
                  <button className="bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 px-6 py-2 rounded-full transition-colors">
                    Ver Más
                  </button>
                </div>
              </div>
            ))}
          </div>

            <ModalProduct
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                 menu={selectedMenu}
             
            />
        </section>
    );

}

export default MenuProducts;