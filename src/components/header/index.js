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
    return tagHeader;
}
export default Header;