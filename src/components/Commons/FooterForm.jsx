function FooterFrom({ message, linkText }) {
    return (
        <p className="text-center text-sm text-gray-400">
              {message} &nbsp;
              <a
                href="/register"
                className="font-semibold text-indigo-500 focus:text-indigo-600 focus:underline focus:outline-none"
              >
                {linkText}
              </a>
              .
        </p>
    );
}

export { FooterFrom };
