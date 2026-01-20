import { e as createComponent, m as maybeRenderHead, n as renderComponent, r as renderTemplate, f as createAstro, h as addAttribute, k as renderScript, l as renderHead, o as renderSlot } from '../chunks/astro/server_BMjgO3qf.mjs';
import 'piccolore';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { HiX, HiMenu } from 'react-icons/hi';
/* empty css                                 */
/* empty css                                 */
import 'clsx';
import { Coffee, Calendar, MessageSquare, MessageCircle, Instagram } from 'lucide-react';
import { getDocs, collection } from 'firebase/firestore';
import { d as db } from '../chunks/firebase_Yv__SiKP.mjs';
import { motion } from 'framer-motion';
import 'firebase/auth';
export { renderers } from '../renderers.mjs';

function MenuNavbar() {
  const [open, setOpen] = useState(false);
  const menuItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Menú", href: "#menu" },
    { label: "Galería", href: "#galeria" },
    { label: "Cómo Funciona", href: "#como-funciona" },
    { label: "Contacto", href: "#contacto" }
  ];
  if (typeof document === "undefined") return null;
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };
  return /* @__PURE__ */ jsxs("nav", { className: "bg-gray-900 fixed w-full z-50", children: [
    /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-16", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "/LogoLunasSnackBar.jpg",
          alt: "Lunas Snack Bar",
          className: "h-14 w-14 object-contain"
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "hidden md:flex items-center space-x-8", children: menuItems.map((item) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => scrollToSection(item.href),
          className: "text-white/80 hover:text-amber-400 transition-colors",
          children: item.label
        },
        item.label
      )) }),
      /* @__PURE__ */ jsx("div", { className: "md:hidden", children: /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setOpen(!open),
          className: "text-white focus:outline-none",
          children: open ? /* @__PURE__ */ jsx(HiX, { className: "w-6 h-6" }) : /* @__PURE__ */ jsx(HiMenu, { className: "w-6 h-6" })
        }
      ) })
    ] }) }),
    open && /* @__PURE__ */ jsx("div", { className: "md:hidden bg-gray-900", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col px-4 py-4 space-y-2", children: menuItems.map((item) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => scrollToSection(item.href),
        className: "text-white/80 hover:text-amber-400 transition-colors text-left",
        children: item.label
      },
      item.label
    )) }) })
  ] });
}

const $$NavBar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-amber-500/20"> ${renderComponent($$result, "MenuNavbar", MenuNavbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Tony Castro/Desktop/Proyecto/LunasSnackBarLanding/LunasSnackBar/src/components/react/MenuNavbar.tsx", "client:component-export": "MenuNavbar" })} </section>`;
}, "C:/Users/Tony Castro/Desktop/Proyecto/LunasSnackBarLanding/LunasSnackBar/src/components/NavBar.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Lunas snack Bar</title><link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">${renderScript($$result, "C:/Users/Tony Castro/Desktop/Proyecto/LunasSnackBarLanding/LunasSnackBar/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")}${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderComponent($$result, "NavBar", $$NavBar, { "data-astro-cid-sckkx6r4": true })} <main class="max-w-full overflow-x-hidden" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "C:/Users/Tony Castro/Desktop/Proyecto/LunasSnackBarLanding/LunasSnackBar/src/layouts/Layout.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="inicio" class="relative w-full h-[120vh] md:h-[90vh]:"> <img src="/ImagenPrueba.jpg" alt="" class="absolute inset-0 w-full h-full object-cover"> <div class="absolute inset-0 bg-black/30"></div> <div class="absolute inset-0 flex items-center justify-center"> <h1 class="text-4xl md:text-6xl lg:text-8xl font-bold text-white text-center drop-shadow-lg">Bienvenidos a Luna's Snack Bar
</h1> </div> </section>`;
}, "C:/Users/Tony Castro/Desktop/Proyecto/LunasSnackBarLanding/LunasSnackBar/src/components/Header.astro", void 0);

const howitworksSteps = [
  {
    icons: Coffee,
    // icono de comida / producto
    title: "Elige tu producto favorito del menú",
    description: "Elige tu producto favorito del menú"
  },
  {
    icons: Calendar,
    // icono de calendario para reserva
    title: "Reserva tu fecha y hora para el evento",
    description: "Reserva tu fecha y hora para el evento"
  },
  {
    icons: MessageSquare,
    // icono de mensaje para contacto
    title: "Escribinos por whatsapp o llamanos para coordinar",
    description: "Escribinos por whatsapp o llamanos para coordinar"
  }
];

