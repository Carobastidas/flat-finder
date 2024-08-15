import { Formik, Form } from "formik";
import * as Yup from "yup";
import { ButtonPrimaryForm } from "../components/Commons/ButtonPrimaryForm";
import { HeaderForm } from "../components/Commons/HeaderForm";
import { FooterFrom } from "../components/Commons/FooterForm";
import { FormField } from "../components/Commons/FormField";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters long")
    .required("Name is required"),
  lastname: Yup.string()
    .min(2, "Last name must be at least 2 characters long")
    .required("Last name is required"),
  date: Yup.date()
    .required("Date is required")
    .test("age", "You must be between 18 and 120 years old", function (value) {
      const currentDate = new Date();
      const birthDate = new Date(value);
      const age = currentDate.getFullYear() - birthDate.getFullYear();
      return age >= 18 && age <= 120;
    }),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  address: Yup.string().required("Address is required"),
  userRole: Yup.string().required("User role is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

function RegisterPage() {
  const initialValues = {
    name: "",
    lastname: "",
    date: "",
    email: "",
    address: "",
    userRole: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="flex min-h-screen justify-center bg-gray-100 font-sans">
      <div className="container rounded my-auto max-w-md border-2 border-gray-200 bg-white p-3">
        <div className="my-6 text-center">
          <HeaderForm
            title="Create account"
            paragraph="Login to access your account"
          />
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="mb-4">
            <div className="flex gap-2">
              <FormField
                label="Name"
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
              />
              <FormField
                label="Last Name"
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Your Last name"
              />
            </div>

            <div className="flex gap-2">
              <FormField label="Date" type="date" name="date" id="date" />
              <FormField
                label="Email"
                type="email"
                name="email"
                id="email"
                placeholder="Your email address"
              />
            </div>

            <FormField
              label="Address"
              type="text"
              name="address"
              id="address"
              placeholder="Your address"
            />

            <FormField
              label="User Role"
              as="select"
              name="userRole"
              id="userRole"
            >
              <option value="">Select a role</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </FormField>

            <FormField
              label="Password"
              type="password"
              name="password"
              id="password"
              placeholder="Your password"
            />

            <FormField
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm your password"
            />

            <ButtonPrimaryForm text="Sign up" type="submit" />
          </Form>
        </Formik>
        <FooterFrom message="Already have an account?" linkText="Login" />
      </div>
    </div>
  );
}

export { RegisterPage };
