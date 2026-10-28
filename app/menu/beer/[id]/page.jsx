//localhost:3000/menu/beer/[id]

import { API } from "@/lib/dataURL";
import { getBeverage } from "@/lib/get";

const page = async ({ params }) => {
  const { id } = await params;
  const beers = await getBeverage(API.beer);
  const { name, price } = beers.find((v) => v.id == id);

  return (
    <>
      <div>{id}</div>
      <div>{name}</div>
      <div>{price}</div>
    </>
  );
};

export default page;
