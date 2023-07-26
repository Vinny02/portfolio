document.getElementById("menutoggle").addEventListener("click", toggleMenu);


const sidebar = document.getElementById("sidebar");
const ulElement = document.querySelector('#sidebar ul');
const liElements = ulElement.querySelectorAll('li');

let curId = 'Home';


liElements.forEach(element => {

  element.addEventListener('click', somefunctionality)
})


function somefunctionality(event) {

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


