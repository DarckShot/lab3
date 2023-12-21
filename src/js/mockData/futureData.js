/*export const headerData = {
    header: "Хочешь Шагнуть в Будущее Раньше Других?",
    title: "Запросить ранний доступ",
};

export const contentTextData = {
    src: "./assets/logo.svg",
    description: "ул.Профессора Поздеева, 13 к.Г, Пермь, Пермский Край, 614013. Все права защищены",
};

export const headerText1Data = {
    header: "Ссылки"
};

export const contentText1Data = [
    {
        href: "",
        title: "Овероны",
    },
    {
        href: "",
        title: "Соц. сети",
    },
    {
        href: "",
        title: "Счетчики",
    },
    {
        href: "",
        title: "Контакты",
    },
];

export const headerText2Data = {
    header: "Кoмпaния"
};

export const contentText2Data = [
    {
        href: "",
        title: "Условия использования",
    },
    {
        href: "",
        title: "Перс. данные",
    },
    {
        href: "",
        title: "Контакты",
    },
];

export const headerText3Data = {
    header: "Контакты"
};

export const contentText3Data = [
    {
        href: "",
        title: "ул.Профессора Поздеева, 13 к.Г. Пермь",
    },
    {
        href: "",
        title: "+7(342)2-198-520",
    },
    {
        href: "",
        title: "info@pstu.ru",
    },
];

const futureData = {
    headerData,
    contentTextData,
    headerText1Data,
    contentText1Data,
    headerText2Data,
    contentText2Data,
    headerText3Data,
    contentText3Data,
};

export default futureData;

*/
export const headerData = {
    header: "Хочешь Шагнуть в Будущее Раньше Других?",
    title: "Запросить ранний доступ",
};

export const contentTextData = {
    src: "./assets/logo.svg",
    description: "ул.Профессора Поздеева, 13 к.Г, Пермь, Пермский Край, 614013. Все права защищены",
};

const generateLinkData = (header, titles) => ({
    header,
    content: titles.map(title => ({ href: "", title })),
});

const linksData = generateLinkData("Ссылки", ["Овероны", "Соц. сети", "Счетчики", "Контакты"]);
const companyData = generateLinkData("Кoмпaния", ["Условия использования", "Перс. данные", "Контакты"]);
const contactsData = generateLinkData("Контакты", [
    "ул.Профессора Поздеева, 13 к.Г. Пермь",
    "+7(342)2-198-520",
    "info@pstu.ru",
]);

const futureData = {
    headerData,
    contentTextData,
    linksData,
    companyData,
    contactsData,
};

export default futureData;
