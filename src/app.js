import Header from "./components/header/index.js";
import Home from './pages/home.js';

const root = () => {
  const rootDiv = document.createElement('div');
  rootDiv.setAttribute('id', 'root');
  rootDiv.append(Header());

  rootDiv.append(Home());

  document.body.append(rootDiv);
  const headerDrop = () => {
      const categoriesBtn = document.querySelector('.header__description')
      const categoriesDown = document.getElementById('categories__drop')
      categoriesBtn.addEventListener('click', () => {
          categoriesDown.classList.toggle('is-down')
          categoriesBtn.classList.toggle('is-active')
      });
  }
  headerDrop();
  const add = () => {
    const addList = document.querySelectorAll('.header__list');
    const li = document.querySelectorAll('.header__items');
    addList.forEach((item) =>
        item.addEventListener('click', () => {
            item.classList.toggle('is-active')
    }))
  }
  add();
  const headerBottom = () => {
    const ul = document.querySelectorAll('.dropdown__list');
    const h3 = document.querySelectorAll('.dropdown__title');

    h3.forEach((item, index) => {
      item.addEventListener('click', (event) => {
        event.target.classList.toggle('is-active');
        ul.forEach((e, i) => {
          if (i != index) e.classList.remove('is-active');
        });
        ul[index].classList.toggle('is-active');
      });
    });
  };
  headerBottom();
  const headerCounter =() => {
    const addBtn = document.querySelectorAll('.btn__green');
    const basketCount = document.querySelector('.basket__counter');
    let counter = 0;
    addBtn.forEach((button) => {
        button.addEventListener('click', function () {
        counter += 1;
        basketCount.innerHTML= `${counter}`;
        });
    });
   }
  headerCounter()
  return rootDiv;
};
export default root();