const Sidebar = (title, listItems, buttonText) =>{
    const sidebar = document.createElement('div');
    sidebar.className = 'sidebar__menu'
    sidebar.innerHTML = `
        <h1 class="sidebar__title">${title}</h1>
        <ul class="sidebar__list">
            ${listItems.map((item) => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                li.className = 'sidebar__item';
                a.className = 'sidebar__link';
                a.innerHTML = item;
                a.setAttribute('href', '#')
                li.append(a);
                return li.outerHTML;
            }).join('')}
        </ul>
        <button class="btn__gray arrow__black">${buttonText} </button>
    `;
    return sidebar.outerHTML;
}
export default Sidebar;