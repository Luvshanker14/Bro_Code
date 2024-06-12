const wrapper= document.querySelector('.wrapper');
const wrap=document.getElementById("welcome");
const registerLink=document.querySelector('.register-link');
const loginLink=document.querySelector('.login-link');
const btnpopup=document.querySelector('.btnLogin-popup');
const btnpopup2=document.getElementById('butUser');
const iconClose=document.querySelector('.icon-close');
registerLink.onclick = () => {
    wrapper.classList.add('active');
}
loginLink.onclick = () => {
    wrapper.classList.remove('active');
}
btnpopup.onclick = () => {
    wrapper.classList.add('active-popup');
    wrap.classList.add("none");
}
btnpopup2.onclick = () => {
    wrapper.classList.add('active-popup');
    wrap.classList.add("none");
}
iconClose.onclick = () => {
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active');
    wrap.classList.remove("none");
}