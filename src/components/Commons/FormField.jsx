function FormField({ type, id, name, placeholder, label, className }) {
    return (
        <div className={`mb-4 ${className}`}>
            {label && (
                <label
                htmlFor={id}
                className="mb-1 block text-sm text-gray-600 dark:text-white"
                >
                {label}
            </label>
            )}
            <input
                type={type}
                name={id}
                id={name}
                placeholder={placeholder}
                className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-indigo-300 dark:focus:outline-none dark:focus:ring dark:focus:ring-indigo-600"
            />
        </div>
    );
}

export { FormField }