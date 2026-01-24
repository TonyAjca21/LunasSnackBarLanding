import { e as createComponent, f as createAstro, m as maybeRenderHead, n as renderComponent, r as renderTemplate } from '../../chunks/astro/server_Bk3-GWK7.mjs';
import 'piccolore';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const ERROR_IMG_SRC = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";
function ImageWithFallback(props) {
  const [didError, setDidError] = useState(false);
  const handleError = () => {
    setDidError(true);
  };
  const { src, alt, style, className, ...rest } = props;
  return didError ? /* @__PURE__ */ jsx(
    "div",
    {
      className: `inline-block bg-gray-100 text-center align-middle ${className ?? ""}`,
      style,
      children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center w-full h-full", children: /* @__PURE__ */ jsx("img", { src: ERROR_IMG_SRC, alt: "Error loading image", ...rest, "data-original-url": src }) })
    }
  ) : /* @__PURE__ */ jsx("img", { src, alt, className, style, ...rest, onError: handleError });
}

function EventosId({ id, onBack }) {
  const [evento, setEvento] = useState(null);
  useEffect(() => {
    let mounted = true;
    const fetchEvento = async () => {
      try {
        const { doc, getDoc } = await import('firebase/firestore');
        const { db } = await import('../../chunks/firebase_CFmAhGEA.mjs');
        const ref = doc(db, "eventos", id);
        const snap = await getDoc(ref);
        if (mounted && snap.exists()) {
          setEvento({ id: snap.id, ...snap.data() });
        }
      } catch (err) {
        console.error("Error cargando evento:", err);
      }
    };
    fetchEvento();
    return () => {
      mounted = false;
    };
  }, [id]);
  if (!evento) return /* @__PURE__ */ jsx("p", { className: "text-white", children: "Cargando evento..." });
  const handleWhatsAppClick = () => {
    if (typeof window === "undefined") return;
    const number = evento?.whatsappNumber || "99268791";
    const message = encodeURIComponent(
      `Hola! Me interesa cotizar un evento similar a "${evento?.nombre}"`
    );
    window.open(`https://wa.me/${number}?text=${message}`, "_blank");
  };
  const handleBackClick = () => {
    if (onBack) return onBack();
    window.history.back();
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-linear-to-b from-[#0a0a0a] to-[#1a1a1a] text-white", children: [
    /* @__PURE__ */ jsxs(
      motion.button,
      {
        onClick: handleBackClick,
        className: "fixed top-6 left-6 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-4 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl border border-white/20 flex items-center gap-2",
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.5 },
        whileHover: { scale: 1.05, x: -5 },
        whileTap: { scale: 0.95 },
        children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "w-5 h-5" }),
          /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Regresar" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative w-full h-[50vh] md:h-[60vh] overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: evento.image,
          alt: evento.nombre,
          className: "w-full h-full object-cover"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4", children: [
        /* @__PURE__ */ jsx(
          "h1",
          {
            className: "text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2",
            style: { fontFamily: "Crimson Text, serif" },
            children: evento.nombre
          }
        ),
        /* @__PURE__ */ jsxs("p", { className: "text-white text-sm md:text-base mb-2 flex items-center gap-2", children: [
          "📍 ",
          evento.ubicacion,
          " • ",
          evento.fecha || evento.fechaevento
        ] }),
        evento.invitados && /* @__PURE__ */ jsxs("p", { className: "text-white text-xs md:text-sm max-w-2xl", children: [
          "Evento realizado para ",
          evento.invitados,
          " personas con nuestro exclusivo snack bar."
        ] }),
        !evento.invitados && evento.descripcion && /* @__PURE__ */ jsx("p", { className: "text-white text-xs md:text-sm max-w-2xl", children: evento.descripcion })
      ] })
    ] }),
    evento.descripcion && /* @__PURE__ */ jsx("section", { className: "py-16 px-4 md:px-8 max-w-4xl mx-auto", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.3 },
        transition: { duration: 0.8, ease: "easeOut" },
        children: [
          /* @__PURE__ */ jsx(
            "h2",
            {
              className: "text-3xl md:text-4xl text-center mb-6",
              style: { fontFamily: "Crimson Text, serif" },
              children: "Sobre el Evento"
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "w-24 h-1 bg-linear-to-r from-transparent via-white to-transparent mx-auto mb-8",
              initial: { scaleX: 0 },
              whileInView: { scaleX: 1 },
              viewport: { once: true },
              transition: { duration: 1, delay: 0.3 }
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: "bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl",
              initial: { opacity: 0, scale: 0.95 },
              whileInView: { opacity: 1, scale: 1 },
              viewport: { once: true },
              transition: { duration: 0.6, delay: 0.2 },
              children: [
                /* @__PURE__ */ jsx(
                  motion.p,
                  {
                    className: "text-gray-300 text-base md:text-lg leading-relaxed text-center",
                    initial: { opacity: 0 },
                    whileInView: { opacity: 1 },
                    viewport: { once: true },
                    transition: { duration: 0.8, delay: 0.4 },
                    children: evento.descripcion
                  }
                ),
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-6 mt-10",
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    transition: { duration: 0.6, delay: 0.6 },
                    children: [
                      evento.ubicacion && /* @__PURE__ */ jsxs(
                        motion.div,
                        {
                          className: "text-center",
                          whileHover: { scale: 1.05 },
                          transition: { type: "spring", stiffness: 300 },
                          children: [
                            /* @__PURE__ */ jsx("div", { className: "text-4xl mb-2", children: "📍" }),
                            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400 mb-1", children: "Ubicación" }),
                            /* @__PURE__ */ jsx("p", { className: "text-white font-medium", children: evento.ubicacion })
                          ]
                        }
                      ),
                      (evento.fecha || evento.fechaevento) && /* @__PURE__ */ jsxs(
                        motion.div,
                        {
                          className: "text-center",
                          whileHover: { scale: 1.05 },
                          transition: { type: "spring", stiffness: 300 },
                          children: [
                            /* @__PURE__ */ jsx("div", { className: "text-4xl mb-2", children: "📅" }),
                            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400 mb-1", children: "Fecha" }),
                            /* @__PURE__ */ jsx("p", { className: "text-white font-medium", children: evento.fecha || evento.fechaevento })
                          ]
                        }
                      ),
                      evento.invitados && /* @__PURE__ */ jsxs(
                        motion.div,
                        {
                          className: "text-center",
                          whileHover: { scale: 1.05 },
                          transition: { type: "spring", stiffness: 300 },
                          children: [
                            /* @__PURE__ */ jsx("div", { className: "text-4xl mb-2", children: "👥" }),
                            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400 mb-1", children: "Invitados" }),
                            /* @__PURE__ */ jsxs("p", { className: "text-white font-medium", children: [
                              evento.invitados,
                              " personas"
                            ] })
                          ]
                        }
                      )
                    ]
                  }
                )
              ]
            }
          )
        ]
      }
    ) }),
    evento.fotos && evento.fotos.length > 0 && /* @__PURE__ */ jsxs("section", { className: "py-12 px-4 md:px-8 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsx(
        motion.h2,
        {
          className: "text-2xl md:text-3xl text-center mb-8",
          style: { fontFamily: "Crimson Text, serif" },
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          children: "Galería de Fotos"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: evento.fotos.map((foto, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "relative aspect-4/3 overflow-hidden rounded-lg group cursor-pointer",
          initial: { opacity: 0, scale: 0.9 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: index * 0.1 },
          whileHover: { y: -8 },
          children: [
            /* @__PURE__ */ jsx(
              ImageWithFallback,
              {
                src: foto,
                alt: `Foto ${index + 1} del evento ${evento.nombre}`,
                className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" })
          ]
        },
        index
      )) })
    ] }),
    evento.videoUrl && /* @__PURE__ */ jsxs("section", { className: "py-12 px-4 md:px-8 max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsx(
        "h2",
        {
          className: "text-2xl md:text-3xl text-center mb-8",
          style: { fontFamily: "Crimson Text, serif" },
          children: "Así se vivió este evento 🎉"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "relative aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl", children: /* @__PURE__ */ jsxs(
        "video",
        {
          controls: true,
          className: "w-full h-full",
          poster: evento.image,
          children: [
            /* @__PURE__ */ jsx("source", { src: evento.videoUrl, type: "video/mp4" }),
            "Tu navegador no soporta el elemento de video."
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: handleWhatsAppClick,
        className: "fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-50",
        "aria-label": "Contactar por WhatsApp",
        children: /* @__PURE__ */ jsx(MessageCircle, { className: "w-6 h-6" })
      }
    )
  ] });
}

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  if (!id) throw new Error("Evento no encontrado");
  return renderTemplate`${maybeRenderHead()}<section class="bg-gray-950 "> ${renderComponent($$result, "EventosId", EventosId, { "id": id, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Tony Castro/Desktop/Proyecto/LunasSnackBarLanding/LunasSnackBarLanding/src/components/react/eventosId.tsx", "client:component-export": "EventosId" })} </section>`;
}, "C:/Users/Tony Castro/Desktop/Proyecto/LunasSnackBarLanding/LunasSnackBarLanding/src/pages/eventos/[id].astro", void 0);

const $$file = "C:/Users/Tony Castro/Desktop/Proyecto/LunasSnackBarLanding/LunasSnackBarLanding/src/pages/eventos/[id].astro";
const $$url = "/eventos/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
