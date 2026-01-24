import { e as createComponent, f as createAstro, h as addAttribute, k as renderScript, l as renderHead, n as renderComponent, r as renderTemplate } from '../chunks/astro/server_Bk3-GWK7.mjs';
import 'piccolore';
/* empty css                                 */
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { storage, db, auth } from '../chunks/firebase_CFmAhGEA.mjs';
import { Calendar, MapPin, Edit2, Trash2, Tag, X, Users, Upload, Plus, User, DollarSign, Clock, Package, Moon, LogOut } from 'lucide-react';
import { ref, deleteObject, uploadBytes, getDownloadURL } from 'firebase/storage';
import { addDoc, collection, onSnapshot, deleteDoc, doc, updateDoc } from 'firebase/firestore';
export { renderers } from '../renderers.mjs';

function EventCard({ event, onEdit, onDelete }) {
  return /* @__PURE__ */ jsxs("div", { className: "bg-linear-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-indigo-500/20 hover:shadow-xl group", children: [
    event.image && /* @__PURE__ */ jsxs("div", { className: "relative h-48 overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: event.image,
          alt: event.nombre,
          className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-linear-to-t from-slate-900 to-transparent opacity-60" }),
      /* @__PURE__ */ jsx(
        "span",
        {
          className: `absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full
        ${event.estado ? "bg-green-500" : "bg-red-500"} text-white`,
          children: event.estado ? "Disponible" : "No disponible"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-3", children: event.nombre }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 mb-4 line-clamp-2", children: event.descripcion }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2 mb-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm text-slate-300", children: [
          /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4 text-indigo-400" }),
          /* @__PURE__ */ jsx("span", { children: event.fechaevento })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm text-slate-300", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4 text-indigo-400" }),
          /* @__PURE__ */ jsx("span", { children: event.ubicacion })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2 pt-4 border-t border-slate-700", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => onEdit(event),
            className: "flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors",
            children: [
              /* @__PURE__ */ jsx(Edit2, { className: "w-4 h-4" }),
              "Editar"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => onDelete(event),
            className: "flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors",
            children: [
              /* @__PURE__ */ jsx(Trash2, { className: "w-4 h-4" }),
              "Eliminar"
            ]
          }
        )
      ] })
    ] })
  ] });
}

function ServiceCard({ service, onEdit, onDelete }) {
  return /* @__PURE__ */ jsxs("div", { className: "bg-linear-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-purple-500/20 hover:shadow-xl group", children: [
    service.image && /* @__PURE__ */ jsxs("div", { className: "relative h-48 overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: service.image,
          alt: service.name,
          className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-linear-to-t from-slate-900 to-transparent opacity-60" }),
      /* @__PURE__ */ jsx(
        "span",
        {
          className: `absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full
        ${service.estado ? "bg-green-500" : "bg-red-500"} text-white`,
          children: service.estado ? "Disponible" : "No disponible"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "p-6 space-y-4", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white", children: service.name }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("span", { className: "text-2xl font-bold text-purple-400", children: [
          service.price,
          " Lps"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 ", children: [
          " ",
          /* @__PURE__ */ jsxs("span", { className: "text-xs text-slate-400 font-bold", children: [
            service.anticipacion,
            " de anticipación"
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium text-slate-400", children: [
            "Para ",
            service.cantidadPerosonas,
            " persona(s)"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm line-clamp-3", children: service.descriptionProduct }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
            /* @__PURE__ */ jsx(Tag, { className: "w-4 h-4 text-purple-400" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-slate-200", children: "Características" })
          ] }),
          /* @__PURE__ */ jsx("ul", { className: "list-disc list-inside space-y-1 text-sm text-slate-300", children: service.caracteristicas?.map((item, index) => /* @__PURE__ */ jsx("li", { children: item }, index)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
            /* @__PURE__ */ jsx(Tag, { className: "w-4 h-4 text-purple-400" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-slate-200", children: "Eventos" })
          ] }),
          /* @__PURE__ */ jsx("ul", { className: "list-disc list-inside space-y-1 text-sm text-slate-300", children: service.eventos?.map((item, index) => /* @__PURE__ */ jsx("li", { children: item }, index)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2 pt-4 border-t border-slate-700", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => onEdit(service),
            className: "flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors",
            children: [
              /* @__PURE__ */ jsx(Edit2, { className: "w-4 h-4" }),
              "Editar"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => onDelete(service),
            className: "flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors",
            children: [
              /* @__PURE__ */ jsx(Trash2, { className: "w-4 h-4" }),
              "Eliminar"
            ]
          }
        )
      ] })
    ] })
  ] });
}

function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;
  return /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm", children: /* @__PURE__ */ jsxs("div", { className: "bg-linear-to-br from-slate-900 to-slate-800 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden border border-slate-700/50", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-6 border-b border-slate-700/50", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold text-white", children: title }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: onClose,
          className: "p-2 rounded-lg hover:bg-slate-700/50 transition-colors",
          children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5 text-slate-400" })
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "p-6 overflow-y-auto max-h-[calc(90vh-80px)]", children })
  ] }) });
}

