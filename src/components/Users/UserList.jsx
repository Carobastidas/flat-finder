//Componente para listar los usuarios del sistema

function UserList({ users, dropdownStates, onToggleDropdown, onMakeAdmin }) {
  return (
    <>
      {users.map((user) => (
        <div
          key={user.id}
          className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <div className="relative flex flex-col items-end px-4 pt-4">
            <button
              id={`dropdownButton-${user.uid}`}
              onClick={() => onToggleDropdown(user.uid)}
              className="w-8 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
              type="button"
            >
              <span className="sr-only">Open dropdown</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 3"
              >
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
              </svg>
            </button>
            {/* Dropdown menu */}
            <div
              id={`dropdown-${user.uid}`}
              className={`z-10 ${
                dropdownStates[user.uid] ? "block" : "hidden"
              } absolute top-14 right-[-60px] mt-1 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
            >
              <ul
                className="py-2"
                aria-labelledby={`dropdownButton-${user.uid}`}
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    View Profile
                  </a>
                </li>
                <li
                  onClick={() => onMakeAdmin(user.id)}
                  className="block w.full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Make Admin
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Delete
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center pb-10">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={
                user.profilePicture ||
                "https://flowbite.com/docs/images/people/profile-picture-4.jpg"
              }
              alt={`${user.name} image`}
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {user.name} {user.lastname}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {user.email}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {user.date || "N/A"}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              UID: {user.uid}
            </span>
            <ul className="flex gap-4">
              <li className="flex flex-col justify-center items-center mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                  <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                </svg>
                <span>{user.flatsCount}</span>
              </li>
              <li className="flex flex-col justify-center items-center mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{user.userRole}</span>
              </li>
              <li className="flex flex-col justify-center items-center mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.412.23l-.022.012-.007.004a.75.75 0 0 1-.681 0Z" />
                </svg>
                <span>{user.favorites?.length || 0}</span>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}

export { UserList };
