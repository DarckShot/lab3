export const createLeftSignUpTemplate = ({
    href, title, description,
}) => {
    return `
        <a href = "${href}" class = "sign_up_cta"> ${title} </a>
        <p class = "sign_up_header"> ${description} </p>
    `;
};

export const createRightSignUpTemplate = ({title}) => {
    return`
        <button class="sign_up_button"> ${title} </button>
    `;
};

export const signUpTemplate = ({
    leftSignUpData,
    rightSignUpData, 
}) => {
    const leftSignUpTemplate = createLeftSignUpTemplate(leftSignUpData);
    const rightSignUpTemplate = createRightSignUpTemplate(rightSignUpData);

    const resultTemplate = `
        <div class = "sign_up_left">
            ${leftSignUpTemplate}
        </div>
        <div class = "sign_up_right">
            ${rightSignUpTemplate}
        </div>
    `;

    return resultTemplate;
}