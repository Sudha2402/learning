const container = document.getElementById('container');//whole body content div just below body used only once

const registerBtn = document.getElementById('register');
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
}); //when registerBtn is clicked then class active will be added in container and active class code will be seen 


const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});