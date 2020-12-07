import Sidebar from "../sidebar/sidebar.js";
import Banner from "./banner.js";
const Hero = () => {
    const tagHero = document.createElement('section');
    tagHero.className = "hero";
    tagHero.innerHTML = `
    <div class="container">
        <div class="row">
            <div class="col-3">
                ${Sidebar('Category menu','Bakery','Fruit and vegetables','Meat and fish','Drinks','Kitchen')}
            </div>
            <div class="col-9 row hero__item">
                ${Banner}
                ${Banner}
            </div>
        </div>
    </div>
    `;
    document.body.append(tagHero);
    return tagHero;
}
Hero();