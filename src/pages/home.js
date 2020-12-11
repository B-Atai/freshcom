import Hero from '../components/hero/index.js';
import Selling from '../components/selling/index.js';
import Farmers from '../components/farmers/index.js';
import Customers from '../components/customers/index.js';
const Home = () => {
  const homePage = document.createElement('main');
  homePage.innerHTML = `
        ${Hero()}
        ${Selling()}
        ${Farmers()}
        ${Customers()}
    `;

  return homePage;
};

export default Home;