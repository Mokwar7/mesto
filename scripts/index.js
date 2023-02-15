const initialCards = [{  name: 'Архыз',  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'},{  name: 'Челябинская область',  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'},{  name: 'Иваново',  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'},{  name: 'Камчатка',  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'},{  name: 'Холмогорский район',  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'},{  name: 'Байкал',  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'}]; 
const containerElements = document.querySelector('.elements');
const templateElement = document.querySelector('#template_element');
const createElement = (name, src) => {
  const newElement = templateElement.content.cloneNode(true);
  const newElementName = newElement.querySelector('.element__name');
  const newElementImg = newElement.querySelector('.element__photo');
  newElementName.textContent = name;
  newElementImg.style.backgroundImage = 'url(' + src + ')';
  return newElement;
}
const renderElement = (name, src) => {
  containerElements.prepend(createElement(name, src));
}
const body = document.querySelector('body');
const popupImage = document.querySelector('#template_popup-image');
const openPopupImage = (name, src) => {
  const newPopupImage = popupImage.content.cloneNode(true);
  const newPopupImageName = newPopupImage.querySelector('.popup-image__name');
  const newPopupImagePhoto = newPopupImage.querySelector('.popup-image__photo');
  const newPopupImageClose = newPopupImage.querySelector('.popup-image__close');
  newPopupImageClose.addEventListener('click', (evt) => {
    evt.target.closest('.popup-image').classList.remove('popup-image_open');
    const closePopupImage = () => {
      evt.target.closest('.popup-image').remove();
    }
    setTimeout(closePopupImage, 300);
  });
  newPopupImageName.textContent = name;
  newPopupImagePhoto.src = src;
  return newPopupImage;
}
const renderOpenPopupImage = (name, src) => {
  body.append(openPopupImage(name, src));
}
let addButton = document.querySelector('.profile__add-button');
let editButton = document.querySelector('.profile__edit-button');
let popupEdit = document.querySelectorAll('.popup')[0];
let popupAdd = document.querySelectorAll('.popup')[1];
let popupEditClose = document.querySelectorAll('.popup__close-button')[0];
let popupAddClose = document.querySelectorAll('.popup__close-button')[1];
let formEdit = document.querySelectorAll('.popup__form')[0];
let formAdd = document.querySelectorAll('.popup__form')[1];
let formEditInputName = document.querySelectorAll('.popup__input_type_name')[0];
let formEditInputDescription = document.querySelectorAll('.popup__input_type_description')[0];
let formAddInputName = document.querySelectorAll('.popup__input_type_name')[1];
let formAddInputLink = document.querySelectorAll('.popup__input_type_description')[1];
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');



addButton.addEventListener('click', openPopupAdd);
editButton.addEventListener('click', openPopupEdit);
popupAddClose.addEventListener('click', closePopupAdd);
popupEditClose.addEventListener('click', closePopupEdit);
formEdit.addEventListener('submit', formEditSubmit);



function openPopupAdd() {
  popupAdd.classList.add('popup_opened');
}
function openPopupEdit() {
  formEditInputName.value = profileName.textContent.trim();
  formEditInputDescription.value = profileDescription.textContent.trim();
  popupEdit.classList.add('popup_opened');
}
function closePopupAdd() {
  popupAdd.classList.remove('popup_opened');
}
function closePopupEdit() {
  popupEdit.classList.remove('popup_opened');
}
initialCards.forEach((item) => {
  renderElement(item.name, item.link);
});

function formEditSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = formEditInputName.value;
  profileDescription.textContent = formEditInputDescription.value;
  closePopupEdit();
}
formAdd.addEventListener('submit', (evt) => {
  evt.preventDefault();
  renderElement(formAddInputName.value, formAddInputLink.value);
  formAddInputName.value = '';
  formAddInputLink.value = '';
  closePopupAdd();
});
containerElements.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('element__heart')) {
    evt.target.classList.toggle('element__heart_active');
  }
  else if (evt.target.classList.contains('element__delete')) {
    evt.target.closest('.element').remove();
  }
  else if (evt.target.classList.contains('element__photo')) { 
    const currentElementName = evt.target.closest('.element').querySelector('.element__name');
    renderOpenPopupImage(currentElementName.textContent, evt.target.style.backgroundImage.slice(5,-2));
    document.querySelector('.popup-image').classList.add('popup-image_open');
  }
});