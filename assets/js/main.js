/*=============== CHANGE BACKGROUND HEADER ===============*/
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
});

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = ()  =>{
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                    : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const section = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    section.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true  // Anomation repeat
})

sr.reveal(`.home__data, .products__data, .steps__content,
            .footer__container`)
sr.reveal(`.home__img`, {origin: 'bottom'})
sr.reveal(`.products__card`, {interval: 100})
sr.reveal(`.about__img, .testimonial__img`, {origin: 'right'})
sr.reveal(`.about__data, .testimonial__data`, {origin: 'left'})

// Add animations for new sections
sr.reveal(`.trending__card`, {
    interval: 100,
    origin: 'bottom',
    distance: '60px',
    duration: 2500,
    delay: 400
});

sr.reveal(`.newsletter__data`, {
    origin: 'left',
    distance: '60px',
    duration: 2500,
    delay: 400
});

sr.reveal(`.contact__data`, {
    origin: 'left',
    distance: '60px',
    duration: 2500,
    delay: 400
});

sr.reveal(`.contact__map`, {
    origin: 'right',
    distance: '60px',
    duration: 2500,
    delay: 400
});

// Newsletter form handling
const newsletterForm = document.querySelector('.newsletter__form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('.newsletter__input').value;
        if (email) {
            // Here you would typically send the email to your backend
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.reset();
        }
    });
}

// Active link
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active-link'));
        link.classList.add('active-link');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Initialize coffee shop data
document.addEventListener('DOMContentLoaded', () => {
    // Update contact information
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.href = `tel:${coffeeShopData.phone}`;
    });

    // Update location information
    const locationElements = document.querySelectorAll('.location-info');
    locationElements.forEach(element => {
        element.textContent = coffeeShopData.location;
    });
});
