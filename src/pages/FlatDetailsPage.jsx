import { useState, useEffect } from "react";
import { Navbar } from "../components/Commons/Navbar";
import { FlatView } from "../components/Flats/FlatView";
import { MessageForm } from "../components/Messages/MessageForm";
import { MessageList } from "../components/Messages/MessageList";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { useAuth } from "../context/authContext";

function FlatDetailsPage() {
  const { id } = useParams();
  const { currentUser } = useAuth();
  const [isOwner, setIsOwner] = useState(false);
  const [flat, setFlat] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFlatData = async () => {
      try {
        const flatRef = doc(db, "flats", id);
        const flatSnap = await getDoc(flatRef);
        if (flatSnap.exists()) {
          const flatData = { id: flatSnap.id, ...flatSnap.data() };
          setFlat(flatData);
          setIsOwner(flatData.ownerEmail === currentUser.email);
        } else {
          setError("No se encontró el flat.");
        }
      } catch (error) {
        setError("Error al obtener los detalles del flat");
        console.error("Error al obtener los detalles del flat:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFlatData();
  }, [id, currentUser]);

  if (!currentUser) {
    return <div>Cargando...</div>; // Mostrar algún mensaje o redirigir
  }

  return (
    <>
      <Navbar />
      <section className="flex flex-col items-center justify-center gap-4 mt-28 mr-4 ml-4 mb-16">
        {loading ? (
          <p>Cargando...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          flat && <FlatView flat={flat} isOwner={isOwner} />
        )}
        <p>uid del usuario: {currentUser.uid}</p>
        <p>Nombre del usuario logueado:{currentUser.displayName}</p>
        <MessageList />
        <MessageForm />
      </section>
    </>
  );
}

export { FlatDetailsPage };
