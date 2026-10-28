/* 
Next 13 버전 이전: 상관 없음
Next 13 버전 이후:
- 클라이언트 컴포넌트 [useState]
- 서버 컴포넌트[fetch]
*/

import Menus from "@/components/Menus";
import { API } from "@/lib/dataURL";
import { getBeverage } from "@/lib/get";

const page = async () => {
  const coffees = await getBeverage(API.coffee);
  const wines = await getBeverage(API.wine);
  const beers = await getBeverage(API.beer);
  const arr = coffees.map((v) => ({
    id: v.id,
    image: v.image,
    main: v.title,
    sub: v.description,
    category: "coffee",
  }));
  const arr1 = wines.map((v) => ({
    id: v.id,
    image: v.image,
    main: v.wine,
    sub: v.winery,
    category: "wine",
  }));
  const arr2 = beers.map((v) => ({
    id: v.id,
    image: v.image,
    main: v.name,
    sub: v.price,
    category: "beer",
  }));
  const data = [...arr, ...arr1, ...arr2];
  return (
    <>
      <Menus data={data} />
    </>
  );
};

export default page;
