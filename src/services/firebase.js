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
} from "firebase/firestore";
import { db } from "../config/firebase";

// Vamos a definir el nombre la coleccion que vamos a utilizar de esa DB
const collectionName = "users";
const collectionFlats = "flats";

// Vamos a definir la referencia a la coleccion que vamos a utilizar
const usersColletionRef = collection(db, collectionName);
const flatsColletionRef = collection(db, collectionFlats);

// Lectura de datos para los usuarios
export const getUsers = async () => {
  const data = await getDocs(usersColletionRef);
  const users = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return users;
};

// Lectura de datos para los flats
export const getFlats = async () => {
  const data = await getDocs(flatsColletionRef);
  const flats = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return flats;
};

// Creacion de datos de usuario
export const createUser = async (user) => {
  await addDoc(usersColletionRef, user);
};

// Creacion de datos de flat
export const createFlat = async (flat) => {
  const docRef = await addDoc(flatsColletionRef, flat);
  return docRef.id;
};

// Obtener un flat por su ID
export const getFlatById = async (id) => {
  const flatRef = doc(db, collectionFlats, id);
  const flat = await getDoc(flatRef);
  return flat.exists() ? { id: flat.id, ...flat.data() } : null;
};

// Vamos a definir la funcion de actualizacion de datos
export const updateUser = async (id, updatedUserData) => {
  const userRef = doc(db, collectionName, id);
  await updateDoc(userRef, updatedUserData);
};

// Atualizar un flat
export const updateFlat = async (id, updatedFlatData) => {
  const flatRef = doc(db, collectionFlats, id);
  await updateDoc(flatRef, updatedFlatData);
};

// Eiminar un flat
export const deleteFlat = async (id) => {
  await deleteDoc(doc(db, collectionFlats, id));
};

export const getUserById = async (id) => {
  const userRef = doc(db, collectionName, id);
  const user = await getDoc(userRef);
  return user.data();
};

export const deleteUser = async (id) => {
  await deleteDoc(doc(db, collectionName, id));
};

export const getUserByName = async (name) => {
  const queryData = query(usersColletionRef, where("name", "==", name));
  const querySnapShot = await getDocs(queryData);
  const users = querySnapShot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return users;
};

export const getFlatsByUserId = async (userId) => {
  const queryData = query(flatsColletionRef, where("userId", "==", userId));
  const querySnapShot = await getDocs(queryData);
  const flats = querySnapShot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return flats;
};
