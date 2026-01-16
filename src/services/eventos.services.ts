import { collection, addDoc, getDocs, getDoc, doc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import type { Eventos } from '../lib/data';

const COLLECTION = 'eventos';

export const createEvento = async (evento: Eventos) => {
  const docRef = await addDoc(collection(db, COLLECTION), evento);
  return docRef.id;
};

export const getEventos = async (): Promise<Eventos[]> => {
  const snapshot = await getDocs(collection(db, COLLECTION));
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) as Eventos[];
};

export const getEventoById = async (id: string): Promise<Eventos | null> => {
  const snap = await getDoc(doc(db, COLLECTION, id));
  return snap.exists()
    ? ({ id: snap.id, ...snap.data() } as Eventos)
    : null;
};
