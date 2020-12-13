import Bigblog from './bigblog.js'
const Blog = () => {
    const tagBlog = document.createElement('section');
    tagBlog.className = "blog";
    tagBlog.innerHTML = `
    <div class="container">
        <div class='row blog__top'>
            <h3 class='blog__title'>Read our Blog posts</h3>
            <button class='btn__plain'><a href="#">Go to Blog</a></button>
        </div>
        <div class='row blog__content'>
            ${Bigblog()}
        </div>
    </div>
    `;
    return tagBlog.outerHTML;
}
export default Blog;