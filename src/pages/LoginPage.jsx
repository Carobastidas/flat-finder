//Pagina de inicion de sesion
import { ButtonPrimaryForm } from "../components/Commons/ButtonPrimaryForm";
import { TitleForm } from "../components/Commons/TitleForm";
function LoginPage() {
  return (
    <section className="flex min-h-screen justify-center bg-gray-100 font-sans dark:bg-gray-900 antialiased">
      <div className="container rounded my-auto max-w-md border-2 border-gray-200 p-3 dark:border-gray-700 bg-white dark:bg-gray-900 antialiased">
        <div className="my-6 text-center">
          <TitleForm title="Login" paragraph="Login to access your account" />
        </div>
        <div className="m-6">
          <form className="mb-4">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="mb-1 block text-sm text-gray-600 dark:text-white"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email address"
                className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300
                    focus:border-indigo-300 focus:outline-none focus:ri ng focus:ring-indigo-100
                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                    dark:focus:border-indigo-300 dark:focus:outline-none dark:focus:ring dark:focus:ring-indigo-600"
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
                className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-indigo-300 dark:focus:outline-none dark:focus:ring dark:focus:ring-indigo-600"
              />
            </div>
            <div className="mb-6">
              <ButtonPrimaryForm text="Login" />
            </div>
            <p className="text-center text-sm text-gray-400">
              Don&#x27;t have an account yet?
              <a
                href="/register"
                className="font-semibold text-indigo-500 focus:text-indigo-600 focus:underline focus:outline-none"
              >
                Register
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export { LoginPage };
