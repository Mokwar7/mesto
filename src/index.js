import './index.css';
import Card from './Card.js'
import FormValidator from './FormValidator.js'
import PopupWithImage from './PopupWithImage.js'
import PopupWithForm from './PopupWthForm.js'
import Section from './Section.js'
import UserInfo from './UserInfo.js'
import {initialCards} from './datas.js'
import {config} from '../utils/constants.js';

const profileButton = document.querySelector('.profile__edit-button')
const addButton = document.querySelector('.profile__add-button')
const popupProfile = document.querySelector('.popup-profile')
const formProfile = popupProfile.querySelector('.popup__form')
const popupPost = document.querySelector('.popup-post')
const formPost = popupPost.querySelector('.popup__form')
const formProfileValidation = new FormValidator(config, formProfile)
const formPostValidation = new FormValidator(config, formPost)
const userInfo = new UserInfo('.profile__name', '.profile__description')


formProfileValidation.enableValidation()
formPostValidation.enableValidation()

const createCard = (item) => {
  const newCard = new Card(item, config.templateSelector, {
    handleCardClick: (name, src) => {
      const popupImg = new PopupWithImage('.popup-image', src, name)
      popupImg.open()
      popupImg.setEventListeners()
    }
  })
  return newCard.generateCard()
}

const cards = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      cards.addItem(createCard(item))
    }
  },
  '.elements')

cards.renderElements(initialCards)


const popupEditForm = new PopupWithForm(
  {
    handleFormSubmit: (data) => {
      userInfo.setUserInfo(data)
    }
  },
  '.popup-profile'
)
popupEditForm.setEventListeners()
profileButton.addEventListener('click', () => {
  popupEditForm.open()
})


const popupPostForm = new PopupWithForm(
  {
    handleFormSubmit: (data) => {
      const newData = {name: data.naming, link: data.link};
      const card = new Section(
        {
          items: newData,
          renderer: (item) => {
            card.addItem(createCard(item))
          }
        },
        '.elements')
      
      card.renderElement(newData)
    }
  },
  '.popup-post'
)
popupPostForm.setEventListeners()
addButton.addEventListener('click', () => {
  popupPostForm.open()
})
