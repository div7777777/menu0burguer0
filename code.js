
const btnOpen = document.querySelector(".open");
const btnClose = document.querySelector(".close");
const myItems = document.querySelector(".items");
const myBody = document.querySelector(".body");

btnOpen.addEventListener("click", ()=>{
btnOpen.style.zIndex = "-1";
btnOpen.style.display = "none";
btnClose.style.display = "flex";
btnClose.style.zIndex = "1";
myBody.style.background = "rgba(20,20,20,0.7)";
myItems.style.transform = "translateX(350px)";
myItems.style.boxShadow = "1px 1px 1em rgba(20,20,20,0.4)";
myItems.style.transition = "0.9s";});
btnClose.addEventListener("click", ()=>{
    btnOpen.style.zIndex = "1";
    btnClose.style.zIndex = "-1";
    btnOpen.style.display = "flex";
    myBody.style.background = "white";
    btnClose.style.display = "none";
    myItems.style.transform = "translateX(-350px)";
    myItems.style.transition = "0.9s";});

