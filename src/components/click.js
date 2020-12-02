const categoriesBtn = document.getElementById('categories')
const categoriesDown = document.getElementById('categories__drop')
function categoriesDrop() {
  categoriesBtn.addEventListener('click', function() {
    categoriesDown.classList.toggle('is-down')
  });
}
categoriesDrop()


function count() {
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
count();