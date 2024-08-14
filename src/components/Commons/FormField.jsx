import React from 'react';
import PropTypes from 'prop-types';
import { Field, ErrorMessage } from 'formik';

function FormField({
    type = 'text',
    id,
    name,
    placeholder,
    label,
    className = '',
    ...otherProps
}) {
    return (
        <div className={`mb-4 ${className}`}>
            {label && (
                <label
                    htmlFor={id}
                    className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                    {label}
                </label>
            )}
            <Field
                type={type}
                name={name}
                id={id}
                placeholder={placeholder}
                className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:border-indigo-300 dark:focus:ring-indigo-600"
                {...otherProps}
            />
            <ErrorMessage name={name} component="p" className="mt-1 text-xs text-red-500" />
        </div>
    );
}

FormField.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    className: PropTypes.string,
};

export { FormField };


/* function FormField({ type, id, name, placeholder, label, className }) {
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

export { FormField } */