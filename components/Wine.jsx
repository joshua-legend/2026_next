const Wine = ({ winery, wine, image }) => {
  return (
    <article className="w-full border-2 border-slate-200 rounded-2xl flex flex-col justify-center items-center">
      <img src={image} alt="" />
      <h3>{winery}</h3>
      <h2>{wine}</h2>
    </article>
  );
};

export default Wine;
