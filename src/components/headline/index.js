import Product from "../hero/product.js";
import {headlines} from "../hero/const.js";
const Headline = () => {
    const tagHeadline = document.createElement('section');
    tagHeadline.className = "headline";
    tagHeadline.innerHTML = `
    <div class="container">
        <div class="row headline__top">
            <h3 class='headline__title'>Section Headline</h3>
            <button class="btn__plain arrow__horizontal"><a href="">Button</a></button>
        </div>
        <div class="row">
            ${headlines.map((item)=> Product(item)).join('')}
        </div>
    </div>
    `;
    return tagHeadline.outerHTML;
}
export default Headline;