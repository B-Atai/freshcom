const Basket = () =>{
    const basketBlock = document.createElement('div');
    basketBlock.className = 'header__icons row'
    basketBlock.innerHTML = `
    <div class="header__person">
        <img src="./src/images/person_icon.svg">
    </div>
    <div class="header__basket">
        <img src="./src/images/basket_icon.svg">
        <span class="basket__counter">0</span>
    </div>
    `;
    return basketBlock;
}
export default Basket;