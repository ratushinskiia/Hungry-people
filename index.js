// Phone mask
const elementsPhone = document.querySelectorAll('.input-phone');
const maskOptions = {
    mask: '{+7}(000)000-00-00'
};
elementsPhone.forEach(element => {
    IMask(element, maskOptions);
});

// Date mask
const choices = new Choices('.select', {
    searchEnabled: false
});
flatpickr("#date", {
    dateFormat: 'm/d',
    disableMobile: "true"
});
flatpickr("#time", {
    enableTime: true,
    noCalendar: true,
    dateFormat: 'H:i',
    time_24hr: true,
    disableMobile: "true"
});


// Slider
const swiper = new Swiper('.swiper', {
    sliderPerView : 1,
    autoHeight: true,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
})

// Tabs
const onTabClick = function(idContainer, idElement) {
    let dataAttribute = `[data-${idContainer}`;
    for (let item of document.querySelectorAll(`${dataAttribute}-name`)) {
        item.classList.remove('active');
    }
    for (let item of document.querySelectorAll(`${dataAttribute}-tab`)) {
        item.classList.remove('active');
    }
    document.querySelector(`${dataAttribute}-name=${idElement}]`).classList.add('active');
    document.querySelector(`${dataAttribute}-tab=${idElement}]`).classList.add('active');
}
let tabsName = document.querySelectorAll('.tab-name');
tabsName.forEach((tab) => {
    tab.addEventListener('click', (event) => {
        onTabClick(event.target.parentElement.id, event.target.dataset.menuTabsName)
    })
})

// Gallery
const lightbox = GLightbox({
    selector: '.gallery-image',
    touchNavigation: true,
    loop: true
});

// Burger menu
const mobileMenuButton = document.querySelector('.header-navigation-menu');
const mobileMenuClose = document.querySelector('.header-navigation-close');
const mobileMenu = document.querySelector('.header-navigation');
mobileMenuButton.addEventListener('click', function(){
    mobileMenu.classList.add('active');
});
mobileMenuClose.addEventListener('click', function(){
    mobileMenu.classList.remove('active');
})