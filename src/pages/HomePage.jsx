import { useState, useEffect } from "react";
import { Navbar } from "../components/Commons/Navbar.jsx";
import { FlatItem } from "../components/Flats/FlatItem.jsx";
import {
  addFlatToFavorites,
  removeFlatFromFavorites,
  getFavoriteIdsOfUser,
  getFlats,
} from "../services/firebase";
import { useAuth } from "../context/authContext";

function HomePage() {
  const { userDetails } = useAuth();
  const [flats, setFlats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loadingUserDetails, setLoadingUserDetails] = useState(true);
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Monitorea los cambios en userDetails
    console.log("Efecto de userDetails ejecutado, userDetails:", userDetails);

    if (userDetails && userDetails.id) {
      setUserId(userDetails.id);
      setLoadingUserDetails(false); // Detenemos la carga del usuario si se tiene el ID
      console.log("ID de usuario establecido:", userDetails.id);
    } else if (userDetails === null) {
      console.log("Esperando a que userDetails esté disponible...");
    }
  }, [userDetails]);

  useEffect(() => {
    const fetchFlats = async () => {
      setLoading(true);
      try {
        console.log("Iniciando fetchFlats");
        const flatsList = await getFlats();
        console.log("Flats obtenidos:", flatsList);

        // Verifica si cada flat está en los favoritos del usuario
        const updatedFlatsList = flatsList.map((flat) => ({
          ...flat,
          isFavorite: userDetails?.favorites.includes(flat.id),
        }));

        setFlats(updatedFlatsList);
      } catch (error) {
        setError("Error al obtener los pisos.");
        console.error("Error al obtener los pisos:", error);
      } finally {
        setLoading(false);
        console.log("Finalizado fetchFlats");
      }
    };

    if (!loadingUserDetails) {
      console.log("fetchFlats se ejecutará porque loadingUserDetails es false");
      fetchFlats();
    }
  }, [loadingUserDetails, userDetails]); // Asegúrate de incluir `userDetails` como dependencia

  useEffect(() => {
    const fetchFavorites = async () => {
      if (userId) {
        try {
          console.log("Obteniendo favoritos para el usuario con ID:", userId);
          const fetchedFavoriteIds = await getFavoriteIdsOfUser(userId);
          console.log("IDs de favoritos obtenidos:", fetchedFavoriteIds);
          setFavoriteIds(fetchedFavoriteIds);
        } catch (error) {
          console.error("Error al obtener los favoritos:", error);
        }
      }
    };

    if (userId) {
      fetchFavorites();
    }
  }, [userId]);

  const handleFavoriteToggle = async (flatId) => {
    if (!userId) {
      console.error("El ID del usuario no está disponible.");
      return;
    }

    try {
      const isFavorite = userDetails.favorites.includes(flatId);

      if (isFavorite) {
        await removeFlatFromFavorites(userId, flatId);
        console.log(`Flat ${flatId} eliminado de favoritos.`);
        // Actualiza la lista de favoritos del usuario
        userDetails.favorites = userDetails.favorites.filter(
          (id) => id !== flatId
        );
      } else {
        await addFlatToFavorites(userId, flatId);
        console.log(`Flat ${flatId} agregado a favoritos.`);
        // Actualiza la lista de favoritos del usuario
        userDetails.favorites.push(flatId);
      }

      // Actualiza el estado del flat para reflejar el cambio
      setFlats((prevFlats) =>
        prevFlats.map((flat) =>
          flat.id === flatId ? { ...flat, isFavorite: !isFavorite } : flat
        )
      );
    } catch (error) {
      console.error("Error al cambiar el estado de favorito:", error);
    }
  };

  // Comprobamos si se sigue cargando
  if (loading || loadingUserDetails) {
    console.log("Mostrando estado de carga...");
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
