const Basket = () =>{
    const basketBlock = document.createElement('div');
    basketBlock.className = 'header__icons row'
    basketBlock.innerHTML = `
    <div class="header__person">
        <a href="#"><img src="./src/images/person_icon.svg"></a>
    </div>
    <div class="header__basket">
        <a href="#"><img src="./src/images/basket_icon.svg"></a>
        <span class="basket__counter">0</span>
    </div>
    `;
    return basketBlock;
}
export default Basket;