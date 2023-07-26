document.getElementById("menutoggle").addEventListener("click", toggleMenu);
document.getElementById("sidebar").addEventListener("click", toggleMenu);


function toggleMenu() {
let sidebar = document.querySelector('#sidebar');
// let hamburger = document.querySelector('#toggle');

let navicon = document.querySelector('#menutoggle');
  
  if(sidebar.classList.contains('-mr-48')) {
    sidebar.classList.remove('-mr-48');
  }
  else {
    sidebar.classList.add('-mr-48');
  }
}