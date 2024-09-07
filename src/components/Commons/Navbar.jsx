//Componente menu de navegacion para toda la app
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavbarLinks } from "./NavbarLinks";
import { getAuth, signOut } from "firebase/auth";
import { useAuth } from "../../context/authContext";
import { HomeModernIcon } from "@heroicons/react/24/solid";
import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";
import { TrashIcon } from "@heroicons/react/24/solid";

function Navbar({ onClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { currentUser, userDetails } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      // Cierra la sesión del usuario
      await signOut(auth);

      // Elimina todos los elementos guardados en el localStorage
      localStorage.clear();

      // Redirige al usuario a la página de inicio
      navigate("/");
    } catch (error) {
      console.log("Error en la sesión", error);
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-900 w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/home"
          className="flex items-center space-x-3 rtl:space-x-reverse hover:scale-110 transition-transform"
        >
          <HomeModernIcon className="w-8 h-8 text-gray-800 dark:text-white" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Flat Finder
          </span>
        </Link>
        <div className="flex gap-2 justify-center items-center px-1 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {currentUser && <span> {currentUser.displayName}</span>}
          <img
            className="w-10 h-10 object-cover rounded-full"
            src={currentUser.photoURL || userDetails.profileImage}
            alt="profile-photo"
          />

          <button
            onClick={handleLogout}
            type="button"
            className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
          >
            <ArrowUpTrayIcon className="w-6 h-6" />
          </button>
          <button
            type="button"
            className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
          >
            <TrashIcon className="w-6 h-6" />
          </button>
          <button
            onClick={onClick}
            type="button"
            className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isOpen ? "" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:gap-3 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <NavbarLinks to="/home" name="Home" />
            <NavbarLinks to="/new-flat" name="New Flat" />
            {/* <NavbarLinks to="/update-profile" name="Update Profile" /> */}
            <NavbarLinks to="/my-flats" name="My Flats" />
            <NavbarLinks to="/favourites" name="Favorites" />
            <NavbarLinks to="/all-users" name="Users" />
            <NavbarLinks to="/profile" name="Profile" />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export { Navbar };
