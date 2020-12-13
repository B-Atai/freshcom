import content from './content.js';
import { customs } from "../const.js";
const Customers = () => {
    const tagCustomers = document.createElement('section');
    tagCustomers.className = "customers";
    tagCustomers.innerHTML = `
    <div class="container">
        <div class="row customers__top">
            <h3 class="customers__title">Our customers says</h3>
            <button class="btn__plain arrow__horizontal"><a href="#">Button</a></button>
        </div>
    </div>
    <div class="slider row">
            ${content(customs[0].description, customs[0].name)}
            ${content(customs[1].description, customs[1].name)}
            ${content(customs[2].description, customs[2].name)}
            ${content(customs[3].description, customs[3].name)}
            ${content(customs[0].description, customs[0].name)}
            ${content(customs[1].description, customs[1].name)}
            ${content(customs[2].description, customs[2].name)}
            ${content(customs[3].description, customs[3].name)}
        </div>
    `;
    return tagCustomers.outerHTML;
}
export default Customers;

$(document).ready(function(){
    $('.slider').slick({
      arrows:true,
      slidesToShow: 3.2,
      slidesToScroll: 1,
      centerMode: true,
    });
  });