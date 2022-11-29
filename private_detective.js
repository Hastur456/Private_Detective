const popupForm = document.querySelector('.popup_form');
const popupFormBody = document.querySelector('.popup_form_body');
const popupFormOpen = document.querySelector('.popup_form_open');
const popupFormClose = document.querySelector('.popup_form_close');

popupFormOpen.addEventListener('click', (event) => {
    popupForm.classList.add('open');
    popupFormBody.classList.add('open');
    event.preventDefault();
});

popupFormClose.addEventListener('click', (event) => {
    popupForm.classList.remove('open');
    popupFormBody.classList.remove('open');
    preventDefault();
});

document.addEventListener('click', (event) => {
    if (event.target === popupForm) {
        popupForm.classList.remove('open');
        popupFormBody.classList.remove('open');
    }
});