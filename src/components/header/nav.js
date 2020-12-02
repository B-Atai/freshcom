const Nav = () =>{
    const navList = document.createElement('nav');
    navList.innerHTML = `
    <ul class="nav__menu row">
        <li class="nav__link"><a href="#">Blog</a></li>
        <li class="nav__link"><a href="#">About Us</a></li>
        <li class="nav__link"><a href="#">Careers</a></li>
    </ul>
    `;
    navList.classList.add('nav')
    return navList;
}
Nav();
export default Nav;