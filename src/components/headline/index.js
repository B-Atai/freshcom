import Product from "../hero/product.js";
import products from "../hero/const.js"
const Headline = () => {
    const tagHeadline = document.createElement('section');
    tagHeadline.className = "headline";
    tagHeadline.innerHTML = `
    <div class="container">
        <div class="row">
            <h3 class='headline__title'>Section Headline</h3>
            <button class="btn__plain arrow__black"><a href="">Button</a></button>
        </div>
        <div class="row">
            ${products.map((item)=> Product(item)).join('')}
        </div>
    </div>
    `;
    document.body.append(tagHeadline);
    return tagHeadline;
}
Headline();
// import { products } from './const.js';
// import Product from '../hero/product.js'
// const Headline = () => {
//     const tagHeadline = document.createElement('section');
//     tagHeadline.className = "headline";
//     tagHeadline.innerHTML = `
//     <div class="container">
//         <div class="row headline__top">
//             <h3 class='headline__title'>Section Headline</h3>
//             <button class="btn__plain arrow__black"><a href="#">Button</a></button>
//         </div>
//         <div class="row headline__content">
//             ${products.map((item)=> Product(item)).join('')}
//         </div>
//     </div>
//     `;
//     document.body.append(tagHeadline);
//     return tagHeadline;
// }
// Headline();