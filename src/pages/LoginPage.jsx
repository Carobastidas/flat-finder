//Pagina de inicion de sesion
import { ButtonPrimaryForm } from "../components/Commons/ButtonPrimaryForm";
import { HeaderForm } from "../components/Commons/HeaderForm";
import { FooterFrom } from "../components/Commons/FooterForm";
import { FormField } from "../components/Commons/FormField";
import { useFormik } from "formik";
import * as Yup from "yup";

function LoginPage() {
  // Esquema de validación con Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  //Formik 
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      alert(`Logging in with email: ${values.email}`);
    },
  });

  return (
    <section className="flex min-h-screen justify-center bg-gray-100 font-sans dark:bg-gray-900 antialiased">
      <div className="container rounded my-auto max-w-md border-2 border-gray-200 p-3 dark:border-gray-700 bg-white dark:bg-gray-900 antialiased">
        <div className="my-6 text-center">
          <HeaderForm title="Login" paragraph="Login to access your account" />
        </div>
        <div className="m-6">
         
          <form onSubmit={formik.handleSubmit} className="mb-4">
          
              <FormField
                type="email"
                name="email"
                id="email"
                placeholder="Your email address"
                label="Email Address"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} // Para mostrar errores cuando el campo pierde el foco
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-sm">{formik.errors.email}</div>
              ) : null}
          
          
              <FormField
                type="password"
                name="password"
                id="password"
                placeholder="Your password"
                label="Password"

                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} 
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500 text-sm">{formik.errors.password}</div>
              ) : null}
              <ButtonPrimaryForm text="Login" />
              <FooterFrom message="Don't have an account yet?" linkText="Register" />
            
          </form>
        </div>
      </div>
    </section>
  );
}

export { LoginPage };