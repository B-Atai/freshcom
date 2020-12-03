const Contact = () =>{
    const contactList = document.createElement('ul');
    contactList.className = 'header__contact'
    contactList.innerHTML = `
    <li><a href="#">Chat with us</a></li>
    <li><a href="#">+420 336 775 664</a></li>
    <li><a href="#">info@freshnesecom.com</a></li>
    `;
    return contactList;
}
export default Contact;