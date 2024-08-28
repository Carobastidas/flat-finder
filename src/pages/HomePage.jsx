import { useState, useEffect } from "react";
import { Navbar } from "../components/Commons/Navbar.jsx";
import { FlatItem } from "../components/Flats/FlatItem.jsx";
import { getFlats, getUserById, getUsers } from "../services/firebase";

function HomePage() {
  const [flats, setFlats] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFlats = async () => {
      setLoading(true);
      try {
        const flatsList = await getFlats();
        setFlats(flatsList);
        console.log("----->", flatsList);
      } catch (error) {
        setError("Error al obtener los pisos.");
        console.error("Error al obtener los pisos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFlats();
  }, []);

  const handleFavoriteToggle = async () => {
    const users = await getUsers();
    const usersIds = users.map((user) => user.uid);
    console.log(usersIds);
  };

  if (loading) {
    return <div className="loading">Cargando...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <>
      <Navbar />
      <section className="flex flex-wrap justify-center gap-4 mt-24 mr-4 ml-4 mb-16">
        {flats.length > 0 ? (
          flats.map((flat) => (
            <FlatItem
              key={flat.id}
              {...flat}
              /* isFavorite={favorites.has(flat.id)} */
              onFavoriteToggle={() => handleFavoriteToggle(flat.id)}
            />
          ))
        ) : (
          <div className="no-flats">No hay pisos disponibles</div>
        )}
      </section>
    </>
  );
}

export { HomePage };
