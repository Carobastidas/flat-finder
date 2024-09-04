import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { LoginForm } from "../components/Users/LoginForm";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../config/firebase";
import { createUser, getUserByEmail } from "../services/firebase";

function LoginPage() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [errorMessage, setErrorMessage] = useState(""); // Estado para el mensaje de error

  useEffect(() => {
    if (currentUser) {
      navigate("/home");
    }
  }, [currentUser, navigate]);

  const handleLogin = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        setErrorMessage("The password is incorrect.");
      
      } else {
        setErrorMessage("Incorrect Credentials");
      }
    }
  };

  const handleLoginWithGoogle = async () => {
    const googleProvider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      const userByEmail = await getUserByEmail(user.email);
      if (userByEmail.length === 0) {
        await createUser({
          name: user.displayName,
          lastname: "",
          date: "",
          email: user.email,
          userRole: "user",
          favorites: [],
          uid: user.uid,
          profileImage: user.photoURL,
        });
      }

      navigate("/home");
    } catch (error) {
      console.error("Error logging in with Google:", error);
      setErrorMessage("Error logging in with Google: " + error.message);
    }
  };

  const handleResetPassword = async (email) => {
    setErrorMessage(""); // Limpiar mensaje de error
    try {
      await sendPasswordResetEmail(auth, email);
      setErrorMessage("We sent you an email. Check your inbox.");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setErrorMessage("No user found with this email.");
      } else {
        setErrorMessage("Error sending password reset email: ");
      }
    }
  };

  return (
    <LoginForm
      onLogin={handleLogin}
      onLoginWithGoogle={handleLoginWithGoogle}
      onResetPassword={handleResetPassword}
      errorMessage={errorMessage}
    />
  );
}

export { LoginPage };