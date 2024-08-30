import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db, auth } from "../config/firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const loadMessages = useCallback((flatId) => {
    const messagesCollection = collection(db, "messages");
    const messagesQuery = query(
      messagesCollection,
      where("flatId", "==", flatId)
    );

    onSnapshot(messagesQuery, (snapshot) => {
      let messagesList = snapshot.docs.map((item) => item.data());

      messagesList = messagesList.sort((a, b) => a.date - b.date);

      setMessages(messagesList);
    });
  }, []);

  const addMessages = async (uidMessage, textInput, flatId) => {
    try {
      const messagesCollection = collection(db, "messages");
      await addDoc(messagesCollection, {
        date: Date.now(),
        text: textInput,
        uid: uidMessage,
        flatId: flatId,
      });
    } catch (error) {
      console.error("Error adding message:", error);
    }
  };

  console.log("Cuantas veces se renderiza este log??????????");

  return (
    <AuthContext.Provider
      value={{ currentUser, messages, addMessages, loadMessages }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
