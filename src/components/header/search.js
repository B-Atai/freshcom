const Search = () =>{
    const searchItem = document.createElement('div');
    searchItem.innerHTML = `
    <div class="header__search row">
        <span class="header__description">All categories</span>
        <label>
            <input type="text" class="header__input" placeholder="Search Products, categories ...">
        </label>
        <a href=""><img src="./src/images/search_icon.svg" class="header__icon"></a>
    </div>
    `;
    return searchItem;
}
export default Search;