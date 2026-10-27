const Beverage = ({ image, main, sub }) => {
  return (
    <article className="w-full border-2 border-slate-200 rounded-2xl flex flex-col justify-center items-center">
      <img src={image} alt="" />
      <h2>{main}</h2>
      <p>{sub}</p>
    </article>
  );
};

export default Beverage;
