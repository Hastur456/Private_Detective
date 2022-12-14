// popup
const popupOpenButtons = document.querySelectorAll('.popup_form_open');
const body = document.querySelector('body');

if (popupOpenButtons.length > 0) {
    for (let i = 0; i < popupOpenButtons.length; i++) {
        const popupOpenButton = popupOpenButtons[i];
        popupOpenButton.addEventListener('click', (event) => {
            const popupName = popupOpenButton.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            addPadding();
            popupOpen(curentPopup);
            bodyLock();
            event.preventDefault();
        });
    };
};

function popupOpen(curentPopup) {
    curentPopup.classList.add('open');
};

const popupCloseButtons = document.querySelectorAll('.popup_form_close');

if (popupCloseButtons.length > 0) {
    for (let i = 0; i < popupCloseButtons.length; i++) {
        const popupCloseButton = popupCloseButtons[i];
        popupCloseButton.addEventListener('click', (event) => {
            popupClose(popupCloseButton.closest('.popup_form'));
            bodyUnLock();
            deletePadding();
            event.preventDefault();
        }); 
    };
};

const popupForm = document.querySelector('#popup_form')
popupForm.addEventListener('click', (event) => {
    if (!event.target.closest('.popup_form_body')) {
        popupClose(event.target.closest('.popup_form'));
        bodyUnLock();
        deletePadding();
        event.preventDefault();
    };
});

function popupClose(curentPopup) { 
    curentPopup.classList.remove('open');
};

function bodyUnLock() {
    body.style.overflow = 'visible';
};

function bodyLock() {
    body.style.overflow = 'hidden';
};

const wrapper = document.querySelector('.wrapper');
const wrapperItems = wrapper.children;

const orderService = wrapperItems[0];
const orderServiceContent = document.querySelector('.order_service_content');

function addPadding() {
    const scrollWidth =  window.innerWidth - document.documentElement.clientWidth + 'px';

    for (let i = 0; i < wrapperItems.length; i++) {
        const wrapperItem = wrapperItems[i];
        wrapperItem.style.paddingRight = scrollWidth;
    };
};

function deletePadding() {
    for (let i = 0; i < wrapperItems.length; i++) {
        const wrapperItem = wrapperItems[i];
        wrapperItem.style.paddingRight = '0';
    };
};

// popup

// swiper
