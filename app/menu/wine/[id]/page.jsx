import { API } from "@/lib/dataURL";
import { getBeverage } from "@/lib/get";

const page = async ({ params }) => {
  const { id } = await params;
  const wines = await getBeverage(API.wine);
  const { wine, winery } = wines.find((v) => v.id == id);
  return (
    <>
      와인 {id} 상세페이지
      <div>{wine}</div>
      <div>{winery}</div>
    </>
  );
};

export default page;
