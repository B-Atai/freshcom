const Product_2 = () => {
    const product = document.createElement('div');
    product.className = "product";
    product.innerHTML = `
    <div class="product__item">
        <img src="./src/images/product_1.png" class="product__picture">
        <div class="product__info">
            <h3 class="product__title">Product Title</h3>
            <p class="product__description">Space for a small product description </p>
            <div class="product__value row">
                <span class="product__price">0.28 USD</span>
                <button class="btn__green">Buy now</button>
            </div>
        </div>
    </div>
    `;
    return product.outerHTML;
}
export default Product_2();