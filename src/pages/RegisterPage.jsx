import { HeaderForm } from "../components/Commons/HeaderForm";

//Pagina para el registro del usuario
function RegisterPage() {
  return (
    <div className="flex min-h-screen justify-center bg-gray-100 font-sans">
      <div className="container rounded my-auto max-w-md border-2 border-gray-200 bg-white p-3">
      <HeaderForm title="Create account" description="Login to access your account" />
        <div className="m-6">
          <form className="mb-4">
            <div className="relative flex items-center justify-center gap-1">
              <label
                htmlFor="image-input"
                className="absolute top-0 right-0 flex gap-1 rounded text-indigo-500 duration-100 ease-in-out hover:text-indigo-600 focus:outline-none cursor-pointer"
              >
                <span>Edit image</span>
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
              <div className="flex justify-center items-center gap-6">
                <input
                  type="file"
                  id="image-input"
                  accept="image/*"
                  className="hidden"
                />
                <img
                  id="image-user"
                  src="../../src/assets/default.jpg"
                  alt="Imagen cargada"
                  className="w-32 rounded-full"
                />
              </div>
              <span hidden id="image-error">
                Cargar una imagen de perfil
              </span>
            </div>
            <div className="flex gap-2">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="lastname"
                  className="mb-1 block text-sm text-gray-600"
                >
                  Last name
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Your Last name"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100"
                />
              </div>
            </div>
            <div className="flex gap-2">
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
                  placeholder="Your Date"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm text-gray-600"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email address"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="user-role"
                className="mb-1 block text-sm text-gray-600"
              >
                User roll
              </label>
              <input
                type="text"
                name="user-role"
                id="user-role"
                placeholder="Your User roll"
                className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100"
              />
            </div>
            <div className="mb-6">
              <div className="mb-1 flex justify-between">
                <label htmlFor="password" className="text-sm text-gray-600">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Your password"
                className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100"
              />
            </div>
            <div className="mb-6">
              <div className="mb-1 flex justify-between">
                <label htmlFor="password" className="text-sm text-gray-600">
                  Confirm password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Your password"
                className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100"
              />
            </div>
            <ButtonPrimaryForm text="Sing up" />
            <p className="text-center text-sm text-gray-400">
              Don&#x27;t have an account yet?
              <a
                href="#!"
                className="font-semibold text-indigo-500 focus:text-indigo-600 focus:underline focus:outline-none"
              >
                RegisterPage
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export { RegisterPage };
