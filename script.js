const hambur = document.getElementsByClassName("hamburger-icon");
const navMenu = document.querySelector(".nav_menu");
console.log(hambur);
console.log(navMenu);

hambur.addEventListener('click', (e)=>{
  console.log(e);
  hambur.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// document.querySelectorAll("nav ul li").forEach()

document.getElementsByTagName("nav").addEventListener('click', (e)=>{
  e.stopPropogation();
  if(e.target == li){
    hambur.classList.remove("active");
    navMenu.classList.remove("active");
  }
})
