const DropDowns = (title) => {
    const div = document.createElement('div');
    const ulTitles = [
      'Bakery',
      'Fruit and vegetables',
      'Meat and fish',
      'Drinks',
      'Kitchen',
      'Special nutrition',
      'Baby',
      'Pharmacy'
    ];
    const newArray = ulTitles.map((item) => {
      const h3 = document.createElement('h3');
      h3.className = 'dropdown__title arrow';
      h3.innerHTML = `${item}
              <ul class="dropdown__list">
                  <li>${item}</li>
                  <li>${item}</li>
                  <li>${item}</li>
                  <li>${item}</li>
                  <li>${item}</li>
              </ul>
          `;
      return h3;
    });
    div.innerHTML = `${newArray.map((item) => item.outerHTML).join('')}
      `;
  
    div.className = 'dropdown__wrapper';
    return div.outerHTML;
  };
  
  export default DropDowns();