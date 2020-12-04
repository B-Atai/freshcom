const Banner = () =>{
    const heroBanner = document.createElement('div');
    heroBanner.className = 'col-6 hero__banners'
    heroBanner.innerHTML = `
        <h3 class="hero__suptitle">Banner subfocus</h3>
        <p class="hero__title">Space for heading</p>
        <button class="hero__btn arrow">Read recepies</button>
    `;
    return heroBanner.outerHTML;
}
export default Banner();