function EventForm({ event, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    nombre: event?.nombre || "",
    descripcion: event?.descripcion || "",
    fechaevento: event?.fechaevento || "",
    ubicacion: event?.ubicacion || "",
    image: event?.image || "",
    url: event?.url || "",
    imagePath: event?.imagePath || "",
    imageFiles: [],
    // <-- ahora es un array de File
    estado: event?.estado ?? true,
    fotos: event?.fotos || [],
    videoUrl: event?.videoUrl || "",
    videoPath: event?.videoPath || "",
    whatsappNumber: event?.whatsappNumber || "",
    invitados: event?.invitados || ""
  });
  const [imagePreviews, setImagePreviews] = useState(event?.fotos || []);
  const [imageFiles, setImageFiles] = useState([]);
  const [videoFile, setVideoFile] = useState(null);
  const [videoPreview, setVideoPreview] = useState(event?.videoUrl || "");
  const handleVideoChange = (e) => {
    if (!e.target.files?.[0]) return;
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      videoFile: file
      // 🔥 CLAVE
    }));
    setVideoPreview(URL.createObjectURL(file));
  };
  const handleImageChange = (e) => {
    if (!e.target.files) return;
    const filesArray = Array.from(e.target.files);
    const newPreviews = filesArray.map((file) => URL.createObjectURL(file));
    setImageFiles((prev) => [...prev, ...filesArray]);
    setImagePreviews((prev) => [...prev, ...newPreviews]);
    setFormData((prev) => ({
      ...prev,
      imageFiles: prev.imageFiles ? [...prev.imageFiles, ...filesArray] : filesArray
    }));
  };
  const removeImage = (index) => {
    setFormData((prev) => ({
      ...prev,
      imageFiles: prev.imageFiles?.filter((_, i) => i !== index)
    }));
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit(formData);
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-slate-300 mb-2", children: "Título del Evento" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          value: formData.nombre,
          onChange: (e) => setFormData({ ...formData, nombre: e.target.value }),
          className: "w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent",
          placeholder: "Ej: Noche de Luna Llena",
          required: true
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-slate-300 mb-2", children: "Descripción" }),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          value: formData.descripcion,
          onChange: (e) => setFormData({ ...formData, descripcion: e.target.value }),
          rows: 4,
          className: "w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none",
          placeholder: "Describe el evento...",
          required: true
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("label", { className: "block text-sm font-medium text-slate-300 mb-2", children: [
          /* @__PURE__ */ jsx(Calendar, { className: "inline w-4 h-4 mr-1" }),
          "Fecha"
        ] }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            value: formData.fechaevento,
            onChange: (e) => setFormData({ ...formData, fechaevento: e.target.value }),
            className: "w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent",
            required: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("label", { className: "block text-sm font-medium text-slate-300 mb-2", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "inline w-4 h-4 mr-1" }),
          "Ubicación"
        ] }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            value: formData.ubicacion,
            onChange: (e) => setFormData({ ...formData, ubicacion: e.target.value }),
            className: "w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent",
            placeholder: "Ej: Lunas Snack Bar",
            required: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("label", { className: "block text-sm font-medium text-slate-300 mb-2", children: [
          /* @__PURE__ */ jsx(Users, { className: "inline w-4 h-4 mr-1" }),
          "Invitado"
        ] }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            value: formData.invitados,
            onChange: (e) => setFormData({ ...formData, invitados: e.target.value }),
            className: "w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent",
            placeholder: "Ej: Lunas Snack Bar",
            required: true
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "checkbox",
          id: "available",
          checked: formData.estado,
          onChange: (e) => setFormData({ ...formData, estado: e.target.checked }),
          className: "w-5 h-5 rounded bg-slate-800/50 border-slate-700 text-purple-600 focus:ring-2 focus:ring-purple-500"
        }
      ),
      /* @__PURE__ */ jsx("label", { htmlFor: "available", className: "text-sm font-medium text-slate-300", children: "Disponible" })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("label", { className: "block text-sm font-medium text-slate-300 mb-2", children: [
        /* @__PURE__ */ jsx(Upload, { className: "inline w-4 h-4 mr-1" }),
        "Imágenes del Evento"
      ] }),
      imagePreviews.length > 0 ? /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-4", children: [
        imagePreviews.map((preview, index) => /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: preview,
              alt: `Preview ${index}`,
              className: "w-full h-48 object-cover rounded-lg"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => removeImage(index),
              className: "absolute top-2 right-2 p-2 bg-red-500 hover:bg-red-600 rounded-full transition-colors",
              children: /* @__PURE__ */ jsx(X, { className: "w-4 h-4 text-white" })
            }
          )
        ] }, index)),
        /* @__PURE__ */ jsxs("label", { className: "flex h-48 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-700 hover:border-indigo-500 transition-colors", children: [
          /* @__PURE__ */ jsx(Plus, { className: "w-10 h-10 text-indigo-400 mb-2" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm text-indigo-400", children: "Agregar más" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "file",
              accept: "image/*",
              multiple: true,
              onChange: handleImageChange,
              className: "hidden"
            }
          )
        ] })
      ] }) : /* @__PURE__ */ jsxs("div", { className: "border-2 border-dashed border-slate-700 rounded-lg p-8 text-center hover:border-indigo-500 transition-colors", children: [
        /* @__PURE__ */ jsx(Upload, { className: "w-12 h-12 text-slate-500 mx-auto mb-3" }),
        /* @__PURE__ */ jsxs("label", { className: "cursor-pointer", children: [
          /* @__PURE__ */ jsx("span", { className: "text-indigo-400 hover:text-indigo-300", children: "Seleccionar imágenes" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "file",
              accept: "image/*",
              multiple: true,
              onChange: handleImageChange,
              className: "hidden"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
      /* @__PURE__ */ jsxs("label", { className: "block text-sm font-medium text-slate-300 mb-2", children: [
        /* @__PURE__ */ jsx(Upload, { className: "inline w-4 h-4 mr-1" }),
        "Video del Evento"
      ] }),
      videoPreview ? /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx(
          "video",
          {
            src: videoPreview,
            controls: true,
            className: "w-full h-48 object-cover rounded-lg"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              setVideoFile(null);
              setVideoPreview("");
            },
            className: "absolute top-2 right-2 p-2 bg-red-500 hover:bg-red-600 rounded-full transition-colors",
            children: /* @__PURE__ */ jsx(X, { className: "w-4 h-4 text-white" })
          }
        )
      ] }) : /* @__PURE__ */ jsxs("div", { className: "border-2 border-dashed border-slate-700 rounded-lg p-8 text-center hover:border-indigo-500 transition-colors", children: [
        /* @__PURE__ */ jsx(Upload, { className: "w-12 h-12 text-slate-500 mx-auto mb-3" }),
        /* @__PURE__ */ jsxs("label", { className: "cursor-pointer", children: [
          /* @__PURE__ */ jsx("span", { className: "text-indigo-400 hover:text-indigo-300", children: "Seleccionar video" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "file",
              accept: "video/*",
              onChange: handleVideoChange,
              className: "hidden"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-3 pt-4", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          className: "flex-1 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors font-medium",
          children: event ? "Actualizar Evento" : "Crear Evento"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: onCancel,
          className: "flex-1 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors font-medium",
          children: "Cancelar"
        }
      )
    ] })
  ] });
}

function ServiceForm({ service, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    name: service?.name || "",
    descriptionProduct: service?.descriptionProduct || "",
    price: service?.price || "",
    caracteristicas: service?.caracteristicas || [],
    image: service?.image || "",
    cantidadPerosonas: service?.cantidadPerosonas || 1,
    eventos: service?.eventos || [],
    anticipacion: service?.anticipacion || "",
    estado: service?.estado ?? true,
    imagePath: service?.imagePath || "",
    imageFile: void 0
  });
  const [imagePreview, setImagePreview] = useState(service?.image || "");
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, imageFile: file });
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };
  const removeImage = () => {
    setImagePreview("");
    setFormData({ ...formData, image: "" });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submit iniciado");
    await onSubmit({
      name: formData.name,
      descriptionProduct: formData.descriptionProduct,
      price: formData.price,
      caracteristicas: formData.caracteristicas || [],
      imageFile: formData.imageFile,
      image: imagePreview,
      imagePath: formData.imagePath,
      cantidadPerosonas: formData.cantidadPerosonas,
      eventos: formData.eventos,
      anticipacion: formData.anticipacion,
      estado: formData.estado
    });
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-slate-300 mb-2", children: "Nombre del Servicio/Producto" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          value: formData.name,
          onChange: (e) => setFormData({ ...formData, name: e.target.value }),
          className: "w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent",
          placeholder: "Ej: Café Lunar",
          required: true
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-slate-300 mb-2", children: "Descripción" }),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          value: formData.descriptionProduct,
          onChange: (e) => setFormData({ ...formData, descriptionProduct: e.target.value }),
          rows: 4,
          className: "w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none",
          placeholder: "Describe el servicio o producto...",
          required: true
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("label", { className: "block text-sm font-medium text-slate-300 mb-2", children: [
          /* @__PURE__ */ jsx(User, { className: "inline w-4 h-4 mr-1" }),
          "Cantidad de Personas"
        ] }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "number",
            value: formData.cantidadPerosonas,
            onChange: (e) => setFormData({ ...formData, cantidadPerosonas: e.target.valueAsNumber }),
            className: "w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent",
            placeholder: "1",
            required: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("label", { className: "block text-sm font-medium text-slate-300 mb-2", children: [
            /* @__PURE__ */ jsx(DollarSign, { className: "inline w-4 h-4 mr-1" }),
            "Precio"
          ] }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              value: formData.price,
              onChange: (e) => setFormData({ ...formData, price: e.target.value }),
              className: "w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent",
              placeholder: "Ej: $5.00",
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("label", { className: "block text-sm font-medium text-slate-300 mb-2", children: [
            /* @__PURE__ */ jsx(Clock, { className: "inline w-4 h-4 mr-1" }),
            "Anticipación"
          ] }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              value: formData.anticipacion,
              onChange: (e) => setFormData({ ...formData, anticipacion: e.target.value }),
              className: "w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent",
              placeholder: "Ej: 2 horas",
              required: true
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("label", { className: "block text-sm font-medium text-slate-300 mb-2", children: [
        /* @__PURE__ */ jsx(Package, { className: "inline w-4 h-4 mr-1" }),
        "Caracteristica del servicio"
      ] }),
      /* @__PURE__ */ jsx(
        "input",
        {
          value: formData.caracteristicas,
          onChange: (e) => setFormData({ ...formData, caracteristicas: e.target.value.split(",").map((item) => item.trim()) }),
          className: "w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent",
          required: true
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("label", { className: "block text-sm font-medium text-slate-300 mb-2", children: [
        /* @__PURE__ */ jsx(Package, { className: "inline w-4 h-4 mr-1" }),
        "Eventos"
      ] }),
      /* @__PURE__ */ jsx(
        "input",
        {
          value: formData.eventos,
          onChange: (e) => setFormData({ ...formData, eventos: e.target.value.split(",").map((item) => item.trim()) }),
          className: "w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent",
          required: true
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-8 ", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "checkbox",
          id: "available",
          checked: formData.estado,
          onChange: (e) => setFormData({ ...formData, estado: e.target.checked }),
          className: "w-5 h-5 rounded bg-slate-800/50 border-slate-700 text-purple-600 focus:ring-2 focus:ring-purple-500"
        }
      ),
      /* @__PURE__ */ jsx("label", { htmlFor: "available", className: "text-sm font-medium text-slate-300", children: "Disponible" })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("label", { className: "block text-sm font-medium text-slate-300 mb-2", children: [
        /* @__PURE__ */ jsx(Upload, { className: "inline w-4 h-4 mr-1" }),
        "Imagen del Producto"
      ] }),
      imagePreview ? /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: imagePreview,
            alt: "Preview",
            className: "w-full h-48 object-cover rounded-lg"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: removeImage,
            className: "absolute top-2 right-2 p-2 bg-red-500 hover:bg-red-600 rounded-full transition-colors",
            children: /* @__PURE__ */ jsx(X, { className: "w-4 h-4 text-white" })
          }
        )
      ] }) : /* @__PURE__ */ jsxs("div", { className: "border-2 border-dashed border-slate-700 rounded-lg p-8 text-center hover:border-purple-500 transition-colors", children: [
        /* @__PURE__ */ jsx(Upload, { className: "w-12 h-12 text-slate-500 mx-auto mb-3" }),
        /* @__PURE__ */ jsxs("label", { className: "cursor-pointer", children: [
          /* @__PURE__ */ jsx("span", { className: "text-purple-400 hover:text-purple-300", children: "Seleccionar imagen" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "file",
              accept: "image/*",
              onChange: handleImageChange,
              className: "hidden"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-3 pt-4", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          className: "flex-1 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-medium",
          children: service ? "Actualizar Servicio" : "Crear Servicio"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: onCancel,
          className: "flex-1 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors font-medium",
          children: "Cancelar"
        }
      )
    ] })
  ] });
}

