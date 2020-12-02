const Search = () =>{
    const searchItem = document.createElement('div');
    searchItem.innerHTML = `
    <div class="header__search row">
        <div class="relative">
            <p id="categories" class="header__description arrow">All categories</p>
            <ul class="header__description--drop" id="categories__drop">
                <li>AAAAA</li>
                <li>BBBBB</li>
                <li>CCCCC</li>
            </ul>
        </div>
        <label>
            <input type="text" class="header__input" placeholder="Search Products, categories ...">
        </label>
        <a href=""><img src="./src/images/search_icon.svg" class="header__icon"></a>
    </div>
    `;
    return searchItem;
}
export default Search;