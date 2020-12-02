const Menu = () =>{
    const menuList = document.createElement('ul');
    menuList.innerHTML = `
        <li class="header__menu--items arrow">Bakery</li>
        <li class="header__menu--items arrow">Fruit and vegetables</li>
        <li class="header__menu--items arrow">Meat and fish</li>
        <li class="header__menu--items arrow">Drinks</li>
        <li class="header__menu--items arrow">Kitchen</li>
        <li class="header__menu--items arrow">Special nutrition</li>
        <li class="header__menu--items arrow">Baby</li>
        <li class="header__menu--items arrow">Pharmacy</li>
    `;
    menuList.classList.add('header__menu')
    return menuList;
}
export default Menu;