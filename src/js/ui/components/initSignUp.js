import {signUpData} from "../../mockData/signUpData.js";
import {signUpTemplate} from "../templates/signUpTemplate.js";

const initSignUp = () => {
    const signUpNode = document.querySelector(".sign_up");
    signUpNode.insertAdjacentHTML("beforeend", signUpTemplate(signUpData));
};

export default initSignUp;