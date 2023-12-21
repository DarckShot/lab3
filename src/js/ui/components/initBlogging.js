import { bloggingData } from "../../mockData/bloggingData.js";
import {bloggingTemplate} from "../templates/bloggingTemplate.js"

const initblogging = () => {
    const bloggingNode = document.querySelector(".blogging");
    bloggingNode.insertAdjacentHTML("beforeend", bloggingTemplate(bloggingData));
};

export default initblogging;