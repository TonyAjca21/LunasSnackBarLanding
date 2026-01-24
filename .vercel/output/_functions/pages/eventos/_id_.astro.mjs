import { e as createComponent, f as createAstro, m as maybeRenderHead, n as renderComponent, r as renderTemplate } from '../../chunks/astro/server_Bk3-GWK7.mjs';
import 'piccolore';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  if (!id) throw new Error("Evento no encontrado");
  return renderTemplate`${maybeRenderHead()}<section class="bg-gray-950 "> ${renderComponent($$result, "EventosId", null, { "id": id, "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/Users/Tony Castro/Desktop/Proyecto/LunasSnackBarLanding/LunasSnackBarLanding/src/components/react/eventosId.tsx", "client:component-export": "EventosId" })} </section>`;
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
