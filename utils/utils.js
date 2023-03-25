import {popupImage, popupImageName, popupImagePhoto} from './constants.js';

const openPopupImage = (name, src) => {
    popupImageName.textContent = name;
    popupImagePhoto.src = src;
    popupImagePhoto.alt = 'фото ' + name;
    openPopup(popupImage);
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupByEsc);
    popup.addEventListener('click', closePopupByClick)
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupByEsc)
    popup.removeEventListener('click', closePopupByClick)
}

const closePopupByEsc = evt => {
    if (evt.key === 'Escape') {
      const currentPopup = document.querySelector('.popup_opened');
      closePopup(currentPopup)
    }
}
  
const closePopupByClick = evt => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(evt.target);
    }
}

export {openPopupImage, openPopup, closePopup}
