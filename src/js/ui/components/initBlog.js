import blogData from "../../mockData/blogData.js";
import {blogTemplate} from "../templates/blogTemplate.js";

const initBlog = () => {
    const blogNode = document.querySelector(".blog");
    blogNode.insertAdjacentHTML("beforeend", blogTemplate(blogData));
};

export default initBlog;