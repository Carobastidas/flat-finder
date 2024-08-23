//Componente para mostrar informacion individual de un flat
import {
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../config/firebase";
import { auth } from "../../config/firebase";

function FlatItem({
  id,
  imageUrl,
  city,
  streetName,
  streetNumber,
  areaSize,
  yearBuilt,
  hasAC,
  rentPrice,
  availableDate,
  userId: flatUserId,
}) {
  const [userInfo, setUserInfo] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const user = auth.currentUser;

    if (user) {
      setUserInfo({
        name: user.displayName,
        email: user.email,
      });

      // Para manejar favoritos si está relacionado con el usuario autenticado
    } else {
      console.log("No user is logged in");
    }
  }, []);

  const handleFavorite = async () => {
    try {
      const userRef = doc(db, "users", flatUserId);
      if (isFavorite) {
        // Eliminar de favoritos
        await updateDoc(userRef, {
          favorites: arrayRemove(id),
        });
        setIsFavorite(false);
        console.log("Eliminado de favoritos");
      } else {
        // Añadir a favoritos
        await updateDoc(userRef, {
          favorites: arrayUnion(id),
        });
        setIsFavorite(true);
        console.log("Añadido a favoritos");
      }
    } catch (error) {
      console.error("Error al actualizar los favoritos:", error);
    }
  };

  if (auth.currentUser?.uid !== flatUserId) {
    return null;
  }

  return (
    <article className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <picture>
        {imageUrl && (
          <img
            className="w-full rounded-t-lg"
            src={imageUrl}
            alt={`Piso en ${city}`}
          />
        )}
      </picture>
      <div className="p-5">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {city && streetName && streetNumber
            ? `${city}, ${streetName}, ${streetNumber}`
            : `Ciudad, Calle, número`}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {areaSize && `El inmueble tiene un área de ${areaSize}m²`}
          {yearBuilt && `, construida en el año ${yearBuilt}`}.
          {availableDate && ` Disponible hasta ${availableDate}`}
          <br />
          Aire acondicionado: {hasAC ? "Sí" : "No"}
          {rentPrice && ` $${rentPrice}`}
        </p>
        {userInfo && (
          <div className="mb-3 text-sm text-gray-600 dark:text-gray-400">
            <p>{userInfo.name}</p>
            <p>{userInfo.email}</p>
          </div>
        )}
        <div className="flex justify-between">
          <Link
            to={`/flat-details/${id}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            View flat
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>

          <div className="flex gap-4">
            <svg
              id="heart"
              onClick={handleFavorite}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={isFavorite ? "red" : "white"}
              className={`size-6 h-[24px] w-[24px] stroke-gray-900 stroke-2 overflow-visible z-10 ${
                isFavorite ? "fill-red-500" : "fill-white"
              }`}
            >
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
          </div>
        </div>
      </div>
    </article>
  );
}

export { FlatItem };
