import { createContext, useContext, useEffect, useState } from "react";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db, auth } from "../config/firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      if (user) {
        loadMessages();
      } else {
        setMessages([]); // Opcional: limpiar mensajes si el usuario no está autenticado
      }
    });

    return unsubscribe;
  }, []);

  const loadMessages = () => {
    const messagesCollection = collection(db, "messages");
    const messagesQuery = query(messagesCollection, orderBy("date"));
    onSnapshot(messagesQuery, (snapshot) => {
      const messagesList = snapshot.docs.map((item) => item.data());
      setMessages(messagesList);
    });
  };

  const addMessages = async (uidMessage, textInput) => {
    try {
      const messagesCollection = collection(db, "messages");
      await addDoc(messagesCollection, {
        date: Date.now(),
        text: textInput,
        uid: uidMessage,
      });
    } catch (error) {
      console.error("Error adding message:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ currentUser, messages, addMessages }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
