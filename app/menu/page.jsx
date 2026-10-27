import Coffee from "@/components/Coffee";
import { API } from "@/lib/dataURL";
import { getBeverage } from "@/lib/get";

const page = async () => {
  const coffees = await getBeverage(API.coffee);
  const wines = await getBeverage(API.wine);
  const beers = await getBeverage(API.beer);

  const arr = coffees.map((v) => ({ ...v, category: "coffee" }));
  const arr1 = wines.map((v) => ({ ...v, category: "wines" }));
  const arr2 = beers.map((v) => ({ ...v, category: "beers" }));

  const newArr = [...arr, ...arr1, ...arr2];
  console.log(newArr);

  return (
    <>
      <div>
        <button>ALL</button>
        <button>Coffees</button>
        <button>Wines</button>
        <button>Beers</button>
      </div>
      <section className="grid grid-cols-3 max-w-5xl mx-auto">
        {coffees.map((v, i) => (
          <Coffee key={i} {...v} />
        ))}
      </section>
    </>
  );
};

export default page;
