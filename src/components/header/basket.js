const Basket = () =>{
    const basketBlock = document.createElement('div');
    basketBlock.innerHTML = `
    <div class="header__icons row">
        <div class="header__person"><img src="./src/images/person_icon.svg"></div>
        <div class="header__basket"><img src="./src/images/basket_icon.svg"></div>
    </div>
    `;
    return basketBlock;
}
export default Basket;