const Coffee = ({ image, title, description }) => {
  return (
    <article className="w-full border-2 border-slate-200 rounded-2xl flex flex-col justify-center items-center">
      <img src={image} alt="" />
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  );
};

export default Coffee;
