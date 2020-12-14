import {infoblog} from '../const.js';
import item from './smallblog__item.js';
const smallblog = () => {
    const div = document.createElement('div');
    div.className = "smallblog col-4";
    div.innerHTML = `
        ${item(infoblog[0].description,infoblog[0].author,infoblog[0].date, infoblog[0].img)}
        ${item(infoblog[1].description,infoblog[1].author,infoblog[1].date, infoblog[1].img)}
        ${item(infoblog[2].description,infoblog[2].author,infoblog[2].date, infoblog[2].img)}
    `;
    return div.outerHTML;
}
export default smallblog;