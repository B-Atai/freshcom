const middleblog = () => {
    const div = document.createElement('div');
    div.className = "middleblog col-3";
    div.innerHTML = `
        <img src='/src/images/blog.png' class='middleblog__picture'>
        <span class='middleblog__tips tips'>Vegetable</span>
        <p class='middleblog__description'>Which vegetable your family will love and want’s eat each day</p>
        <span class='author'>Author</span>
        <time class='date'>15. 6. 2020</time>
    `;
    return div.outerHTML;
}
export default middleblog;