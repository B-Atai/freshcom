const Menu = () =>{
    const menuList = document.createElement('div');
    menuList.className = 'header__menu'
    const arrayOfTitles = ['Bakery', 'Fruit and vegetables', 'Meat and fish', 'Drinks','Kitchen', 'Special nutrition', 'Baby', 'Pharmacy'];
    const arrayOflies = ['111', '222', '333', '444'];
        for (let i = 0; i < 8; i++) {
        const ul = document.createElement('ul');
        ul.className = 'header__list';
        ul.innerHTML = `
            <h3 class="header__title arrow">${arrayOfTitles[i]}</h3>
            <li class="header__items">${arrayOflies[0]}</li>
            <li class="header__items">${arrayOflies[1]}</li>
            <li class="header__items">${arrayOflies[2]}</li>
        `;
        menuList.append(ul);
    }    
    return menuList;
}
export default Menu;