import {footerItems} from '../const.js'
import footertop from './footer-top.js'
const Footer = () => {
    const footer = document.createElement('footer');
    footer.className = "footer";
    footer.innerHTML = `
    <div class="container">
        <div class='row footer__top top'>
            ${footertop(footerItems[0].title, footerItems[0].listItems)}
            ${footertop(footerItems[1].title, footerItems[1].listItems)}
            ${footertop(footerItems[2].title, footerItems[2].listItems)}
            ${footertop(footerItems[3].title, footerItems[3].listItems)}
        </div>
    </div>
    `;
    return footer;
}
export default Footer;