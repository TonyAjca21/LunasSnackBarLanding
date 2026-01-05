import { useState } from "react";



export function MenuNavbar() {
  const [open, setopen] = useState(false);
  const menuItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Menú', href: '#menu' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Cómo Funciona', href: '#como-funciona' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setopen(false);
    }
  };


  return (
    <nav >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img src="../../../public/ImagendePruebaComida.jpg" alt="Lunas Snack Bar" className="h-14 w-14 object-contain" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-white/80 hover:text-amber-400 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
       </div>
      </div>
    </nav>
  );
}