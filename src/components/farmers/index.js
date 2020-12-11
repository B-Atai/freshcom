import Sidebar from "../sidebar/sidebar.js";
import Product from "../hero/product.js";
import { menuData, products } from "../hero/const.js";
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
    document.body.append(tagFarm);
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
    return tagFarm;
}
export default Farmers;