//Pagina para crear un nuevo flat
import { ButtonPrimaryForm } from "../components/Commons/ButtonPrimaryForm";
import { FooterForm } from "../components/Commons/FooterForm"; // Corrigido el nombre de importación
import { FormField } from "../components/Commons/FormField";
import { HeaderForm } from "../components/Commons/HeaderForm";
import { useFormik } from "formik";
import * as Yup from "yup";


const validationSchema = Yup.object({
  city: Yup.string().required('City is required'),
  streetName: Yup.string().required('Street name is required'),
  number: Yup.number().required('Street number is required'),
  area: Yup.number().required('Area size is required'),
  year: Yup.number().required('Year build is required'),
  rent: Yup.number().required('Rent price is required'),
  date: Yup.date().required('Date is required'),
  ac: Yup.boolean(),
});

function NewFlatPage() {
  const formik = useFormik({
    initialValues: {
      city: '',
      streetName: '',
      number: '',
      area: '',
      year: '',
      rent: '',
      date: '',
      ac: false,
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log(values);
    },
  });

function NewFlatPage(params) {
  return (
    <>
      <div className="flex min-h-screen justify-center bg-gray-100 font-sans bg-cover">
        <div className="container rounded my-auto max-w-md border-2 border-gray-200 bg-white p-3">
          <HeaderForm title="Create flat" description="Fill out the form to create a new flat" />
          <div className="m-6">
            <form onSubmit={formik.handleSubmit} className="mb-4">
              <div className="relative">
                <div className="flex justify-center items-center gap-1">
                  <input
                    type="file"
                    id="image-input"
                    accept="image/*"
                    className="hidden"
                    onChange={(event) => formik.setFieldValue("image", event.currentTarget.files[0])}
                  />
                  <img
                    id="image-user"
                    src="https://images.pexels.com/photos/7005453/pexels-photo-7005453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Uploaded image"
                    className="w-full rounded mb-1"
                  />
                </div>
                <label
                  htmlFor="image-input"
                  className="absolute top-1 right-1 w-32 rounded bg-indigo-500 p-2 text-white duration-100 ease-in-out hover:bg-indigo-600 focus:outline-none text-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </label>
                {formik.errors.image && formik.touched.image ? (
                  <span id="image-error" className="text-red-500 text-sm">
                    {formik.errors.image}
                  </span>
                ) : null}
              </div>

              <div className="flex gap-2">
                <FormField
                  label="City"
                  type="text"
                  name="city"
                  id="city"
                  placeholder="Your city"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.city && formik.errors.city ? (
                  <div className="text-red-500 text-sm">{formik.errors.city}</div>
                ) : null}
              </div>

              <FormField
                label="Street Name"
                type="text"
                name="streetName"
                id="streetName"
                placeholder="Your street name"
                className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100"
                value={formik.values.streetName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.streetName && formik.errors.streetName ? (
                <div className="text-red-500 text-sm">{formik.errors.streetName}</div>
              ) : null}

              <FormField
                label="Street Number"
                type="number"
                name="number"
                id="number"
                placeholder="Your number"
                className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100"
                value={formik.values.number} 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.number && formik.errors.number ? (
                <div className="text-red-500 text-sm">{formik.errors.number}</div>
              ) : null}

              <FormField
                label="Area size"
                type="number"
                name="area"
                id="area"
                placeholder="Your area size"
                className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100"
                value={formik.values.area} 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.area && formik.errors.area ? (
                <div className="text-red-500 text-sm">{formik.errors.area}</div>
              ) : null}

              <div className="flex gap-2">
                <FormField
                  label="Year build"
                  type="number"
                  name="year"
                  id="year"
                  placeholder="Your year"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100"
                  value={formik.values.year}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.year && formik.errors.year ? (
                  <div className="text-red-500 text-sm">{formik.errors.year}</div>
                ) : null}

                <FormField
                  label="Rent price"
                  type="number"
                  name="rent"
                  id="rent"
                  placeholder="Your rent"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100"
                  value={formik.values.rent}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.rent && formik.errors.rent ? (
                  <div className="text-red-500 text-sm">{formik.errors.rent}</div>
                ) : null}

                <FormField
                  label="Date"
                  type="date"
                  name="date"
                  id="date"
                  placeholder="Your date"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100"
                  value={formik.values.date}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.date && formik.errors.date ? (
                  <div className="text-red-500 text-sm">{formik.errors.date}</div>
                ) : null}
              </div>

              <div className="flex items-center">
                <input
                  id="ac"
                  type="checkbox"
                  name="ac"
                  className="mr-2"
                  checked={formik.values.ac}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <label htmlFor="ac" className="text-sm text-gray-700">
                  Has AC
                </label>
              </div>

              <ButtonPrimaryForm text="Create flat" />
            </form>
            <FooterForm message="" linkText="" />
          </div>
        </div>
      </div>
    </>
  );
export { NewFlatPage }; 
