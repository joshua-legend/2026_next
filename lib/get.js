import axios from "axios";

export const getBeverage = async (param) => {
  "use cache";
  try {
    const { data } = await axios.get(param.url);
    return data;
  } catch (error) {
    console.error(error);
  } finally {
    console.log(param.text);
  }
};
