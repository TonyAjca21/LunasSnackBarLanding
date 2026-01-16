import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../lib/firebase';
import { collection, addDoc } from "firebase/firestore";
import type { Eventos } from '../lib/data';



export const uploadImage = async (file: File, folder = "eventos") => {
  const safeFileName = file.name.replace(/[^\w.-]/g, "_");
  const filePath = `${folder}/${Date.now()}-${safeFileName}`;
  const storageRef = ref(storage, filePath);
console.log('Uploading file to path:', filePath);
console.log('File details:', file);
console.log('Storage reference:', storageRef);
  // Subimos la imagen
  const snapshot = await uploadBytes(storageRef, file);
console.log('Uploaded a blob or file!', snapshot);
  // Obtenemos URL pública
  const url = await getDownloadURL(snapshot.ref);
  console.log('File available at', url);
  return url;
};

export const saveEvent = async (data: Omit<Eventos, "imageFile"> & { image?: string }) => {
  const docRef = await addDoc(collection(db, "eventos"), data);
  return docRef.id;
};

export const uploadImageToCloudinary = async (file: File): Promise<string> => {
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
};
