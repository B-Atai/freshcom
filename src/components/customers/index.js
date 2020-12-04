const Customers = () => {
    const tagCustomers = document.createElement('section');
    tagCustomers.className = "customers";
    tagCustomers.innerHTML = `
    <div class="container">
        <div class="row customers__top">
            <h3 class="customers__title">Section Headline</h3>
            <button class="btn__plain arrow__black"><a href="#">Button</a></button>
        </div>
    </div>
    <div class="slider row">
            <div class="customers__item col-3">
                <p class="customers__description">
                “This is an super space for your customers qoute. 
                Don’t worry it works smooth as pie.
                You will get all what you need by writiing a text here“
                </p>
                <p class="customers__name">Name and Surname</p>
                <img src="./src/images/customer_1.png">
            </div>
            <div class="customers__item col-3">
                <p class="customers__description">
                “This is an super space for your customers qoute. 
                Don’t worry it works smooth as pie.
                You will get all what you need by writiing a text here“
                </p>
                <p class="customers__name">Name and Surname</p>
                <img src="./src/images/customer_2.png">
            </div>
            <div class="customers__item col-3">
                <p class="customers__description">
                “This is an super space for your customers qoute. 
                Don’t worry it works smooth as pie.
                You will get all what you need by writiing a text here“
                </p>
                <p class="customers__name">Name and Surname</p>
                <img src="./src/images/customer_1.png">
            </div>
            <div class="customers__item col-3">
                <p class="customers__description">
                “This is an super space for your customers qoute. 
                Don’t worry it works smooth as pie.
                You will get all what you need by writiing a text here“
                </p>
                <p class="customers__name">Name and Surname</p>
                <img src="./src/images/customer_2.png">
            </div>
        </div>
    `;
    document.body.append(tagCustomers);
    return tagCustomers;
}
Customers();