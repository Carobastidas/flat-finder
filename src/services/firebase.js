// CRUD  C --> Create | R --> Read | U --> Update | D --> Delete
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { db } from "../config/firebase";

// Nombres de las colecciones en Firestore
const collectionName = "users";
const collectionFlats = "flats";

// Referencias a las colecciones en Firestore
const usersCollectionRef = collection(db, collectionName);
const flatsCollectionRef = collection(db, collectionFlats);

// >>>>>> Funciones CRUD para la colección de usuarios

// Obtener todos los usuarios
export const getUsers = async () => {
  const data = await getDocs(usersCollectionRef);
  const users = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return users;
};

// Crear un nuevo usuario
export const createUser = async (user) => {
  await addDoc(usersCollectionRef, user);
};

// Obtener un usuario por su ID
export const getUserById = async (id) => {
  const userRef = doc(db, collectionName, id);
  const user = await getDoc(userRef);
  return user.exists() ? { id: user.id, ...user.data() } : null;
};

// Obtener un usuario por su uid
export const getUserByUid = async (uid) => {
  const queryData = query(usersCollectionRef, where("uid", "==", uid));
  const querySnapShot = await getDocs(queryData);
  const userUid = querySnapShot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return userUid;
};

// Obtener un usuario por su nombre
export const getUserByName = async (name) => {
  const queryData = query(usersCollectionRef, where("name", "==", name));
  const querySnapShot = await getDocs(queryData);
  const users = querySnapShot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return users;
};

// Actualizar los datos de un usuario
export const updateUser = async (id, updatedUserData) => {
  const userRef = doc(db, collectionName, id);
  await updateDoc(userRef, updatedUserData);
};

// Eliminar un usuario por su ID
export const deleteUser = async (id) => {
  await deleteDoc(doc(db, collectionName, id));
};

// >>>>>> Funciones CRUD para la colección de flats

// Obtener todos los flats
export const getFlats = async () => {
  const data = await getDocs(flatsCollectionRef);
  const flats = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return flats;
};

// Crear un nuevo flat
export const createFlat = async (flat) => {
  const docRef = await addDoc(flatsCollectionRef, flat);
  return docRef.id;
};

// Obtener un flat por su ID
export const getFlatById = async (id) => {
  const flatRef = doc(db, collectionFlats, id);
  const flat = await getDoc(flatRef);
  return flat.exists() ? { id: flat.id, ...flat.data() } : null;
};

// Obtener flats por el ID del propietario (userId)
export const getFlatsByUserId = async (userId) => {
  const queryData = query(flatsCollectionRef, where("userId", "==", userId));
  const querySnapShot = await getDocs(queryData);
  const flats = querySnapShot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return flats;
};

// Actualizar los datos de un flat
export const updateFlat = async (id, updatedFlatData) => {
  const flatRef = doc(db, collectionFlats, id);
  await updateDoc(flatRef, updatedFlatData);
};

// Eliminar un flat por su ID
export const deleteFlat = async (id) => {
  await deleteDoc(doc(db, collectionFlats, id));
};
