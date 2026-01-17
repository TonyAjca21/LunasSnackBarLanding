

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase";
import type { Eventos } from "../../lib/data";
import { useState } from "react";

export function EventsGalery() {
const [galleryImages, setGalleryImages] = useState<{ id: string; url: string }[]>([]);
      const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    prevArrow: <button className="slick-prev"><ChevronLeft /></button>,
    nextArrow: <button className="slick-next"><ChevronRight /></button>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
  const fetchImages = async () => {
    try {
      const snapshot = await getDocs(collection(db, "eventos"));
      const images = snapshot.docs
        .map(doc => {
          const data = doc.data();
          return data.image ? { id: doc.id, url: data.image } : null;
        })
        .filter(Boolean) as { id: string; url: string }[];

      setGalleryImages(images);
    } catch (error) {
      console.error("Error cargando imágenes:", error);
    }
  };

  fetchImages();
}, []);
    return (
     <section id="galeria" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-16 bg-amber-500"></div>
                <h2 className="text-4xl md:text-5xl font-bold text-amber-400" style={{ fontFamily: 'Crimson Text, serif' }}>
                  Galería de Eventos
                </h2>
                <div className="h-px w-16 bg-amber-500"></div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto gallery-slider">
            <Slider {...sliderSettings}>
              {galleryImages.map((image, index) => (
                <div key={index} className="px-2">
                  <div className="relative h-80 rounded-lg overflow-hidden">
                    <img
                      src={image.url}
                      alt={`Evento ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      onClick={()=>{
                        window.location.href = `/eventos/${image.id}`;
                      }}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    );
}


