import Sidebar from "../sidebar/sidebar.js";
import Product from "../hero/product.js";
import { menuData, products } from "../hero/const.js";
const Selling = () => {
    const tagSelling = document.createElement('section');
    tagSelling.className = "selling";
    tagSelling.innerHTML = `
    <div class="container">
        <div class="row">
            <div class="col-3">
                ${Sidebar(menuData[1].title, menuData[1].listItems, menuData[1].btnText)}
            </div>
            <div class="col-9 row selling__block">
                ${products.map((item) => Product(item)).join('')}
            </div>
        </div>
    </div>
    `;
    return tagSelling.outerHTML;
}
export default Selling;