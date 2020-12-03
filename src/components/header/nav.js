const Nav = () =>{
    const navList = document.createElement('nav');
    navList.className = 'nav'
    navList.innerHTML = `
    <ul class="nav__menu row">
        <li class="nav__link"><a href="#">Blog</a></li>
        <li class="nav__link"><a href="#">About Us</a></li>
        <li class="nav__link"><a href="#">Careers</a></li>
    </ul>
    `;
    return navList;
}
Nav();
export default Nav;