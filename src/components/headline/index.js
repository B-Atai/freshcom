import Product from "../product.js";
const Headline = () => {
    const tagHeadline = document.createElement('section');
    tagHeadline.className = "headline";
    tagHeadline.innerHTML = `
    <div class="container">
        <div class="row">
            <h3 class='headline__title'>Section Headline</h3>
            <button class="btn__plain arrow__black"><a href="#">Button</a></button>
        </div>
        <div class="row">
            ${Product('3.26 USD')}
            ${Product('1.48 USD')}
            ${Product('0.28 USD')}
            ${Product('1.12 USD')}
        </div>
    </div>
    `;
    document.body.append(tagHeadline);
    return tagHeadline;
}
Headline();