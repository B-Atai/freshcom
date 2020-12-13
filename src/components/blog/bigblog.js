const Bigblog = () => {
    const div = document.createElement('div');
    div.className = "bigblog col-5";
    div.innerHTML = `
        <span class='bigblog__tips tips'>Dinner tips</span>
        <img src='/src/images/bigblog.png' class='bigblog__picture'>
        <div class='bigblog__content'>
            <p class='bigblog__description'>Our chef tips for a great and tasty dinner ready in 20 minutes</p>
            <div class='row bigblog__info'>
                <img src='/src/images/customer_2.png' class='bigblog__icon'>
                <span class='author'>Author</span>
                <time class='date'>17. 6. 2020</time>
            </div>
        </div>
    `;
    return div.outerHTML;
}
export default Bigblog;