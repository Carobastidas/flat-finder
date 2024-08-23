import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase.js";
import { Navbar } from "../components/Commons/Navbar.jsx";
import { FlatItem } from "../components/Flats/FlatItem.jsx";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function HomePage() {
  const [flats, setFlats] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchFlats = async () => {
      try {
        const flatsCollection = collection(db, "flats");
        const flatsSnapshot = await getDocs(flatsCollection);
        const flatsList = flatsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          url: doc.data().imageUrl,
        }));

        setFlats(flatsList);
      } catch (error) {
        console.error("Error al obtener los pisos:", error);
      }
    };

    fetchFlats();
  }, []);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <Navbar />
      <section className="flex flex-wrap justify-center gap-4 mt-24 mr-4 ml-4 mb-16">
        {user && (
          <div className="w-full text-center mb-8">
            <h1>Bienvenido, {user.displayName} </h1>
          </div>
        )}
        {flats.map((flat) => (
          <FlatItem key={flat.id} {...flat} />
        ))}
      </section>
    </>
  );
}

export { HomePage };
