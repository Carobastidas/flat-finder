function TitleForm({title, paragraph}) {
  return (
    <>
      <h1 className="text-3xl font-semibold text-gray-700">{title}</h1>
      <p className="text-gray-500">{paragraph}</p>
    </>
  );
}
export { TitleForm };
