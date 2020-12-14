const footerMid = (title, list) => {
    const div = document.createElement('div');
    div.className = "mid__items";
    div.innerHTML = `
    <h3 class='mid__title'>${title}</h3>
    <ul class='row mid__list'>
        ${list.map((item) => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            li.className = 'mid__item';
            a.className = 'mid__link';
            a.innerHTML = item;
            a.setAttribute('href', '#')
            li.append(a);
            return li.outerHTML;
        }).join('')}
    </ul>
    <span class='mid__text'>Copyright © 2020 petrbilek.com</span>
    `;
    return div.outerHTML;
}
export default footerMid;