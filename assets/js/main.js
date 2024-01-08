/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
navToggle.addEventListener('click', () =>{
   navMenu.classList.add('show-menu')
})

/* Menu hidden */
navClose.addEventListener('click', () =>{
   navMenu.classList.remove('show-menu')
})

/*=============== SEARCH ===============*/
const search = document.getElementById('search'),
      searchBtn = document.getElementById('search-btn'),
      searchClose = document.getElementById('search-close')

/* Search show */
searchBtn.addEventListener('click', () =>{
   search.classList.add('show-search')
})

/* Search hidden */
searchClose.addEventListener('click', () =>{
   search.classList.remove('show-search')
})

/*=============== LOGIN ===============*/
const login = document.getElementById('login'),
      loginBtn = document.getElementById('login-btn'),
      loginClose = document.getElementById('login-close')

/* Login show */
loginBtn.addEventListener('click', () =>{
   login.classList.add('show-login')
})

/* Login hidden */
loginClose.addEventListener('click', () =>{
   login.classList.remove('show-login')
})



// TO NOT COPY BY RIGHT CLICK
document.addEventListener('contextmenu', function(e) {
   e.preventDefault();
});
   
document.addEventListener('selectstart', function(e) {
   e.preventDefault();
});
// TO NOT COPY BY RIGHT CLICK



//TO IFRAME
document.addEventListener('DOMContentLoaded', function() {
   // Find items with main-content ID
   var mainContent = document.getElementById('main-content');

   // Show project8 url by adding an iframe in main
   var iframe = document.createElement('iframe');
   iframe.src = 'http://ADD-TO-URL'; //ADD TO URL OR PROJECT FILE
   iframe.style.width = '100%';
   iframe.style.height = '100vh';

   // Adding an iframe to main
   mainContent.appendChild(iframe);
});


