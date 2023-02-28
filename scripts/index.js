const initialCards = [{  name: 'Архыз',  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'},{  name: 'Челябинская область',  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'},{  name: 'Иваново',  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'},{  name: 'Камчатка',  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'},{  name: 'Холмогорский район',  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'},{  name: 'Байкал',  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'}]; 

const containerElements = document.querySelector('.elements');
const templateElement = document.querySelector('#template_element');
const createElement = (name, src) => {
  const newElement = templateElement.content.cloneNode(true);
  const newElementName = newElement.querySelector('.element__name');
  const newElementImg = newElement.querySelector('.element__photo');
  const newElementHeart = newElement.querySelector('.element__heart');
  const newElementDelete = newElement.querySelector('.element__delete');
  newElementName.textContent = name;
  newElementImg.src = src;
  newElementImg.alt = 'фото ' + name;
  newElementHeart.addEventListener('click', () => {
    newElementHeart.classList.toggle('element__heart_active');
  });
  newElementDelete.addEventListener('click', () => {
    newElementDelete.closest('.element').remove();
  });
  newElementImg.addEventListener('click', () => {
    openPopupImage(newElementName.textContent, newElementImg.src);
  });
  return newElement;
}
const renderElement = (name, src) => {
  containerElements.prepend(createElement(name, src));
}
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
popupAdd.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(popupAdd);
  }
})
document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    closePopup(popupAdd);
    closePopup(popupEdit);
  }
})
popupEdit.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(popupEdit);
  }
})

function openPopup(popup) {
  popup.classList.add('popup_opened');
}
function closePopup(popup) {
  popup.classList.remove('popup_opened');
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

initialCards.forEach((item) => {
  renderElement(item.name, item.link);
});
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = formEditInputName.value;
  profileDescription.textContent = formEditInputDescription.value;
  closePopup(popupEdit);
}
function handleCardFormSubmit(evt) {
  evt.preventDefault();
  renderElement(formAddInputName.value, formAddInputLink.value);
  evt.target.reset();
  closePopup(popupAdd);
}


formEdit.addEventListener('submit', handleProfileFormSubmit);
formAdd.addEventListener('submit', handleCardFormSubmit);






