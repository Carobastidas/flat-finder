import { ButtonPrimaryForm } from "../components/Commons/ButtonPrimaryForm";
import { HeaderForm } from "../components/Commons/HeaderForm";
import { FooterFrom } from "../components/Commons/FooterForm";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FormField } from "../components/Commons/FormField";


 const validationSchema = Yup.object({
    name: Yup.string().min(2, 'Name must be at least 2 characters long')
    .required('Name is required'),
    lastname: Yup.string()  .min(2, 'Last name must be at least 2 characters long')
    .required('Last name is required'),
    date: Yup.date().required('Date is required')
    .test('age','You must be between 18 and 120 years old',
      function(value) {
      const currentDate = new Date();
      const birthDate = new Date(value);
      const age = currentDate.getFullYear() - birthDate.getFullYear();
      return age >= 18 && age <= 120;
    }),
    email: Yup.string().email('Invalid email address').required("email is required"),
    address: Yup.string().required("address is required"),
    userRole: Yup.string().required('User role is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters long')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
    .required('Password is required'),
    confirmPassword: Yup.string()   .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),

});


function RegisterPage() {
  const formik = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      date: '',
      email: '',
      address: '', // Añadido el campo address
      userRole: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="flex min-h-screen justify-center bg-gray-100 font-sans">
      <div className="container rounded my-auto max-w-md border-2 border-gray-200 bg-white p-3">
        <div className="my-6 text-center">
          <h1 className="text-3xl font-semibold text-gray-700">Create account</h1>
          <p className="text-gray-500">Login to access your account</p>
        </div>
        <form onSubmit={formik.handleSubmit} className="mb-4">
          <div className="flex gap-2">
            <FormField
              label="Name"
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500 text-sm">{formik.errors.name}</div>
            ) : null}

            <FormField
              label="Last Name"
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Your Last name"
              className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100"
              value={formik.values.lastname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.lastname && formik.errors.lastname ? (
              <div className="text-red-500 text-sm">{formik.errors.lastname}</div>
            ) : null}
          </div>

          <div className="flex gap-2">
            <FormField
              label="Date"
              type="date"
              name="date"
              id="date"
              placeholder="Your Date"
              className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100"
              value={formik.values.date}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.date && formik.errors.date ? (
              <div className="text-red-500 text-sm">{formik.errors.date}</div>
            ) : null}

            <FormField
              label="Email"
              type="email"
              name="email"
              id="email"
              placeholder="Your email address"
              className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            ) : null}
          </div>

          <FormField
            label="User Role"
            type="text"
            name="userRole"
            id="userRole"
            placeholder="Your User role"
            className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100"
            value={formik.values.userRole}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.userRole && formik.errors.userRole ? (
            <div className="text-red-500 text-sm">{formik.errors.userRole}</div>
          ) : null}

          <FormField
            label="Password"
            type="password"
            name="password"
            id="password"
            placeholder="Your password"
            className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
          ) : null}

          <FormField
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm your password"
            className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="text-red-500 text-sm">{formik.errors.confirmPassword}</div>
          ) : null}

          <ButtonPrimaryForm text="Sign up" />
        </form>
        <FooterForm />
      </div>
    </div>
  );
}

export { RegisterPage };