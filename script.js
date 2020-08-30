var btn = document.querySelector(".menu-icon");
var MenuItems = document.querySelector("#MenuItems");
var ProductImg = document.querySelector("#product-img");
var SmallImg = document.getElementsByClassName("small-img");
var LoginForm = document.querySelector("#LoginForm");
var RegForm = document.querySelector("#RegForm");
var indicator = document.querySelector("#indicator");


MenuItems.style.maxHeight= "0px"
btn.addEventListener("click",t);
function t() {
    if(MenuItems.style.maxHeight == "0px"){
        MenuItems.style.maxHeight= "200px";
    }
    else{
        MenuItems.style.maxHeight= "0px";
    }
}

for (let index = 0; index < 4; index++) {
    SmallImg[index].addEventListener("click",function toggle() {
        ProductImg.src = SmallImg[index].src;
    });   
}


function register() {
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    indicator.style.transform = "translateX(100px)";
}
function login() {
    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
    indicator.style.transform = "translateX(0px)";
}