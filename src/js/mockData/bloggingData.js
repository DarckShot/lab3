const generateBloggingItemLeftData = (index) => ({
    src: `./assets/blogging/left-img${index + 1}.png`,
    description: "Сент 26, 2021",
    header: "GPT-3 и Openai - это будущее. Давай разберемся, как это",
    href: "",
    title: "Читать полную статью",
});

//Количество элементов слева
const numBloggingLeftItems = 1;
//Массив элементов
const bloggingData = {};

for (let i = 0; i < numBloggingLeftItems; i++) {
    const key = `blogging_left_item`;
    bloggingData[key] = generateBloggingItemLeftData(i);
}


const generateBloggingItemRightData = (index) => ({
    src: `./assets/blogging/right-img${index + 1}.png`,
    description: "Сент 26, 2021",
    header: "GPT-3 и Openai - это будущее. Давай разберемся, как это",
    href: "",
    title: "Читать полную статью",
});

//Количество элементов справа
const numBloggingRightItems = 4;

for (let i = 0; i < numBloggingRightItems; i++) {
    const key = `blogging_right_item${i+1}`;
    bloggingData[key] = generateBloggingItemRightData(i);
}

export { bloggingData };
