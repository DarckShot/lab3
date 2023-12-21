import brandsData from "../../mockData/brandsData.js";
import { brandsTemplate } from "../templates/brandsTemplate.js";

const initBrands = () => {
  const brandsNode = document.querySelector(".brands_section");

  brandsNode.insertAdjacentHTML("beforeend", brandsTemplate(brandsData));


};

export default initBrands;
