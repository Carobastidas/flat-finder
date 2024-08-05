function Login() {
  return (
    <section className="flex min-h-screen justify-center bg-gray-100 font-sans dark:bg-gray-900 antialiased">
      <div className="container rounded my-auto max-w-md border-2 border-gray-200 p-3 dark:border-gray-700 bg-white dark:bg-gray-900 antialiased">
        <div className="my-6 text-center">
          <h1 className="text-3xl font-semibold text-gray-700">Login</h1>
          <p className="text-gray-500">Login to access your account</p>
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
              <button
                type="button"
                className="w-full rounded bg-indigo-500 pt-2 pb-3 text-white duration-100 ease-in-out hover:bg-indigo-600 focus:outline-none"
              >
                Login
              </button>
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

export { Login };
