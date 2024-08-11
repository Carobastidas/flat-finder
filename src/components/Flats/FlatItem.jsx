//Componente para mostrar informacion individual de un flat

import { Link } from "react-router-dom";

function FlatItem () {
    return (
        <article className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <picture>
            <img
              className="rounded-t-lg"
              src="https://images.pexels.com/photos/14465265/pexels-photo-14465265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </picture>
          <div className="p-5">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Quito, Las Vegas, N-767
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                El inmueble tiene una áre de 20m², construida en el año 1990.
                Disponible hasta 2024-08-17
                Aire acondicionado: No
                $100
            </p>
            <div className="flex justify-between">
              <Link
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
              </Link>

              <div className="flex gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 fill-gray"
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
                  className="fill-red-500 h-[24px] w-[24px] stroke-white stroke-2 overflow-visible z-10"
                >
                  <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
                </svg>
              </div>
            </div>
          </div>
        </article>
    );
}

export { FlatItem }