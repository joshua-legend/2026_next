import { API } from "@/lib/dataURL";
import { getBeverage } from "@/lib/get";

const page = async ({ params }) => {
  const { id } = await params;
  const coffees = await getBeverage(API.coffee);
  const { title, description } = coffees.find((v) => v.id == id);

  return (
    <>
      <div>{id}</div>
      <div>{title}</div>
      <div>{description}</div>
    </>
  );
};

export default page;