const ModalProducts = ({ isOpen, onClose, menu }) => {
  if (!isOpen) return null;
  return /* @__PURE__ */ jsx("section", { className: "fixed inset-0 bg-opacity-50 flex items-center justify-center z-50", children: /* @__PURE__ */ jsxs("div", { className: "rounded-lg max-w-2xl w-full p-6 shadow-lg relative max-h-[90vh] overflow-y-auto bg-gray-900", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: onClose,
        className: "absolute top-2 right-2 text-red-500 hover:text-red-700 bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md",
        children: /* @__PURE__ */ jsx("span", { className: "text-xl", children: "x" })
      }
    ),
    /* @__PURE__ */ jsx("img", { src: menu?.image, alt: "foto Producto", className: "w-full h-60 object-cover rounded-lg" }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[1fr_2px_1fr] gap-6 mt-6 text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-2", children: menu?.name }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-200 mb-2", children: menu?.descriptionProduct }),
        /* @__PURE__ */ jsx("ul", { className: "list-disc list-inside space-y-1 text-amber-300", children: menu?.caracteristicas.map((feature, index) => /* @__PURE__ */ jsx("li", { children: feature }, index)) }),
        /* @__PURE__ */ jsxs("p", { className: "text-xl font-semibold text-amber-500", children: [
          "Precio: ",
          menu?.price
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "bg-gray-400 w-full md:w-px h-full" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { children: "👥" }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Rinde para ",
            menu?.cantidadPerosonas,
            " personas"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "bg-gray-400 w-full h-px" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { children: "⏰" }),
          /* @__PURE__ */ jsxs("p", { className: "", children: [
            "Anticipación: ",
            menu?.anticipacion
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "bg-gray-400 w-full h-px" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "mb-1", children: "Eventos ideales para:" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: menu?.eventos.map((evento, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { children: "🎉" }),
            " ",
            evento
          ] }, index)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-6 flex justify-center", children: /* @__PURE__ */ jsxs(
      "a",
      {
        href: "https://wa.me/99268791",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full shadow-md transition-all transform hover:scale-105",
        children: [
          /* @__PURE__ */ jsx(MessageCircle, { className: "w-5 h-5" }),
          "Cotizar WhatsApp"
        ]
      }
    ) })
  ] }) });
};

function MenuProducts() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [ListServicios, setlistServicios] = useState([]);
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const snapshot = await getDocs(collection(db, "Servicios"));
        const images = snapshot.docs.map((doc) => {
          const data = doc.data();
          return { ...data };
        });
        console.log("SERVICIOS CARGADOS:", images);
        setlistServicios(images);
        if (images.length === 0) {
          return /* @__PURE__ */ jsx("div", { children: "Servicio no disponible" });
        }
      } catch (error) {
        console.error("Error cargando imágenes:", error);
      }
    };
    fetchImages();
  }, []);
  const openModal = (product) => {
    setIsOpen(true);
    setSelectedMenu(product);
  };
  return /* @__PURE__ */ jsxs("section", { id: "menu", className: "p-6 bg-zinc-900 rounded-xl shadow-xl", children: [
    /* @__PURE__ */ jsx("div", { className: "text-center mb-16", children: /* @__PURE__ */ jsx("div", { className: "inline-block", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
      /* @__PURE__ */ jsx("div", { className: "h-px w-16 bg-amber-500" }),
      /* @__PURE__ */ jsx(
        "h2",
        {
          className: "text-4xl md:text-5xl font-bold text-amber-400",
          style: { fontFamily: "Crimson Text, serif" },
          children: "Menu Destacado"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "h-px w-16 bg-amber-500" })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto", children: ListServicios.filter((item) => item.estado === true).map((item, index) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "bg-black border border-amber-500/20 rounded-lg overflow-hidden hover:border-amber-500/60 transition-all group cursor-pointer",
        onClick: () => openModal(item),
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: index * 0.1, duration: 0.5 },
        children: [
          /* @__PURE__ */ jsx("div", { className: "relative h-64 overflow-hidden", children: /* @__PURE__ */ jsx(
            motion.img,
            {
              src: item.image,
              alt: item.name,
              className: "w-full h-full object-cover",
              whileHover: { scale: 1.1 },
              transition: { duration: 0.3 }
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "p-6 text-center", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-2", children: item.name }),
            /* @__PURE__ */ jsxs("p", { className: "text-amber-400 mb-4", children: [
              "Desde $",
              item.price
            ] }),
            /* @__PURE__ */ jsx("button", { className: "bg-amber-500/20 hover:bg-amber-500/40 text-amber-400 px-6 py-2 rounded-full transition-all hover:scale-105 hover:shadow-lg", children: "Ver Más" })
          ] })
        ]
      },
      item.id
    )) }),
    /* @__PURE__ */ jsx(ModalProducts, { isOpen, onClose: () => setIsOpen(false), menu: selectedMenu })
  ] });
}

