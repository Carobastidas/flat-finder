/* import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import { FlatForm } from "../components/Flats/FlatForm"; // Ajusta la ruta según tu estructura */

function EditFlatPage() {
  /* const { flatId } = useParams(); // ID del flat que se va a editar
  const [flatData, setFlatData] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFlatData = async () => {
      try {
        const flatDocRef = doc(db, "flats", flatId);
        const flatDoc = await getDoc(flatDocRef);

        if (flatDoc.exists()) {
          setFlatData(flatDoc.data());
          // Si tienes una URL de imagen, ajusta esta línea
          setImageUrl(flatDoc.data().imageUrl || "");
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching flat data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFlatData();
  }, [flatId]);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const flatDocRef = doc(db, "flats", flatId);
      await updateDoc(flatDocRef, {
        ...values,
        imageUrl: imageUrl, // Si manejas la URL de la imagen
      });
      navigate("/home"); // Redirige después de la actualización
    } catch (error) {
      console.error("Error updating flat:", error);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <div>Loading...</div>; */

  return {
    /* <div className="flex min-h-screen justify-center bg-gray-100 font-sans">
      <div className="container rounded my-auto max-w-md border-2 border-gray-200 bg-white p-3">
        <FlatForm
          initialValues={flatData}
          imageUrl={imageUrl}
          handleImageChange={(file) => {
            const reader = new FileReader();
            reader.onload = (e) => setImageUrl(e.target.result);
            reader.readAsDataURL(file);
          }}
          handleSubmit={handleSubmit}
        />
      </div>
    </div> */
  };
}

export { EditFlatPage };
