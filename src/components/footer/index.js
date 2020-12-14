import {TopList, MidList} from '../const.js';
import footertop from './footer-top.js';
import footerMid from './footer-middle.js';
const Footer = () => {
    const footer = document.createElement('footer');
    footer.className = "footer";
    footer.innerHTML = `
    <div class="container">
        <div class='row footer__top top'>
            ${footertop(TopList[0].title, TopList[0].listItems)}
            ${footertop(TopList[1].title, TopList[1].listItems)}
            ${footertop(TopList[2].title, TopList[2].listItems)}
            ${footertop(TopList[3].title, TopList[3].listItems)}
        </div>
        <div class='row footer__middle mid'>
            ${footerMid(MidList[0].title, MidList[0].list)}
        </div>
    </div>
    `;
    return footer;
}
export default Footer;