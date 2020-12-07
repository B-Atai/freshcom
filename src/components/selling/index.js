import Sidebar from "../sidebar/sidebar.js";
import Product from "../product/product.js";
const Selling = () => {
    const tagSelling = document.createElement('section');
    tagSelling.className = "selling";
    tagSelling.innerHTML = `
    <div class="container">
        <div class="row">
            <div class="col-3">
                ${Sidebar('Best selling products','Kitchen','Meat and fish','Special nutrition','Pharmacy','Baby')}
            </div>
            <div class="col-9 row selling__block">
                ${Product('1.48 USD')}
                ${Product('0.28 USD')}
                ${Product('1.12 USD')}
            </div>
        </div>
    </div>
    `;
    document.body.append(tagSelling);
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
    return tagSelling;
}
Selling();