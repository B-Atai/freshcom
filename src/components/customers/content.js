const Content = (description, name, img) => {
    const tagFarm = document.createElement('div');
    tagFarm.className = "customers__item col-3";
    tagFarm.innerHTML = `
        <span class="customers__description">
        ${description}
        </span>
        <span class="customers__name">${name}</span>
        <img src=${img} alt='' class='customers__img'>
    `;
    return tagFarm.outerHTML;
}
export default Content; 