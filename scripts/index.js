import {Card} from './card.js';
import {initialCards} from './datas.js'
import {FormValidator} from './formValidator.js'
import {config} from '../utils/constants.js';

const popupImage = document.querySelector('.popup-image');
const popupImageName = popupImage.querySelector('.popup-image__name');
const popupImagePhoto = popupImage.querySelector('.popup-image__photo');
const popupImageClose = popupImage.querySelector('.popup-image__close');
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


popupImageClose.addEventListener('click', () => {
  closePopup(popupImage);
});

const openPopupImage = (name, src) => {
  popupImageName.textContent = name;
  popupImagePhoto.src = src;
  popupImagePhoto.alt = 'фото ' + name;
  openPopup(popupImage);
}

initialCards.forEach((item) => {
  const render = new Card(item, config.templateSelector)
  render.generateCard();
})

const formList = Array.from(document.querySelectorAll(config.formSelector))
formList.forEach((form) => {
    const formValidator = new FormValidator(config, form);
    formValidator.enableValidation();
})

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
  popupAdd.querySelector('.popup__form').reset();
  const errors = popupAdd.querySelectorAll('.popup__span-error');
  const inputErrors = popupAdd.querySelectorAll('.popup__input_error');
  errors.forEach((error) => {
    error.textContent = ''
  })
  inputErrors.forEach((inputError) => {
    inputError.classList.remove('popup__input_error');
  })
  openPopup(popupAdd);
});

editButton.addEventListener('click', (evt) => {
  formEditInputName.value = profileName.textContent.trim();
  formEditInputDescription.value = profileDescription.textContent.trim();
  popupEdit.querySelector('.popup__form').reset();
  const errors = popupEdit.querySelectorAll('.popup__span-error');
  const inputErrors = popupEdit.querySelectorAll('.popup__input_error');
  errors.forEach((error) => {
    error.textContent = ''
  })
  inputErrors.forEach((inputError) => {
    inputError.classList.remove('popup__input_error');
  })
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

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const newData = {name: formAddInputName.value, link: formAddInputLink.value};
  const newCard = new Card(newData, config.templateSelector);
  newCard.generateCard();
  evt.target.reset();
  closePopup(popupAdd);
}

formEdit.addEventListener('submit', handleProfileFormSubmit);
formAdd.addEventListener('submit', handleCardFormSubmit);


export {openPopupImage}
