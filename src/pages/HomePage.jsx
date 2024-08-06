//Pagina principal donde vamos a mostrar los flats
import { Navbar } from "../components/Commons/Navbar.jsx";

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="flex items-center m-[100px]">
        <article
          id=""
          className="relative min-w-72 max-w-80 rounded p-2 text-base"
        >
          <div className="relative mb-2">
            <img
              id="image-"
              className="w-full rounded-md"
              src="https://images.pexels.com/photos/8143711/pexels-photo-8143711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Imagen de inmueble"
            />
          </div>
          <h2 className="font-bold">
            <span className="editable" id="">
              $120
            </span>
            ,
            <span className="editable" id="">
              ---
            </span>
            ,
            <span className="editable" id="">
              --
            </span>
          </h2>
          <p className="text-gray-600 leading-8 editable">
            El inmueble tiene una áre de
            <span className="editable font-bold" id="">
              1000
            </span>
            <span className="font-bold">m²</span>, construida en el año{" "}
            <span className="editable font-bold" id="">
              -----
            </span>
            . Disponible hasta
            <span className="editable font-bold" id="">
              20/02/2024
            </span>
          </p>
          <p className="text-gray-600 leading-8">
            Aire acondicionado:{" "}
            <span className="editable font-bold" id="">
              Si
            </span>
          </p>

          <div className="flex justify-around items-center">
            <h2 className="text-xl">
              <span className=" font-bold">$</span>
              <span className="editable font-bold" id="">
                ----
              </span>
            </h2>

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
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              fill="currentColor"
              className="fill-red-500 h-[24px] w-[24px] stroke-white stroke-2 overflow-visible z-50"
            >
              <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
            </svg>
          </div>
        </article>

        <article
          id=""
          className="relative min-w-72 max-w-80 rounded p-2 text-base"
        >
          <div className="relative mb-2">
            <img
              id="image-"
              className="w-full rounded-md"
              src="https://images.pexels.com/photos/8143711/pexels-photo-8143711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Imagen de inmueble"
            />
          </div>
          <h2 className="font-bold">
            <span className="editable" id="">
              $120
            </span>
            ,
            <span className="editable" id="">
              ---
            </span>
            ,
            <span className="editable" id="">
              --
            </span>
          </h2>
          <p className="text-gray-600 leading-8 editable">
            El inmueble tiene una áre de
            <span className="editable font-bold" id="">
              1000
            </span>
            <span className="font-bold">m²</span>, construida en el año{" "}
            <span className="editable font-bold" id="">
              -----
            </span>
            . Disponible hasta
            <span className="editable font-bold" id="">
              20/02/2024
            </span>
          </p>
          <p className="text-gray-600 leading-8">
            Aire acondicionado:{" "}
            <span className="editable font-bold" id="">
              Si
            </span>
          </p>

          <div className="flex justify-around items-center">
            <h2 className="text-xl">
              <span className=" font-bold">$</span>
              <span className="editable font-bold" id="">
                ----
              </span>
            </h2>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 fill-emerald-500"
            >
              <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              <path
                fillRule="evenodd"
                d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
                clipRule="evenodd"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 fill-indigo-600"
            >
              <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              fill="currentColor"
              className="fill-red-500 h-[24px] w-[24px] stroke-white stroke-2 overflow-visible z-50"
            >
              <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
            </svg>
          </div>
        </article>

        <article className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="/">
            <img
              className="rounded-t-lg"
              src="https://images.pexels.com/photos/14465265/pexels-photo-14465265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="/">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Quito, Las Vegas, N-767
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              El resto de info El resto de info El resto de info El resto de
              info
            </p>
            <div className="flex justify-between">
              <a
                href="/"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                View flat
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>

              <div className="flex gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 fill-white"
                >
                  <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  fill="currentColor"
                  className="fill-red-500 h-[24px] w-[24px] stroke-white stroke-2 overflow-visible z-50"
                >
                  <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
                </svg>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export { HomePage };
