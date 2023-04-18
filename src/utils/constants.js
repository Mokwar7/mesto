const config = {
    formSelector: '.popup__form',
    saveButtonSelector: '.popup__save-button',
    inputSelector: '.popup__input',
    inputErrorClass: 'popup__input_error',
    spanErrorClass: 'popup__span-error',
    saveButtonInactiveClass: 'popup__save-button_inactive',
    templateSelector: '#template_element',
}

const popupImage = document.querySelector('.popup-image');
const popupImageName = popupImage.querySelector('.popup-image__name');
const popupImagePhoto = popupImage.querySelector('.popup-image__photo');

export {config, popupImage, popupImageName, popupImagePhoto}
