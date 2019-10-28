const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png',
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018',
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

const headerNav = document.querySelectorAll('a');

headerNav[0].textContent = siteContent['nav']['nav-item-1'];
headerNav[1].textContent = siteContent['nav']['nav-item-2'];
headerNav[2].textContent = siteContent['nav']['nav-item-3'];
headerNav[3].textContent = siteContent['nav']['nav-item-4'];
headerNav[4].textContent = siteContent['nav']['nav-item-5'];
headerNav[5].textContent = siteContent['nav']['nav-item-6'];

const logoPicture = document.getElementById('logo-img');
logoPicture.src = siteContent['nav']['img-src'];

const ctaHeader = document.querySelector('cta-text, h1');
const ctaImg = document.getElementById('cta-img');
const ctaBtn = document.querySelector('cta-text, button');
ctaHeader.textContent = siteContent['cta']['h1'];
ctaImg.src = siteContent['cta']['img-src'];
ctaBtn.textContent = siteContent['cta']['button'];

const mainHeader = document.querySelectorAll('h4');
const mainP = document.querySelectorAll('top-content, p');
const midImg = document.getElementById('middle-img');
const bottP = document.querySelectorAll('bottom-content, p');
mainHeader[0].textContent = siteContent['main-content']['features-h4'];
mainP[0].textContent = siteContent['main-content']['features-content'];
mainHeader[1].textContent = siteContent['main-content']['about-h4'];
mainP[1].textContent = siteContent['main-content']['about-content'];
midImg.src = 'img/mid-page-accent.jpg';
mainHeader[2].textContent = siteContent['main-content']['services-h4'];
bottP[2].textContent = siteContent['main-content']['services-content'];
mainHeader[3].textContent = siteContent['main-content']['product-h4'];
bottP[3].textContent = siteContent['main-content']['product-content'];
mainHeader[4].textContent = siteContent['main-content']['vision-h4'];
bottP[4].textContent = siteContent['main-content']['vision-content'];

const contactInfo = document.querySelectorAll('.contact p');
mainHeader[5].textContent = siteContent['contact']['contact-h4'];
contactInfo[0].textContent = siteContent['contact']['address'];
contactInfo[1].textContent = siteContent['contact']['phone'];
contactInfo[2].textContent = siteContent['contact']['email'];

const footerP = document.querySelector('footer');
footerP.textContent = siteContent['footer']['copyright'];

const partnerForm = document.createElement('a');
const review = document.createElement('a');

partnerForm.textContent = 'Partners';
review.textContent = 'Reviews';

const newNav = document.querySelector('nav');

newNav.append(partnerForm);
newNav.prepend(review);

document.querySelectorAll('nav a').forEach((link) => {
  link.style.color = 'green';
});
