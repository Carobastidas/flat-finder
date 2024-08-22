//Componente de formulario de login

import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { auth } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import { HeaderForm } from "../Commons/HeaderForm";
import { FooterForm } from "../Commons/FooterForm";
import { FormField } from "../Commons/FormField";
import { ButtonPrimaryForm } from "../Commons/ButtonPrimaryForm";

function LoginForm() {
  const navigate = useNavigate();

  // Esquema de validación con Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      navigate("/home");
      console.log("User logged in successfully");
    } catch (error) {
      console.error("Error logging in:", error);
      // Aquí puedes mostrar un mensaje de error al usuario
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="flex min-h-screen justify-center bg-gray-100 font-sans dark:bg-gray-900 antialiased">
      <div className="container rounded my-auto max-w-md border-2 border-gray-200 p-3 dark:border-gray-700 bg-white dark:bg-gray-900 antialiased">
        <div className="my-6 text-center">
          <HeaderForm title="Login" paragraph="Login to access your account" />
        </div>
        <div className="m-6">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="mb-4">
                <FormField
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email address"
                  label="Email Address"
                />

                <FormField
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Your password"
                  label="Password"
                />

                <ButtonPrimaryForm
                  text="Login"
                  type="submit"
                  disabled={isSubmitting}
                />

                <FooterForm
                  message="Don't have an account yet?"
                  linkText="Register"
                  to="register"
                />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
}

export { LoginForm };
