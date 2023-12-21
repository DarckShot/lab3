export const createLeftImaginationTemplate = ({src, alt}) => {
    return `
        <img class = "imagination_left_img" src = "${src}" alt = "${alt}"/>
    `;
};

export const createRightImaginationSilkaTemplate = ({
    href, title
}) => {
    return `
        <a href = "${href}" class = "imagination_right_cta"> ${title} </a>
    `;
};

export const createRightImaginationConteinerTemplate = ({
    header, description, href, title
}) => {
    return `
        <h2 class = "right_header"> ${header} </h2>
        <p class = "right_text"> ${description} </p>
        <a href = "${href}" class = "imagination_right_cta_2"> ${title} </a>
    `;
};

export const imaginationTemplate = ({
    leftImaginationData,
    rightImaginationSilkaData,
    rightImaginationConteinerData,
}) => {
    const leftImaginationTemplate = createLeftImaginationTemplate(leftImaginationData);
    const rightImaginationSilkaTemplate = createRightImaginationSilkaTemplate(rightImaginationSilkaData);
    const rightImaginationConteinerTemplate = createRightImaginationConteinerTemplate(rightImaginationConteinerData);

    
    const resultTemplate = `
        <div class = "imagination_left">
            ${leftImaginationTemplate}
        </div>
        <div class = "imagination_right">
            <div class = "imagination_right_silka">
                ${rightImaginationSilkaTemplate}
            </div>
            <div class = "imagination_right_conteiner">
                ${rightImaginationConteinerTemplate}
            </div>
        </div>
    `;

    return resultTemplate;
};
