import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { createUser } from "../services/firebase";
import { UserForm } from "../components/Users/UserForm";

function RegisterPage() {
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState(
    "https://avatars.githubusercontent.com/u/169313485?v=4"
  );

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImageUrl(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const auth = getAuth();

  const initialValues = {
    name: "",
    lastname: "",
    date: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      await updateProfile(user, {
        displayName: `${values.name} ${values.lastname}`,
      });

      await createUser({
        name: values.name,
        lastname: values.lastname,
        email: values.email,
        uid: user.uid,
      });
      navigate("/home");
      console.log("User registered successfully");
    } catch (error) {
      console.error("Error registering user:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <UserForm
      initialValues={initialValues}
      onSubmit={handleSubmit}
      imageUrl={imageUrl}
      handleImageChange={handleImageChange}
    />
  );
}

export { RegisterPage };
