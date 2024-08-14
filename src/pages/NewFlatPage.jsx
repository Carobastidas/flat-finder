//Pagina para crear un nuevo flat
import { ButtonPrimaryForm } from "../components/Commons/ButtonPrimaryForm";
import { FooterFrom } from "../components/Commons/FooterForm";
import { HeaderForm } from "../components/Commons/HeaderForm";
import { useFormik } from "formik";
import * as Yup from "yup";

function NewFlatPage(params) {
  return (
    <>
      <div className="flex min-h-screen justify-center bg-gray-100 font-sans bg-cover">
        <div className="container rounded my-auto max-w-md border-2 border-gray-200 bg-white p-3">
          <HeaderForm title="Create flat" description="Login to access your account" />
          <div className="m-6">
            <form className="mb-4">
              <div className="relative">
                <div className="flex justify-center items-center gap-1">
                  <input
                    type="file"
                    id="image-input"
                    accept="image/*"
                    className="hidden"
                  />
                  <img
                    id="image-user"
                    src="https://images.pexels.com/photos/7005453/pexels-photo-7005453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Imagen cargada"
                    className="w-full rounded mb-1"
                  />
                </div>
                <label
                  htmlFor="image-input"
                  className="absolute top-1 right-1 w-[]100px rounded bg-indigo-500 p-2 text-white duration-100 ease-in-out hover:bg-indigo-600 focus:outline-none text-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </label>
                <span hidden id="image-error">
                  Cargar la imagen de tu inmueble
                </span>
              </div>
              <div className="flex gap-2">
                <div className="mb-4">
                  <label
                    htmlFor="city"
                    className="mb-1 block text-sm text-gray-600"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="name"
                    placeholder="Your city"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="street-name"
                    className="mb-1 block text-sm text-gray-600"
                  >
                    Street Name
                  </label>
                  <input
                    type="text"
                    name="street-name"
                    id="street-name"
                    placeholder="Your street name"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="mb-4">
                  <label
                    htmlFor="number"
                    className="mb-1 block text-sm text-gray-600"
                  >
                    Street number
                  </label>
                  <input
                    type="number"
                    name="number"
                    id="number"
                    placeholder="Your number"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="area"
                    className="mb-1 block text-sm text-gray-600"
                  >
                    Area size
                  </label>
                  <input
                    type="number"
                    name="area"
                    id="area"
                    placeholder="Your Area size"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="mb-4">
                  <label
                    htmlFor="yaer"
                    className="mb-1 block text-sm text-gray-600"
                  >
                    Year build
                  </label>
                  <input
                    type="number"
                    name="yaer"
                    id="yaer"
                    placeholder="Your yaer"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100"
                  />
                </div>
                <div className="flex justify-center">
                  <label
                    htmlFor="ac"
                    className="flex items-center cursor-pointer"
                  >
                    Has AC:
                    <input
                      id="ac"
                      type="checkbox"
                      name="ac"
                      className="sr-only peer"
                    />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-indigo-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600 mx-2"></div>
                  </label>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="mb-4">
                  <label
                    htmlFor="rent"
                    className="mb-1 block text-sm text-gray-600"
                  >
                    Rent price
                  </label>
                  <input
                    type="number"
                    name="rent"
                    id="rent"
                    placeholder="Your rent"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="date"
                    className="mb-1 block text-sm text-gray-600"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    placeholder="Your date size"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100"
                  />
                </div>
              </div>
              <ButtonPrimaryForm text="Sing up" />
              <FooterFrom message="Don't have an account yet?" linkText="Home" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
  
}
export { NewFlatPage };
