

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { galeriesImages } from "../../lib/data";

export function EventsGalery() {

      const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
              {galeriesImages.map((image, index) => (
                <div key={index} className="px-2">
                  <div className="relative h-80 rounded-lg overflow-hidden">
                    <img
                      src={image}
                      alt={`Evento ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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


