import Sidebar from "../sidebar/sidebar.js";
import Product from "../hero/product.js";
import { menuData, products } from "../const.js";
const Farmers = () => {
    const tagFarm = document.createElement('section');
    tagFarm.className = "farmes";
    tagFarm.innerHTML = `
    <div class="container">
        <div class="row">
            <div class="col-3">
                ${Sidebar(menuData[2].title, menuData[2].listItems, menuData[2].btnText)}
            </div>
            <div class="col-9 row selling__block">
                ${products.map((item) => Product(item)).join('')}
            </div>
        </div>
    </div>
    `;
    return tagFarm.outerHTML;
}
export default Farmers;