const uploadImages = async (files, eventName) => {
  const uploadedFiles = [];
  for (const file of files) {
    const safeFileName = file.name.replace(/[^\w.-]/g, "_");
    const filePath = `eventos/${eventName}/img/${Date.now()}-${safeFileName}`;
    const storageRef = ref(storage, filePath);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    uploadedFiles.push({ url, path: filePath });
  }
  return uploadedFiles;
};
const uploadVideo = async (file, eventName) => {
  const safeFileName = file.name.replace(/[^\w.-]/g, "_");
  const filePath = `eventos/${eventName}/video/${Date.now()}-${safeFileName}`;
  const storageRef = ref(storage, filePath);
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return { url, path: filePath };
};
const uploadImageService = async (file, folder = "servicios") => {
  const safeFileName = file.name.replace(/[^\w.-]/g, "_");
  const filePath = `${folder}/${Date.now()}-${safeFileName}`;
  const storageRef = ref(storage, filePath);
  console.log("FILE RECIBIDO:", file);
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return { url, path: filePath };
};
const saveService = async (data) => {
  const docRef = await addDoc(collection(db, "Servicios"), {
    ...data,
    createdAt: /* @__PURE__ */ new Date()
  });
  return docRef.id;
};
const deleteImage = async (path) => {
  try {
    if (!path) return;
    const imageRef = ref(storage, path);
    await deleteObject(imageRef);
    console.log("Imagen eliminada:", path);
  } catch (error) {
    console.error("Error eliminando imagen:", error);
  }
};

