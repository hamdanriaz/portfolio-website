/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Show menu */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Hide menu */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   // When we click on each nav__link, we remove the show-menu class
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== HOME TYPED JS ===============*/
const typedHome = new Typed('#home_typed', {
      strings: ['Skill Builder', 'Data Analyst', 'Quick Learner'],
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
      cursorChar: '|'
})

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
   const header = document.getElementById('header')
   // Add the .scroll-header class if the bottom scroll of the viewport is greater than 50
   window.scrollY >= 50 ? header.classList.add('shadow-header') 
                      : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== CONTACT EMAIL JS ===============*/ 

const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

let messageTimeout;

const sendEmail = (e) => {
   e.preventDefault()

   emailjs.sendForm('service_d2kdwbd', 'template_8erso9o', e.target, 'IfErsSeis-wF1bP6u')
   .then(() => {
      contactMessage.textContent = 'Successful 👍'

      clearTimeout(messageTimeout);

      messageTimeout = setTimeout(() => {
         contactMessage.textContent = ''
      }, 5000)
      contactForm.reset()
   })
   .catch((error) => {
      console.error("EmailJS Error:", error);
      contactMessage.textContent = 'Unsuccessful (Service Error).. ❌'
   })
}

contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
   // Add the .scroll-header class if the bottom scroll of the viewport is greater than 350
	window.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						     : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

// Link the ID of each section (section id="home") to each link (a href="#home") 
// and activate the link with the class .active-link
const scrollActive = () => {
   // We get the position by scrolling down
   const scrollDown = window.scrollY

   sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

      if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
         sectionsClass.classList.add('active-link')
      } else{
         sectionsClass.classList.remove('active-link')
      }
   })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
   origin: 'top',
   distance: '25px',
   duration: 2000,
   reset: true,
})

sr.reveal('.home__content, .resume__content:nth-child(1), .footer__container')
sr.reveal('.home__data, .resume__content:nth-child(2)', {delay: 300, origin: 'bottom'})

sr.reveal('.about__content, .contact__content', {delay: 200, origin: 'bottom'})
sr.reveal('.about__image, .contact__form', {delay: 300})

sr.reveal('.projects__card', {interval: 100})

