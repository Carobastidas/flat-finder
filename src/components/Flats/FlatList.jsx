// Componente para listar los flats
import { FlatItem } from "../Flats/FlatItem.jsx";

function FlatList({ flats }) {
  return (
    <>
      {flats.map((flat) => (
        <FlatItem key={flat.id} {...flat} />
      ))}
    </>
  );
}

export { FlatList };
