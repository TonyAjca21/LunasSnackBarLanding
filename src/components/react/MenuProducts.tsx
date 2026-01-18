
import { useEffect, useState } from "react";
import ModalProduct from "./ModalProducts.tsx";
import {getDocs, collection} from "firebase/firestore";
import { db } from "../../lib/firebase.js";
import type { Servicios } from "../../lib/data.ts";
import { motion } from "framer-motion";

export function MenuProducts() {
const [isOpen, setIsOpen] = useState(false);
const [selectedMenu, setSelectedMenu] = useState<Servicios | null>(null);
const [ListServicios, setlistServicios] = useState<Servicios[]>([]);

 useEffect(() => {
  const fetchImages = async () => {
    try {
      const snapshot = await getDocs(collection(db, "Servicios"));
      const images = snapshot.docs.map(doc => {
        const data = doc.data() as Servicios;
        return { ...data };
      });
  console.log("SERVICIOS CARGADOS:", images);


    setlistServicios(images);
  
  if(images.length === 0){
    return <div>Servicio no disponible</div>
  }

        
    } catch (error) {
      console.error("Error cargando imágenes:", error);
    }
  };

  fetchImages();
}, []);
    const openModal = (product: Servicios) => {
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
            <h2
              className="text-4xl md:text-5xl font-bold text-amber-400"
              style={{ fontFamily: "Crimson Text, serif" }}
            >
              Menu Destacado
            </h2>
            <div className="h-px w-16 bg-amber-500"></div>
          </div>
        </div>
      </div>

      {/* Grid de productos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {ListServicios.filter((item) => item.estado === true).map((item, index) => (
          <motion.div
            key={item.id}
            className="bg-black border border-amber-500/20 rounded-lg overflow-hidden hover:border-amber-500/60 transition-all group cursor-pointer"
            onClick={() => openModal(item)}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="relative h-64 overflow-hidden">
              <motion.img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
              <p className="text-amber-400 mb-4">Desde ${item.price}</p>
              <button className="bg-amber-500/20 hover:bg-amber-500/40 text-amber-400 px-6 py-2 rounded-full transition-all hover:scale-105 hover:shadow-lg">
                Ver Más
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <ModalProduct isOpen={isOpen} onClose={() => setIsOpen(false)} menu={selectedMenu} />
    </section>
  );
}
export default MenuProducts;