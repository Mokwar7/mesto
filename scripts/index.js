import {Card} from './card.js';
import {initialCards} from './datas.js'
import {FormValidator} from './formValidator.js'
import {config} from '../utils/constants.js';
import {openPopup, closePopup} from '../utils/utils.js';

const popupImage = document.querySelector('.popup-image');
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
const elements = document.querySelector('.elements');

popupImageClose.addEventListener('click', () => {
  closePopup(popupImage);
});



initialCards.forEach((item) => {
  const render = new Card(item, config.templateSelector)
  render.generateCard();
  render.render(elements);
})

//const formList = Array.from(document.querySelectorAll(config.formSelector))
//formList.forEach((form) => {
//    const formValidator = new FormValidator(config, form);
//    formValidator.enableValidation();
//})

const formAddValidator = new FormValidator(config, formAdd)
formAddValidator.enableValidation();
const formEditValidator = new FormValidator(config, formEdit);
formEditValidator.enableValidation();

const resetPopupAdd = () => {
  popupAdd.querySelector('.popup__form').reset();
} 

addButton.addEventListener('click', () => {
  resetPopupAdd();
  formAddValidator.removeValidationErrors();
  openPopup(popupAdd);
});

const resetPopupEdit = () => {
  popupEdit.querySelector('.popup__form').reset();
} 

editButton.addEventListener('click', (evt) => {
  formEditInputName.value = profileName.textContent.trim();
  formEditInputDescription.value = profileDescription.textContent.trim();
  resetPopupEdit();
  formEditValidator.removeValidationErrors();
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
