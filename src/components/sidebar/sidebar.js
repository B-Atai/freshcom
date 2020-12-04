const Sidebar = () =>{
    const sidebar = document.createElement('div');
    sidebar.className = 'sidebar__menu'
    sidebar.innerHTML = `
        <h1 class="sidebar__title">Category menu</h1>
        <ul class="sidebar__items">
            <li><a href="#" class="sidebar__links">Bakery</a></li>
            <li><a href="#" class="sidebar__links">Fruit and vegetables</a></liass=>
            <li><a href="#" class="sidebar__links">Meat and fish</a></li>
            <li><a href="#" class="sidebar__links">Drinks</a></li>
            <li><a href="#" class="sidebar__links">Kitchen</a></li>
        </ul>
        <button class="btn__gray arrow__black">More categories</button>
    `;
    return sidebar.outerHTML;
}
export default Sidebar();