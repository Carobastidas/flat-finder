function ButtonPrimaryForm({ text }) {
  return (
    <>
      <button
        type="button"
        className="w-full rounded bg-indigo-500 pt-2 pb-3 text-white duration-100 ease-in-out hover:bg-indigo-600 focus:outline-none"
      >
        {text}
      </button>
    </>
  );
}

export { ButtonPrimaryForm };
