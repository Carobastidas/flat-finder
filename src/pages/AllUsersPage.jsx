//Pagina para mostrar todo los usuarios registrados (solo la puede ver el admin)

import { useState, useEffect } from "react";
import { Navbar } from "../components/Commons/Navbar";
import { UserList } from "../components/Users/UserList";
import {
  getUsers,
  getFlatsByUserId,
  updateUser,
  getUserByUid,
  getUserById,
} from "../services/firebase";

function AllUsersPage() {
  const [users, setUsers] = useState([]);
  const [dropdownStates, setDropdownStates] = useState({});

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Obtener los usuarios
        const usersData = await getUsers();
        console.log("Usuarios obtenidos:", usersData); // Log para verificar los usuarios recuperados

        // Obtener la cantidad de flats para cada usuario
        const usersWithFlats = await Promise.all(
          usersData.map(async (user) => {
            try {
              const userFlats = await getFlatsByUserId(user.uid);
              console.log(`Flats del usuario ${user.uid}:`, userFlats); // Log para verificar flats recuperados
              return { ...user, flatsCount: userFlats.length }; // Añadir la cantidad de flats
            } catch (error) {
              console.error(
                `Error obteniendo flats para el usuario ${user.uid}:`,
                error
              );
              return { ...user, flatsCount: 0 }; // En caso de error, asignar 0 flats
            }
          })
        );

        console.log("Usuarios con cantidad de flats:", usersWithFlats); // Log para verificar el estado final
        setUsers(usersWithFlats);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);
  const toggleDropdown = (uid) => {
    setDropdownStates((prevStates) => ({
      ...prevStates,
      [uid]: !prevStates[uid],
    }));
  };

  const handleMakeAdmin = async (userId) => {
    try {
      console.log(
        `Iniciando proceso de promover a admin al usuario: ${userId}`
      );

      // 1. Verificar si el usuario existe en la base de datos
      console.log("Buscando usuario en la base de datos...");
      const user = await getUserById(userId);

      if (!user) {
        console.error(`El usuario ${userId} no existe en la base de datos`);
        return;
      }

      console.log("Usuario encontrado:", user);

      // 2. Actualizar el usuario en la base de datos
      console.log("Actualizando usuario en la base de datos...");
      await updateUser(userId, { userRole: "admin" });
      console.log(`Usuario ${userId} actualizado a admin en la base de datos`);

      // 3. Actualizar el estado de users en el componente
      console.log("Actualizando estado de users en el componente...");
      setUsers((prevUsers) =>
        prevUsers.map((u) =>
          u.id === userId ? { ...u, userRole: "admin" } : u
        )
      );
      console.log(
        `Usuario ${userId} actualizado a admin en el estado del componente`
      );

      console.log(`Usuario ${userId} ha sido promovido a admin`);
    } catch (error) {
      console.error(`Error al promover al usuario ${userId} a admin:`, error);
    }
  };

  return (
    <>
      <Navbar />
      <section className="flex flex-wrap justify-center gap-4 mt-28 mr-4 ml-4 mb-16 overflow-hidden">
        <UserList
          users={users}
          dropdownStates={dropdownStates}
          onToggleDropdown={toggleDropdown}
          onMakeAdmin={handleMakeAdmin}
        />
      </section>
    </>
  );
}

export { AllUsersPage };
