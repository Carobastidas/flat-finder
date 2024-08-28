//Pagina para ver el listado de flats del usuario

import { Navbar } from "../components/Commons/Navbar.jsx";
import { FlatList } from "../components/Flats/FlatList.jsx";

function MyFlatsPage() {
  return (
    <>
      <Navbar />
      <section className="flex flex-wrap justify-center gap-4 mt-24 mr-4 ml-4 mb-16">
        <FlatList />
      </section>
    </>
  );
}

export { MyFlatsPage };
