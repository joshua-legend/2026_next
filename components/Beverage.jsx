"use client";
import { useRouter } from "next/navigation";

const Beverage = ({ id, category, image, main, sub }) => {
  // 라우팅 역할하는 함수
  const router = useRouter();

  return (
    <article
      onClick={() => {
        router.push(`/menu/${category}/${id}`);
      }}
      className="w-full border-2 border-slate-200 rounded-2xl flex flex-col justify-center items-center"
    >
      <img src={image} alt="" />
      <h2>{main}</h2>
      <p>{sub}</p>
    </article>
  );
};

export default Beverage;
