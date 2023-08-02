

const sidebar = document.getElementById("sidebar");
const sidebarulElement = document.querySelector('#sidebar ul');
const sidebarliElements = sidebarulElement.querySelectorAll('li');


const navbarulElement = document.querySelector('nav ul');
const navbarliElements = navbarulElement.querySelectorAll('li');


let curId = 'Home';



sidebarliElements.forEach(element => {
  
  element.addEventListener('click', navigate_tabs_sidebar)
})

navbarliElements.forEach(element => {
  element.addEventListener('click', navigate_tabs)
})

document.getElementById("menutoggle").addEventListener("click", toggleMenu);

function  navigate_tabs(event) {

  const idName = event.target.textContent;
  const prevScreen = document.getElementById(curId);
  const newScreen = document.getElementById(idName);

  prevScreen.classList.add('hidden');
  prevScreen.classList.remove('fade-in')
  
  newScreen.classList.remove('hidden');
  newScreen.classList.add('fade-in');
  curId = idName;
  
}

function navigate_tabs_sidebar(event) {
  
  const idName = event.target.textContent;
  const prevScreen = document.getElementById(curId);
  const newScreen = document.getElementById(idName);
  
  prevScreen.classList.add('hidden');
  prevScreen.classList.remove('fade-in')
  
  newScreen.classList.remove('hidden');
  newScreen.classList.add('fade-in');
  curId = idName;
  
  toggleMenu();
}


function toggleMenu(event) {
  
  openCloseSidebar()
}

function openCloseSidebar() {
  let sidebar = document.querySelector('#sidebar');
  if (sidebar.classList.contains('-ml-48')) {
    sidebar.classList.remove('-ml-48');
  }
  else {
    sidebar.classList.add('-ml-48');
  }
}

