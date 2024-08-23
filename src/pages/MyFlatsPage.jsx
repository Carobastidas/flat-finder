//Pagina para ver el listado de flats del usuario

import { Navbar } from "../components/Commons/Navbar.jsx";
import { FlatList } from "../components/Flats/FlatList.jsx";

function MyFlatsPage() {
  return (
    <>
      <Navbar />
      <FlatList />
    </>
  );
}

export { MyFlatsPage };
