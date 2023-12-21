import {imaginationData} from "../../mockData/imaginationData.js";
import {imaginationTemplate} from "../templates/imaginationTemplate.js";

const initImagination = () => {
    const imaginationNode = document.querySelector(".imagination ");
    imaginationNode.insertAdjacentHTML("beforeend", imaginationTemplate(imaginationData));
};

export default initImagination;