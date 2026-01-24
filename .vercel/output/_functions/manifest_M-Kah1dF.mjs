import 'piccolore';
import { p as decodeKey } from './chunks/astro/server_Bk3-GWK7.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_rkLyPeuK.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Tony%20Castro/Desktop/Proyecto/LunasSnackBarLanding/LunasSnackBarLanding/","cacheDir":"file:///C:/Users/Tony%20Castro/Desktop/Proyecto/LunasSnackBarLanding/LunasSnackBarLanding/node_modules/.astro/","outDir":"file:///C:/Users/Tony%20Castro/Desktop/Proyecto/LunasSnackBarLanding/LunasSnackBarLanding/dist/","srcDir":"file:///C:/Users/Tony%20Castro/Desktop/Proyecto/LunasSnackBarLanding/LunasSnackBarLanding/src/","publicDir":"file:///C:/Users/Tony%20Castro/Desktop/Proyecto/LunasSnackBarLanding/LunasSnackBarLanding/public/","buildClientDir":"file:///C:/Users/Tony%20Castro/Desktop/Proyecto/LunasSnackBarLanding/LunasSnackBarLanding/dist/client/","buildServerDir":"file:///C:/Users/Tony%20Castro/Desktop/Proyecto/LunasSnackBarLanding/LunasSnackBarLanding/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/admin.Ch4GgbiN.css"}],"routeData":{"route":"/admin","isIndex":false,"type":"page","pattern":"^\\/admin\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin.astro","pathname":"/admin","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/admin.Ch4GgbiN.css"},{"type":"external","src":"/_astro/EventsGalery.DVyEPB8f.css"}],"routeData":{"route":"/eventos/[id]","isIndex":false,"type":"page","pattern":"^\\/eventos\\/([^/]+?)\\/?$","segments":[[{"content":"eventos","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/eventos/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/admin.Ch4GgbiN.css"},{"type":"inline","content":"html,body{margin:0;width:100%;height:100%}\n"},{"type":"external","src":"/_astro/EventsGalery.DVyEPB8f.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Tony Castro/Desktop/Proyecto/LunasSnackBarLanding/LunasSnackBarLanding/src/pages/admin.astro",{"propagation":"none","containsHead":true}],["C:/Users/Tony Castro/Desktop/Proyecto/LunasSnackBarLanding/LunasSnackBarLanding/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/admin@_@astro":"pages/admin.astro.mjs","\u0000@astro-page:src/pages/eventos/[id]@_@astro":"pages/eventos/_id_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_M-Kah1dF.mjs","C:/Users/Tony Castro/Desktop/Proyecto/LunasSnackBarLanding/LunasSnackBarLanding/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_0klUdZK5.mjs","C:/Users/Tony Castro/Desktop/Proyecto/LunasSnackBarLanding/LunasSnackBarLanding/src/pages/admin.astro?astro&type=script&index=0&lang.ts":"_astro/admin.astro_astro_type_script_index_0_lang.CS1hBN4O.js","C:/Users/Tony Castro/Desktop/Proyecto/LunasSnackBarLanding/LunasSnackBarLanding/src/components/react/MenuProducts.tsx":"_astro/MenuProducts.DYq5DScr.js","C:/Users/Tony Castro/Desktop/Proyecto/LunasSnackBarLanding/LunasSnackBarLanding/src/components/react/ContactForm.tsx":"_astro/ContactForm.CGDu1t24.js","C:/Users/Tony Castro/Desktop/Proyecto/LunasSnackBarLanding/LunasSnackBarLanding/src/components/react/eventosId.tsx":"_astro/eventosId.D11xB_9N.js","C:/Users/Tony Castro/Desktop/Proyecto/LunasSnackBarLanding/LunasSnackBarLanding/src/components/react/FunctionEvents.tsx":"_astro/FunctionEvents.DwTBCgKa.js","C:/Users/Tony Castro/Desktop/Proyecto/LunasSnackBarLanding/LunasSnackBarLanding/src/components/react/MenuNavbar.tsx":"_astro/MenuNavbar.D63cuHlH.js","@astrojs/react/client.js":"_astro/client.lDuxtpAY.js","C:/Users/Tony Castro/Desktop/Proyecto/LunasSnackBarLanding/LunasSnackBarLanding/src/components/admin/adminEntry":"_astro/adminEntry.BznSLa_4.js","C:/Users/Tony Castro/Desktop/Proyecto/LunasSnackBarLanding/LunasSnackBarLanding/src/components/react/EventsGalery.tsx":"_astro/EventsGalery.Dm1ijGG3.js","C:/Users/Tony Castro/Desktop/Proyecto/LunasSnackBarLanding/LunasSnackBarLanding/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.CS1hBN4O.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/admin.Ch4GgbiN.css","/favicon.svg","/fondoLunas.png","/ImagendePruebaComida.jpg","/ImagenPrueba.jpg","/images.jfif","/LogoLunasSnackBar.jpg","/_astro/admin.astro_astro_type_script_index_0_lang.CS1hBN4O.js","/_astro/adminEntry.BznSLa_4.js","/_astro/ajax-loader.BcnMEykj.gif","/_astro/calendar.eqNcQngw.js","/_astro/client.lDuxtpAY.js","/_astro/ContactForm.CGDu1t24.js","/_astro/createLucideIcon.CKVzfTfE.js","/_astro/eventosId.D11xB_9N.js","/_astro/EventsGalery.Dm1ijGG3.js","/_astro/EventsGalery.DVyEPB8f.css","/_astro/firebase.C03QrLrE.js","/_astro/FunctionEvents.DwTBCgKa.js","/_astro/index-36fcbc82.CfPh7_nC.js","/_astro/index.lRoflRlS.js","/_astro/jsx-runtime.D_zvdyIk.js","/_astro/Layout.astro_astro_type_script_index_0_lang.CS1hBN4O.js","/_astro/MenuNavbar.D63cuHlH.js","/_astro/MenuProducts.DYq5DScr.js","/_astro/message-circle.3GFQ0ews.js","/_astro/proxy.DtmZTt2Q.js","/_astro/slick.BlzDm7g2.svg"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"DvSUonIoYWhtqkVtiJ8o1FBhfGRSVh4UJhk2CTeu8f0="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
