const item = (description, author, date, img) => {
    const div = document.createElement('div');
    div.className = "row smallblog__items";
    div.innerHTML = `
        <div class='smallblog__info'>
            <span class='smallblog__description'>${description}</span>
            <span class='author'>${author}</span>
            <time class='date'>${date}</time>
        </div>
    `;
    const image = document.createElement('img')
    image.className = 'smallblog__picture'
    image == `${img}`;
    image.src = img;
    div.appendChild(image)
    return div.outerHTML;
}
export default item;