import Sidebar from "../sidebar/sidebar.js";
import Product from "../product/product.js";
const Farmers = () => {
    const tagFarm = document.createElement('section');
    tagFarm.className = "farmes";
    tagFarm.innerHTML = `
    <div class="container">
        <div class="row">
            <div class="col-3">
                ${Sidebar('Best from Farmers','Carrots','Tomatoes','Potatoes','Chicken','Pork')}
            </div>
            <div class="col-9 row selling__block">
                ${Product('1.48 USD')}
                ${Product('0.28 USD')}
                ${Product('1.12 USD')}
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
Farmers();