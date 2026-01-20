import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { db, storage } from '../lib/firebase';
import { collection, addDoc } from "firebase/firestore";
import type { Eventos, Servicios } from '../lib/data';


export interface UploadedFile {
  url: string;
  path: string;
}

export interface videoUploadResult {
  url: string;
  path: string;
}

export const uploadImages = async (files: File[], eventName: string): Promise<UploadedFile[]> => {
  const uploadedFiles: UploadedFile[] = [];

  for (const file of files) {
    const safeFileName = file.name.replace(/[^\w.-]/g, "_");
    const filePath = `eventos/${eventName}/img/${Date.now()}-${safeFileName}`;
    const storageRef = ref(storage, filePath);

    // Subimos la imagen
    await uploadBytes(storageRef, file);

    // Obtenemos URL pública
    const url = await getDownloadURL(storageRef);

    uploadedFiles.push({ url, path: filePath });
  }

  return uploadedFiles;
};

export const uploadVideo = async (
  file: File,
  eventName: string
): Promise<{ url: string; path: string }> => {
  // Limpiamos el nombre del archivo
  const safeFileName = file.name.replace(/[^\w.-]/g, "_");

  // Creamos el path en Firebase Storage
  const filePath = `eventos/${eventName}/video/${Date.now()}-${safeFileName}`;
  const storageRef = ref(storage, filePath);

  // Subimos el archivo
  await uploadBytes(storageRef, file);

  // Obtenemos URL pública
  const url = await getDownloadURL(storageRef);
  

  return { url, path: filePath };
};

export const uploadImageService = async (file: File, folder = "servicios") => {
  const safeFileName = file.name.replace(/[^\w.-]/g, "_");
  const filePath = `${folder}/${Date.now()}-${safeFileName}`;
  const storageRef = ref(storage, filePath);
console.log("FILE RECIBIDO:", file);

  // Subimos la imagen
  await uploadBytes(storageRef, file);

  // Obtenemos URL pública
  const url = await getDownloadURL(storageRef);

  return { url, path: filePath }; // <-- ⚡ devuelve ambos
};

export const saveEvent = async (data: Omit<Eventos, "id">) => {
  const docRef = await addDoc(collection(db, "eventos"), {
    ...data,
    createdAt: new Date(),
  });

  return docRef.id;
};

export const saveService = async (data: Omit<Servicios, "id">) => {
  const docRef = await addDoc(collection(db, "Servicios"), {
    ...data,
    createdAt: new Date(),
  });

  return docRef.id;
};
export const deleteImage = async (path: string) => {
  try {
    if (!path) return;
    const imageRef = ref(storage, path);
    await deleteObject(imageRef);
    console.log("Imagen eliminada:", path);
  } catch (error) {
    console.error("Error eliminando imagen:", error);
  }
};

/*export const uploadImageToCloudinary = async (file: File): Promise<string> => {
  const url = `https://api.cloudinary.com/v1_1/dntvpepwa/upload`;
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "Eventos_Upload");

  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Error subiendo la imagen a Cloudinary");
  }

  const data = await response.json();
  return data.secure_url; // Esta es la URL pública que puedes guardar en Firestore
};*/
