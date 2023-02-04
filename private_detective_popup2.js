// popup
const body = document.querySelector('body');
const popupForm = document.querySelector('#popup_form')

const popupOpenButtons = document.querySelectorAll('.popup_form_open');

let timeout = 800;

if (popupOpenButtons.length > 0) {
    for (let i = 0; i < popupOpenButtons.length; i++) {
        const popupOpenButton = popupOpenButtons[i];
        popupOpenButton.addEventListener('click', (event) => {
            popupOpen();
            addPadding();
            bodyLock();
            event.preventDefault();
        })
    }
}

function popupOpen() {
    popupForm.classList.add('open');
}

const popupCloseButtons = document.querySelectorAll('.popup_form_close');

if (popupCloseButtons.length > 0) {
    for (let i = 0; i < popupCloseButtons.length; i++) {
        const popupCloseButton = popupCloseButtons[i];
        popupCloseButton.addEventListener('click', (event) => {
            popupClose();
            setTimeout(deletePadding, timeout);
            setTimeout(bodyUnLock, timeout);
            event.preventDefault();
        })
    }
}

popupForm.addEventListener('click', (event) => {
    if (!event.target.closest('.popup_form_body')) {
        popupClose();
        setTimeout(bodyUnLock, timeout);
        setTimeout(deletePadding, timeout);
        event.preventDefault();
    }
})


function popupClose() { 
    popupForm.classList.remove('open');
};

function bodyUnLock() {
    body.style.overflow = 'visible';
};

function bodyLock() {
    body.style.overflow = 'hidden';
};

const wrapper = document.querySelector('.wrapper');
const wrapperItems = wrapper.querySelectorAll('section');

function addPadding() {
    const scrollWidth =  window.innerWidth - document.documentElement.clientWidth + 'px';

    for (let i = 0; i < wrapperItems.length; i++) {
        let wrapperItem = wrapperItems[i];
        wrapperItem.style.paddingRight = scrollWidth;
    }
}

function deletePadding() {
    for (let i = 0; i < wrapperItems.length; i++) {
        const wrapperItem = wrapperItems[i];
        wrapperItem.style.paddingRight = '0';
    }
}
// popup

// swiper

new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        checkable: true,
        dynamicBullets: true,
    },
    loop: true,
})
