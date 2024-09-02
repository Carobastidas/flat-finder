import { useEffect, useState } from "react";
import { Navbar } from "../components/Commons/Navbar.jsx";
import { FlatItem } from "../components/Flats/FlatItem.jsx";
import { useAuth } from "../context/authContext.jsx";
import { getFavoriteIdsOfUser, getFlatsByIds } from "../services/firebase.js";

function FavouritesPage() {
  const { userDetails } = useAuth();
  const [favoritesFlats, setFavoritesFlats] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFavoritesOfUser = async () => {
      try {
        if (userDetails && userDetails.id) {
          const favoriteIds = await getFavoriteIdsOfUser(userDetails.id);
          if (favoriteIds.length > 0) {
            const flatsDetails = await getFlatsByIds(favoriteIds);
            setFavoritesFlats(flatsDetails);
          } else {
            setFavoritesFlats([]);
          }
        }
      } catch (error) {
        setError("Error fetching favorite flats");
        console.error("Error fetching favorite flats:", error);
      }
    };

    fetchFavoritesOfUser();
  }, [userDetails]);

  return (
    <>
      <Navbar />
      <section className="flex flex-wrap justify-center gap-4 mt-24 mr-4 ml-4 mb-16">
        {error && <p>{error}</p>}
        {favoritesFlats.length > 0 ? (
          favoritesFlats.map((flat) => (
            <FlatItem
              key={flat.id}
              id={flat.id}
              imageUrl={flat.imageUrl}
              city={flat.city}
              streetName={flat.streetName}
              streetNumber={flat.streetNumber}
              areaSize={flat.areaSize}
              yearBuilt={flat.yearBuilt}
              hasAC={flat.hasAC}
              rentPrice={flat.rentPrice}
              availableDate={flat.availableDate}
              ownerName={flat.ownerName}
              ownerEmail={flat.ownerEmail}
              isFavorite={true}
            />
          ))
        ) : (
          <p>Cargando...</p>
        )}
      </section>
    </>
  );
}

export { FavouritesPage };