function Dashboards() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("events");
  const [events, setEvents] = useState([]);
  const [services, setServices] = useState([]);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState();
  const [editingService, setEditingService] = useState();
  const [videoFile, setVideoFile] = useState(null);
  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        window.location.href = "/admin";
      } else {
        setUser(currentUser);
        setLoading(false);
      }
    });
    return () => unsubscribeAuth();
  }, []);
  useEffect(() => {
    if (!user) return;
    const eventsRef = collection(db, "eventos");
    const unsubscribeEvents = onSnapshot(eventsRef, (snapshot) => {
      const fetchedEvents = snapshot.docs.map((doc2) => ({
        id: doc2.id,
        ...doc2.data()
      }));
      console.log("Eventos traídos:", fetchedEvents);
      setEvents(fetchedEvents);
    });
    return () => unsubscribeEvents();
  }, [user]);
  useEffect(() => {
    if (!user) return;
    const servicesRef = collection(db, "Servicios");
    const unsubscribeServices = onSnapshot(servicesRef, (snapshot) => {
      const fetchedServices = snapshot.docs.map((doc2) => ({
        id: doc2.id,
        ...doc2.data()
      }));
      console.log("Servicios traídos:", fetchedServices);
      setServices(fetchedServices);
    });
    return () => unsubscribeServices();
  }, [user]);
  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = "/admin";
  };
  if (loading) {
    return /* @__PURE__ */ jsx("p", { className: "text-center mt-20", children: "Cargando..." });
  }
  const handleAddEvent = async (data) => {
    try {
      console.log("handleAddEvent llamado con:", data);
      let uploadedImages = [];
      if (data.imageFiles && data.imageFiles.length > 0) {
        uploadedImages = await uploadImages(data.imageFiles, data.nombre);
      }
      let videoData = data.videoFile ? await uploadVideo(data.videoFile, data.nombre) : { url: "", path: "" };
      const urls = uploadedImages.map((u) => u.url);
      const paths = uploadedImages.map((u) => u.path);
      const eventData = {
        nombre: data.nombre,
        descripcion: data.descripcion,
        fechaevento: data.fechaevento,
        ubicacion: data.ubicacion,
        image: urls[0] || "",
        // primera imagen como portada
        imagePath: paths[0] || "",
        // path de la portada
        url: data.url || "",
        estado: data.estado,
        fotos: urls,
        // todas las imágenes
        videoUrl: videoData?.url || "",
        videoPath: videoData?.path || "",
        whatsappNumber: data.whatsappNumber || "",
        invitados: data.invitados || ""
      };
      console.log("Datos del evento a guardar:", eventData);
      const docRef = await addDoc(collection(db, "eventos"), eventData);
      console.log("Evento guardado correctamente con ID:", docRef.id);
      closeModals();
    } catch (error) {
      console.error("Error al guardar evento:", error);
      alert("Error al guardar el evento");
    }
  };
  const handleEditEvent = (event) => {
    setEditingEvent(event);
    setIsEventModalOpen(true);
  };
  const handleDeleteEvent = async (event) => {
    if (!confirm("¿Seguro que quieres eliminar este evento?")) return;
    try {
      if (event.image) {
        await deleteImage(event.image);
      }
      await deleteDoc(doc(db, "eventos", event.id));
      alert("Evento eliminado correctamente");
    } catch (error) {
      console.error("Error al eliminar evento:", error);
      alert("No se pudo eliminar el evento");
    }
  };
  const handleFormSubmitService = async (data) => {
    if (editingService) {
      console.log("EDITING SERVICE EN DASHBOARD:", editingService);
      await handleUpdateService({ ...data, id: editingService.id, image: data.image });
    } else {
      await handleAddService(data);
    }
  };
  const handleFormSubmit = async (data) => {
    if (editingEvent) {
      console.log("EDITING EVENT EN DASHBOARD:", editingEvent);
      await handleUpdateEvent({ ...data, id: editingEvent.id, image: data.image });
    } else {
      await handleAddEvent(data);
    }
  };
  const handleUpdateEvent = async (updatedEvent) => {
    try {
      let imageUrl = updatedEvent.image || "";
      let imagePath = updatedEvent.imagePath || "";
      if (updatedEvent.imageFile) {
        if (imagePath) {
          console.log("Eliminando imagen anterior:", imagePath);
          await deleteImage(imagePath);
        }
        const uploadedImage = await uploadImages([updatedEvent.imageFile], updatedEvent.nombre);
        imageUrl = uploadedImage[0].url;
        imagePath = uploadedImage[0].path;
      }
      if (!updatedEvent.id) {
        throw new Error("ID del evento no existe");
      }
      const eventRef = doc(db, "eventos", updatedEvent.id);
      await updateDoc(eventRef, {
        nombre: updatedEvent.nombre,
        descripcion: updatedEvent.descripcion,
        fechaevento: updatedEvent.fechaevento,
        ubicacion: updatedEvent.ubicacion,
        image: imageUrl,
        imagePath,
        url: updatedEvent.url || "",
        estado: updatedEvent.estado
      });
      setEvents(
        (prev) => prev.map(
          (e) => e.id === updatedEvent.id ? { ...updatedEvent, image: imageUrl, imagePath } : e
        )
      );
      setIsEventModalOpen(false);
      setEditingEvent(void 0);
      alert("Evento actualizado correctamente");
    } catch (error) {
      console.error("Error al actualizar evento:", error);
      alert("No se pudo actualizar el evento");
    }
  };
  const handleUpdateService = async (updatedService) => {
    try {
      let imageUrl = updatedService.image || "";
      let imagePath = updatedService.imagePath || "";
      if (updatedService.imageFile) {
        if (imagePath) {
          console.log("Eliminando imagen anterior:", imagePath);
          await deleteImage(imagePath);
        }
        const uploadedImage = await uploadImageService(updatedService.imageFile);
        imageUrl = uploadedImage.url;
        imagePath = uploadedImage.path;
      }
      const eventRef = doc(db, "Servicios", updatedService.id);
      await updateDoc(eventRef, {
        name: updatedService.name,
        descriptionProduct: updatedService.descriptionProduct,
        price: updatedService.price,
        caracteristicas: updatedService.caracteristicas,
        eventos: updatedService.eventos,
        anticipacion: updatedService.anticipacion,
        estado: updatedService.estado,
        cantidadPerosonas: updatedService.cantidadPerosonas,
        image: imageUrl,
        imagePath
      });
      setServices(
        (prev) => prev.map(
          (e) => e.id === updatedService.id ? { ...updatedService, image: imageUrl, imagePath } : e
        )
      );
      setIsEventModalOpen(false);
      setEditingEvent(void 0);
      alert("Evento actualizado correctamente");
    } catch (error) {
      console.error("Error al actualizar evento:", error);
      alert("No se pudo actualizar el evento");
    }
  };
  const handleAddService = async (data) => {
    try {
      let uploadedImage = data.imageFile ? await uploadImageService(data.imageFile) : { url: "", path: "" };
      const eventData = {
        name: data.name,
        descriptionProduct: data.descriptionProduct,
        price: data.price,
        caracteristicas: data.caracteristicas,
        eventos: data.eventos,
        anticipacion: data.anticipacion,
        estado: data.estado,
        cantidadPerosonas: data.cantidadPerosonas,
        image: uploadedImage.url,
        imagePath: uploadedImage.path
      };
      const docRef = await saveService(eventData);
      closeModals();
    } catch (error) {
      console.error("Error al guardar servicio:", error);
      alert("Error al guardar el servicio");
    }
  };
  const handleEditService = (service) => {
    setEditingService(service);
    setIsServiceModalOpen(true);
  };
  const handleDeleteService = async (service) => {
    if (!confirm("¿Seguro que quieres eliminar este evento?")) return;
    try {
      if (service.image) {
        await deleteImage(service.image);
      }
      await deleteDoc(doc(db, "Servicios", service.id.toString()));
      alert("Evento eliminado correctamente");
    } catch (error) {
      console.error("Error al eliminar evento:", error);
      alert("No se pudo eliminar el evento");
    }
  };
  const closeModals = () => {
    setIsEventModalOpen(false);
    setIsServiceModalOpen(false);
    setEditingEvent(void 0);
    setEditingService(void 0);
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-indigo-950", children: [
    /* @__PURE__ */ jsx("header", { className: "bg-slate-900/50 backdrop-blur-lg border-b border-slate-800 sticky top-0 z-40", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("div", { className: "p-3 bg-linear-to-br from-indigo-600 to-purple-600 rounded-xl shadow-lg shadow-indigo-500/30", children: /* @__PURE__ */ jsx(Moon, { className: "w-8 h-8 text-white" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-white", children: "Lunas Snack Bar" }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm", children: "Panel de Administración" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: handleLogout,
          className: "flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors shadow-lg shadow-red-500/20",
          children: [
            /* @__PURE__ */ jsx(LogOut, { className: "w-5 h-5" }),
            /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Salir" })
          ]
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex gap-4 mb-8", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setActiveTab("events"),
            className: `flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${activeTab === "events" ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30" : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"}`,
            children: [
              /* @__PURE__ */ jsx(Calendar, { className: "w-5 h-5" }),
              "Eventos"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setActiveTab("services"),
            className: `flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${activeTab === "services" ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30" : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"}`,
            children: [
              /* @__PURE__ */ jsx(Package, { className: "w-5 h-5" }),
              "Servicios"
            ]
          }
        )
      ] }),
      activeTab === "events" && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold text-white", children: "Gestión de Eventos" }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => {
                setEditingEvent(void 0);
                setIsEventModalOpen(true);
              },
              className: "flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition-colors shadow-lg shadow-indigo-500/30",
              children: [
                /* @__PURE__ */ jsx(Plus, { className: "w-5 h-5" }),
                "Agregar Evento"
              ]
            }
          )
        ] }),
        events.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "text-center py-20 bg-slate-900/50 rounded-2xl border border-slate-800", children: [
          /* @__PURE__ */ jsx(Calendar, { className: "w-16 h-16 text-slate-700 mx-auto mb-4" }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-lg", children: "No hay eventos registrados" }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-sm mt-2", children: "Comienza agregando tu primer evento" })
        ] }) : /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: events.map((event) => /* @__PURE__ */ jsx(
          EventCard,
          {
            event,
            onEdit: handleEditEvent,
            onDelete: handleDeleteEvent
          },
          event.id
        )) })
      ] }),
      activeTab === "services" && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold text-white", children: "Gestión de Servicios" }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => {
                setEditingService(void 0);
                setIsServiceModalOpen(true);
              },
              className: "flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition-colors shadow-lg shadow-purple-500/30",
              children: [
                /* @__PURE__ */ jsx(Plus, { className: "w-5 h-5" }),
                "Agregar Servicio"
              ]
            }
          )
        ] }),
        services.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "text-center py-20 bg-slate-900/50 rounded-2xl border border-slate-800", children: [
          /* @__PURE__ */ jsx(Package, { className: "w-16 h-16 text-slate-700 mx-auto mb-4" }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-lg", children: "No hay servicios registrados" }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-sm mt-2", children: "Comienza agregando tu primer servicio" })
        ] }) : /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: services.map((service) => /* @__PURE__ */ jsx(
          ServiceCard,
          {
            service,
            onEdit: handleEditService,
            onDelete: handleDeleteService
          },
          service.id
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      Modal,
      {
        isOpen: isEventModalOpen,
        onClose: closeModals,
        title: editingEvent ? "Editar Evento" : "Nuevo Evento",
        children: /* @__PURE__ */ jsx(
          EventForm,
          {
            event: editingEvent,
            onSubmit: handleFormSubmit,
            onCancel: closeModals
          }
        )
      },
      isEventModalOpen ? "open" : "closed"
    ),
    /* @__PURE__ */ jsx(
      Modal,
      {
        isOpen: isServiceModalOpen,
        onClose: closeModals,
        title: editingService ? "Editar Servicio" : "Nuevo Servicio",
        children: /* @__PURE__ */ jsx(
          ServiceForm,
          {
            service: editingService,
            onSubmit: handleFormSubmitService,
            onCancel: closeModals
          }
        )
      }
    )
  ] });
}

