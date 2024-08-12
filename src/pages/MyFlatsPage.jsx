//Pagina para ver el listado de flats del usuario

import { Navbar } from "../components/Commons/Navbar.jsx";
import { FlatItem } from "../components/Flats/FlatItem.jsx";

function MyFlatsPage() {
  return (
    <>
      <Navbar />

      <section className="flex flex-wrap justify-center gap-4 mt-24 mr-4 ml-4 mb-16">
        <FlatItem />
      </section>
    </>
  );
}

export { MyFlatsPage };