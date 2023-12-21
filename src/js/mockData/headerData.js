// Генерация menuData
const menuItems = ["Главная", "Что такое GPT?", "Open AI", "Кейсы", "Библиотека"];
export const menuData = menuItems.map(title => ({ title, href: "#" }));

// Генерация buttonsData
const buttonTitles = ["Войти", "Регистрация"];
export const buttonsData = buttonTitles.map((title, index) => ({
  title,
  href: "#",
  isPrimary: index === 1, // Устанавливаем isPrimary в true только для второй кнопки
}));

export const logoData = {
  alt: "logo",
  src: "./assets/logo.svg",
  href: "#",
};

const headerData = {
  logoData,
  menuData,
  buttonsData,
};

export default headerData;
