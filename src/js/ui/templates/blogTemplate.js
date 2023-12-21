export const createBlogTemplate = ({
    header
}) => {
    console.log(header);
    return `
        <h2 class = "blog_header"> ${header} </h2>
    `;
};

export const blogTemplate = (blogData) => 
{
    const blogDataTemplate = createBlogTemplate(blogData);

    const resultTemplate = blogDataTemplate;

    return resultTemplate;
};