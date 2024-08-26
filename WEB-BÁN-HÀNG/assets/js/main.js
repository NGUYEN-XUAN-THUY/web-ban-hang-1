const navPC = document.querySelector("#pc__body--list");
const navMobile = document.querySelector("#mobile__menu--list");
navMobile.innerHTML = navPC.innerHTML;

const link = document.querySelectorAll(".header__body--link");
link.forEach((item) => {
  item.addEventListener("click", ()=>{
    removeActive();
    item.classList.add("active");
  })
});

function removeActive() {
  link.forEach((item) => {
    item.classList.remove("active");
  });
}
