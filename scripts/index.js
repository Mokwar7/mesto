const popupImage = document.querySelector('.popup-image');
const popupImageName = popupImage.querySelector('.popup-image__name');
const popupImagePhoto = popupImage.querySelector('.popup-image__photo');
const popupImageClose = popupImage.querySelector('.popup-image__close');
popupImageClose.addEventListener('click', () => {
  closePopup(popupImage);
});
const openPopupImage = (name, src) => {
  popupImageName.textContent = name;
  popupImagePhoto.src = src;
  popupImagePhoto.alt = 'фото ' + name;
  openPopup(popupImage);

}

export {openPopupImage, popupImage, popupImageName, popupImagePhoto}
const addButton = document.querySelector('.profile__add-button');
const editButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup-profile');
const popupAdd = document.querySelector('.popup-post');
const popupEditClose = popupEdit.querySelector('.popup__close-button');
const popupAddClose = popupAdd.querySelector('.popup__close-button');
const formEdit = popupEdit.querySelector('.popup__form');
const formAdd = popupAdd.querySelector('.popup__form');
const formEditInputName = popupEdit.querySelector('.popup__input_type_name');
const formEditInputDescription = popupEdit.querySelector('.popup__input_type_description');
const formAddInputName = popupAdd.querySelector('.popup__input_type_name');
const formAddInputLink = popupAdd.querySelector('.popup__input_type_description');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

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
addButton.addEventListener('click', () => {
  openPopup(popupAdd);
});
editButton.addEventListener('click', () => {
  formEditInputName.value = profileName.textContent.trim();
  formEditInputDescription.value = profileDescription.textContent.trim();
  openPopup(popupEdit);
  
});
popupAddClose.addEventListener('click', () => {
  closePopup(popupAdd);
});
popupEditClose.addEventListener('click', () => {
  closePopup(popupEdit);
});


function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = formEditInputName.value;
  profileDescription.textContent = formEditInputDescription.value;
  closePopup(popupEdit);
}


import {Card} from './card.js';

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const newData = {name: formAddInputName.value, link: formAddInputLink.value};
  const newCard = new Card(newData);
  newCard.generateCard();
  evt.target.reset();
  closePopup(popupAdd);
}


formEdit.addEventListener('submit', handleProfileFormSubmit);
formAdd.addEventListener('submit', handleCardFormSubmit);