function FunctionEvents() {
  return /* @__PURE__ */ jsx("section", { id: "como-funciona", className: "py-20 bg-zinc-900 rounded-xl shadow-xl", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsx("div", { className: "text-center mb-16", children: /* @__PURE__ */ jsx("div", { className: "inline-block", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
      /* @__PURE__ */ jsx("div", { className: "h-px w-16 bg-amber-500" }),
      /* @__PURE__ */ jsx(
        "h2",
        {
          className: "text-4xl md:text-5xl font-bold text-amber-400",
          style: { fontFamily: "Crimson Text, serif" },
          children: "¿Cómo Funciona?"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "h-px w-16 bg-amber-500" })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto", children: howitworksSteps.map((step, index) => {
      const Icon = step.icons;
      return /* @__PURE__ */ jsxs("div", { className: "text-center group", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center justify-center w-20 h-20 bg-amber-500/20 rounded-full text-amber-400 mb-6 group-hover:bg-amber-500/30 transition-colors", children: [
          /* @__PURE__ */ jsx(Icon, { className: "w-10 h-10" }),
          " "
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsx("span", { className: "inline-block bg-amber-500/10 text-amber-400 px-4 py-1 rounded-full text-sm", children: index + 1 }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-3", children: step.title }),
        /* @__PURE__ */ jsx("p", { className: "text-white/70", children: step.description })
      ] }, index);
    }) })
  ] }) });
}

function ContactForm() {
  return /* @__PURE__ */ jsxs("section", { id: "contacto", className: "py-20 bg-black-900 rounded-xl shadow-xl ", children: [
    /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "text-center mb-16", children: /* @__PURE__ */ jsx("div", { className: "inline-block", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
      /* @__PURE__ */ jsx("div", { className: "h-px w-16 bg-amber-500" }),
      /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-amber-400", style: { fontFamily: "Crimson Text, serif" }, children: "Contáctanos" }),
      /* @__PURE__ */ jsx("div", { className: "h-px w-16 bg-amber-500" })
    ] }) }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "text-center py-4 px-4 max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsx("p", { className: "text-white/70 mb-5", children: "¿Tienes preguntas o quieres reservar nuestros servicios para tu próximo evento? ¡Estamos aquí para ayudarte!  contáctanos directamente a través de WhatsApp o Instagram. ¡Esperamos saber de ti pronto!" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row justify-center items-center gap-4 mt-6", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://wa.me/99268791",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex gap-2 bg-green-600 hover:bg-green-900 text-white font-bold py-3 px-6 rounded-md sm:rounded-full transition-colors",
            children: [
              /* @__PURE__ */ jsx(MessageCircle, { className: "w-5 h-5" }),
              "WhatsApp"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://instagram.com/lunassnackbar",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "\r\n  inline-flex gap-2\r\n  bg-linear-to-r from-purple-500 via-pink-500 to-orange-400\r\n  hover:from-purple-600 hover:via-pink-600 hover:to-orange-500\r\n  text-white font-bold\r\n  py-3 px-8\r\n  rounded-md sm:rounded-full\r\n  transition-colors\r\n",
            children: [
              /* @__PURE__ */ jsx(Instagram, { className: "w-8 h-8" }),
              "Instagram"
            ]
          }
        )
      ] })
    ] })
  ] });
}

const $$Contenido = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-gray-950 max-w-full"> ${renderComponent($$result, "MenuProducts", MenuProducts, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Tony Castro/Desktop/Proyecto/LunasSnackBarLanding/LunasSnackBar/src/components/react/MenuProducts.tsx", "client:component-export": "MenuProducts" })} ${renderComponent($$result, "EventsGalery", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/Users/Tony Castro/Desktop/Proyecto/LunasSnackBarLanding/LunasSnackBar/src/components/react/EventsGalery.tsx", "client:component-export": "EventsGalery" })} ${renderComponent($$result, "FunctionEvents", FunctionEvents, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Tony Castro/Desktop/Proyecto/LunasSnackBarLanding/LunasSnackBar/src/components/react/FunctionEvents.tsx", "client:component-export": "FunctionEvents" })} ${renderComponent($$result, "ContactForm", ContactForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Tony Castro/Desktop/Proyecto/LunasSnackBarLanding/LunasSnackBar/src/components/react/ContactForm.tsx", "client:component-export": "ContactForm" })} </section>`;
}, "C:/Users/Tony Castro/Desktop/Proyecto/LunasSnackBarLanding/LunasSnackBar/src/components/Contenido.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-gray-800 max-w-full"> <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-white"> <p>&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} todos los derechos reservados.</p> </div> </section>`;
}, "C:/Users/Tony Castro/Desktop/Proyecto/LunasSnackBarLanding/LunasSnackBar/src/components/Footer.astro", void 0);

const $$Content = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section> ${renderComponent($$result, "Header", $$Header, {})} ${renderComponent($$result, "Contenido", $$Contenido, {})} ${renderComponent($$result, "Footer", $$Footer, {})} </section>`;
}, "C:/Users/Tony Castro/Desktop/Proyecto/LunasSnackBarLanding/LunasSnackBar/src/components/Content.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Luna's Snack Bar" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", $$Content, {})} ` })}`;
}, "C:/Users/Tony Castro/Desktop/Proyecto/LunasSnackBarLanding/LunasSnackBar/src/pages/index.astro", void 0);

const $$file = "C:/Users/Tony Castro/Desktop/Proyecto/LunasSnackBarLanding/LunasSnackBar/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
