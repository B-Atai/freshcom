import Sidebar from "../sidebar/sidebar.js";
import Banner from "./banner.js";
import { menuData, products } from "../const.js";
const Hero = () => {
    const tagHero = document.createElement('section');
    tagHero.className = "hero";
    tagHero.innerHTML = `
    <div class="container">
        <div class="row">
            <div class="col-3">
                ${Sidebar(menuData[0].title, menuData[0].listItems, menuData[0].btnText)}
            </div>
            <div class="col-9 row hero__item">
                ${Banner}
                ${Banner}
            </div>
        </div>
    </div>
    `;
    return tagHero.outerHTML;
}
export default Hero;
