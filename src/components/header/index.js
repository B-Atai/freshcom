import Contact from "./contact.js";
import Nav from "./nav.js";
import Logo from "./logo.js";
import Search from "./search.js";
import Basket from "./basket.js";
import DropDowns from "./dropdowns.js";
const Header = () => {
    const tagHeader = document.createElement('header');
    tagHeader.className = 'header';
    tagHeader.innerHTML = `
    <div class="container">
        <div class="header__top row">
            ${Contact().outerHTML}
            ${Nav().outerHTML}
        </div>
        <div class="header__middle row">
            ${Logo().outerHTML}
            ${Search().outerHTML}
            ${Basket().outerHTML}
        </div>
        <div class="header__bottom row">
            ${DropDowns}
        </div>
    </div>
    `;
    document.body.append(tagHeader);
    const headerDrop = () => {
        const categoriesBtn = document.querySelector('.header__description')
        const categoriesDown = document.getElementById('categories__drop')
        categoriesBtn.addEventListener('click', () => {
            categoriesDown.classList.toggle('is-down')
            categoriesBtn.classList.toggle('is-active')
        });
    }
    headerDrop();
    const add = () => {
        const addList = document.querySelectorAll('.header__list');
        const li = document.querySelectorAll('.header__items');
        addList.forEach((item) =>
            item.addEventListener('click', () => {
                item.classList.toggle('is-active')
        }))
    }
    add();
    const headerBottom = () => {
        const ul = document.querySelectorAll('.dropdown__list');
        const h3 = document.querySelectorAll('.dropdown__title');
    
        h3.forEach((item, index) => {
          item.addEventListener('click', (event) => {
            event.target.classList.toggle('is-active');
            ul.forEach((e, i) => {
              if (i != index) e.classList.remove('is-active');
            });
            ul[index].classList.toggle('is-active');
          });
        });
    };
    headerBottom();
    return tagHeader;
}
export default Header;