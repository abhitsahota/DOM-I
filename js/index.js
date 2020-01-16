const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};



// Nav

let navtext = Object.values(siteContent.nav)
let links = document.querySelectorAll('a');
links.forEach((element, index) => element.textContent = navtext[index])

// Append and prepend new items to nav
let firstlink = document.createElement('a')
firstlink.textContent = "First Link"
let lastlink = document.createElement('a')
lastlink.textContent = "Last Link"

let parentElement = document.querySelector('nav')
parentElement.append(lastlink)
parentElement.prepend(firstlink)


// Change colour of nav

links.forEach( element => {
  // match headers with logo color
  element.style.color = "green"
});

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// CTA

let ctaheader = document.querySelector('.cta h1')
ctaheader.textContent = siteContent["cta"]["h1"]
let ctabutt = document.querySelector('.cta button')
ctabutt.textContent = siteContent["cta"]["button"]
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])


// Main Content
let mainH4 = document.querySelectorAll('.main-content h4')
mainH4[0].textContent = siteContent["main-content"]["features-h4"]
mainH4[1].textContent = siteContent["main-content"]["about-h4"]
mainH4[2].textContent = siteContent["main-content"]["services-h4"]
mainH4[3].textContent = siteContent["main-content"]["product-h4"]
mainH4[4].textContent = siteContent["main-content"]["vision-h4"]


let mainContent = document.querySelectorAll('.main-content p')
mainContent[0].textContent = siteContent["main-content"]["features-content"]
mainContent[1].textContent = siteContent["main-content"]["about-content"]
mainContent[2].textContent = siteContent["main-content"]["services-content"]
mainContent[3].textContent = siteContent["main-content"]["product-content"]
mainContent[4].textContent = siteContent["main-content"]["vision-content"]

let mainContentImg = document.querySelector('.main-content img')
mainContentImg.src = siteContent["main-content"]["middle-img-src"]

// Contact
let contactH4 = document.querySelector('.contact h4')
contactH4.textContent = siteContent["contact"]["contact-h4"]
let contactcontent = document.querySelectorAll('.contact p')
contactcontent[0].textContent = siteContent["contact"]["address"]
contactcontent[1].textContent = siteContent["contact"]["phone"]
contactcontent[2].textContent = siteContent["contact"]["email"]

// Footer

let footerp = document.querySelector('footer p')
footerp.textContent = siteContent["footer"]["copyright"]

// Stretch

ctabutt.addEventListener('click', event => {
  ctabutt.textContent = `Click count: ${event.detail}`;
});