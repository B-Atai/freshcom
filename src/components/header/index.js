import Contact from "./contact.js";
import Nav from "./nav.js";
import Logo from "./logo.js";
import Search from "./search.js";
import Basket from "./basket.js";
import Menu from "./menu.js";
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
            ${Menu().outerHTML}
        </div>
    </div>
    `;
    document.body.append(tagHeader);
    const headerDrop = () => {
        let categoriesBtn = document.querySelector('.header__description')
        const categoriesDown = document.getElementById('categories__drop')
        categoriesBtn.addEventListener('click', () => {
            categoriesDown.classList.toggle('is-down')
        });
    }
    headerDrop();
    const headerCounter =() => {
        const addBtn = document.querySelectorAll('.btn__green');
        const basketCount = document.querySelector('.basket__counter');
        let counter = 0;
        addBtn.forEach((button) => {
            button.addEventListener('click', function () {
            counter += 1;
            basketCount.innerHTML= `${counter}`;
            });
        });
    }
    headerCounter()
    const add = () => {
        const addList = document.querySelectorAll('.header__list');
        const li = document.querySelectorAll('.header__items');
        addList.forEach((item) =>
            item.addEventListener('click', () => {
                item.classList.toggle('is-active')
        }))
    }
    add();
    return tagHeader;
}
Header();