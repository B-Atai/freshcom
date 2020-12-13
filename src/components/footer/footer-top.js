const footerTop = (title, listItems) => {
    const div = document.createElement('div');
    div.className = "footer__top top";
    div.innerHTML = `
    <div class='top__items'>
        <h2 class='top__title'>${title}</h2>
        <ul class='top__list'>
            ${listItems.map((item) => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                li.className = 'top__item';
                a.className = 'top__link';
                a.innerHTML = item;
                a.setAttribute('href', '#')
                li.append(a);
                return li.outerHTML;
            }).join('')}
        </ul>
    </div>
    `;
    return div.outerHTML;
}
export default footerTop;