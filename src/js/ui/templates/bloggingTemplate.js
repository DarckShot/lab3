export const createBloggingItemTemplate = ({
    src,
    description,
    header,
    href,
    title,
    className
}) => {
    return `
        <figure class="${className}">
            <img class="${className.includes('left') ? 'blogging_left_img' : 'blogging_right_img'}" src="${src}"/>
            <div class="${className.includes('left') ? 'blogging_text' : 'blogging_text_2'}">
                <p class="blogging_date"> ${description} </p>
                <h3 class="blogging_header"> ${header} </h3>
                <a href="${href}" class="blogging_cta"> ${title} </a>
            </div>
        </figure>
    `;
};

export const bloggingTemplate = (bloggingData) => {
    let resultTemplate = '';

    for (const key in bloggingData) {
        if (Object.hasOwnProperty.call(bloggingData, key)) {
            const template = createBloggingItemTemplate({
                ...bloggingData[key],
                className: key,
            });

            resultTemplate += template;
        }
    }

    return resultTemplate;
};
