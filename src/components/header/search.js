const Search = () =>{
    const searchItem = document.createElement('div');
    let p = document.createElement('p')
    p.innerHTML = 'All categories';
    p.className = 'header__description arrow'
    searchItem.className = 'header__search row'
    searchItem.innerHTML = `
        <div class="relative">
            ${p.outerHTML}
            <ul class="header__description--drop" id="categories__drop">
                <li>All categories</li>
                <li>All categories</li>
                <li>All categories</li>
            </ul>
        </div>
        <label>
            <input type="text" class="header__input" placeholder="Search Products, categories ...">
        </label>
        <a href=""><img src="./src/images/search_icon.svg" class="header__icon"></a>
    `;
    return searchItem;
}
export default Search;