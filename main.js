//grabing contents
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

//add event listenners

btn.addEventListener("click", () =>{
menu.classList.toggle("hidden");

});
