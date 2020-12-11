const Content = (description, name) => {
    const tagFarm = document.createElement('div');
    const img = document.createElement('img');
    img.className = 'customers__img'
    tagFarm.className = "customers__item col-3";
    tagFarm.innerHTML = `
        <span class="customers__description">
        ${description}
        </span>
        <span class="customers__name">${name}</span>
    `;
    img = customs(`${img}`);
    tagFarm.append(img);
    return tagFarm.outerHTML;
}
export default Content; 