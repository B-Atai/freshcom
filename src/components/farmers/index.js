import Sidebar from "../sidebar/sidebar.js";
import Product_1 from "../product/product_1.js";
import Product_2 from "../product/product_2.js";
import Product_3 from "../product/product_3.js";
const Farmers = () => {
    const tagFarm = document.createElement('section');
    tagFarm.className = "farmes";
    tagFarm.innerHTML = `
    <div class="container">
        <div class="row">
            <div class="col-3">
                ${Sidebar}
            </div>
            <div class="col-9 row selling__block">
                ${Product_1}
                ${Product_2}
                ${Product_3}
            </div>
        </div>
    </div>
    `;
    document.body.append(tagFarm);
    const headerCounter =() => {
        const addBtn = document.querySelectorAll('.btn__green');
        console.log(addBtn)
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
Farmers();