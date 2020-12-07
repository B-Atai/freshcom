const Sidebar = (title, a,b,c,d,e) =>{
    const sidebar = document.createElement('div');
    sidebar.className = 'sidebar__menu'
    sidebar.innerHTML = `
        <h1 class="sidebar__title">${title}</h1>
        <ul class="sidebar__items">
            <li><a href="#" class="sidebar__links">${a}</a></li>
            <li><a href="#" class="sidebar__links">${b}</a></liass=>
            <li><a href="#" class="sidebar__links">${c}</a></li>
            <li><a href="#" class="sidebar__links">${d}</a></li>
            <li><a href="#" class="sidebar__links">${e}</a></li>
        </ul>
        <button class="btn__gray arrow__black">More categories</button>
    `;
    return sidebar.outerHTML;
}
export default Sidebar;