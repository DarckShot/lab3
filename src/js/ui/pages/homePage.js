import initHeader from "./../components/initHeader.js";
import initHero from "./../components/initHero.js";
import initBrands from "./../components/initBrands.js";
import initWhatIsGpt from "./../components/initWhatIsGpt.js";
import initFutureHere from "./../components/initFutureHere.js";
import initBurger from "./../components/initBurger.js";
import initImagination from "./../components/initImagination.js";
import initSignUp from "./../components/initSignUp.js";
import initBlogging from "./../components/initBlogging.js";
import initBlog from "../components/initBlog.js";
import initFuture from "../components/initFuture.js";

const initHomePage = (element) => {
  const template = `
    <section class="section header"></section>
    <section class="section hero_section"></section>
    <section class="section brands_section"></section>
    <section class="section what_is_chatgpt_section"></section>
    <section class="section future_here"></section>
    <section class = "section imagination"></section>
    <section class = "section sign_up"></section>
    <section class = "section blog"></section>
    <section class = "section blogging"></section>
    <section class = "section future"></section>
  `;

  element.insertAdjacentHTML("beforeend", template);
};

const rootNode = document.querySelector("#root");

const homePage = () => {
  // инициализация элементов Главной страницы
  initHomePage(rootNode);
  // initHomePage(rootNode2);

  // инициализация шапки страницы с мок датой
  initHeader(rootNode);
  // initHeader(rootNode2);

  // инициализация хиро раздела
  initHero(rootNode);
  // initHero(rootNode2);

  // инициализация хиро раздела
  initBrands();

  // инициализация хиро раздела
  initWhatIsGpt();

  // инициализация раздела "Будущее наступило" с мок датой
  initFutureHere();

  initImagination(rootNode);

  // инициализация бургера для адаптивного меню
  initBurger();

  initSignUp(rootNode);

  initBlog(rootNode);

  initBlogging(rootNode);

  initFuture(rootNode);

};

export default homePage;
