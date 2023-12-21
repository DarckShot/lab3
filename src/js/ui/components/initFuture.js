import futureData from "../../mockData/futureData.js";
import { futureTemplate } from "../templates/futureTemplate.js";

const initFuture = (element) => {
  const futureNode = element.querySelector(".future");

    futureNode.insertAdjacentHTML("beforeend", futureTemplate(futureData));
};

export default initFuture;