function LoginAdmin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError("Correo o contraseña incorrectos");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs("section", { className: "relative w-full h-screen", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: "/ImagenPrueba.jpg",
        className: "absolute inset-0 w-full h-full object-cover"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 rounded-lg shadow-lg w-full max-w-md", children: [
      /* @__PURE__ */ jsx("a", { href: "/", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "/LogoLunasSnackBar.jpg",
          className: "w-40 h-32 mx-auto mb-4 rounded-md object-cover"
        }
      ) }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6 text-center", children: "Admin Login" }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "email",
            placeholder: "Email",
            required: true,
            className: "w-full border p-2 rounded",
            value: email,
            onChange: (e) => setEmail(e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "password",
            placeholder: "Password",
            required: true,
            className: "w-full border p-2 rounded",
            value: password,
            onChange: (e) => setPassword(e.target.value)
          }
        ),
        error && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm", children: error }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            disabled: loading,
            className: "w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700",
            children: loading ? "Entrando..." : "Login"
          }
        )
      ] })
    ] })
  ] });
}

function AdminEntry() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  if (loading) {
    return /* @__PURE__ */ jsx("div", { className: "text-center text-6xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-bold", children: "Cargando..." });
  }
  return user ? /* @__PURE__ */ jsx(Dashboards, {}) : /* @__PURE__ */ jsx(LoginAdmin, {});
}

const $$Astro = createAstro();
const $$Admin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Admin;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Lunas snack Bar</title><link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">${renderScript($$result, "C:/Users/Tony Castro/Desktop/Proyecto/LunasSnackBarLanding/LunasSnackBarLanding/src/pages/admin.astro?astro&type=script&index=0&lang.ts")}${renderHead()}</head> <body> ${renderComponent($$result, "AdminEntry", AdminEntry, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Tony Castro/Desktop/Proyecto/LunasSnackBarLanding/LunasSnackBarLanding/src/components/admin/adminEntry", "client:component-export": "default" })} </body></html>`;
}, "C:/Users/Tony Castro/Desktop/Proyecto/LunasSnackBarLanding/LunasSnackBarLanding/src/pages/admin.astro", void 0);

const $$file = "C:/Users/Tony Castro/Desktop/Proyecto/LunasSnackBarLanding/LunasSnackBarLanding/src/pages/admin.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Admin,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
