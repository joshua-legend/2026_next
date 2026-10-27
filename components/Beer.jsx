const Beer = ({ name, price, image }) => {
  return (
    <article className="w-full border-2 border-slate-200 rounded-2xl flex flex-col justify-center items-center">
      <img src={image} alt="" />
      <h2>{name}</h2>
      <p>{price}</p>
    </article>
  );
};

export default Beer;
