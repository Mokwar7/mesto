import './index.css'
import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWthForm.js'
import UserInfo from '../components/UserInfo.js'
import {config} from '../utils/constants.js';
import Api from '../components/Api'
import PopupWithConfirmation from '../components/PopupWithConfirmation'
import Section from '../components/Section'

const profileButton = document.querySelector('.profile__edit-button')
const addButton = document.querySelector('.profile__add-button')
const avatarButton = document.querySelector('.profile__avatar')
const formProfile = document.forms['profile']
const formPost = document.forms['post']
const formAvatar = document.forms['avatar']
let userID = ''
const formProfileValidation = new FormValidator(config, formProfile)
const formPostValidation = new FormValidator(config, formPost)
const formAvatarValidation = new FormValidator(config, formAvatar)
const userInfo = new UserInfo('.profile__name', '.profile__description', '.profile__avatar')
const avatar = document.querySelector('.profile__avatar')
formProfileValidation.enableValidation()
formPostValidation.enableValidation()
formAvatarValidation.enableValidation()

const api = new Api(
  {
    url: 'https://nomoreparties.co/v1/cohort-64/',
    headers: {
      authorization: '3e25cf54-975f-4847-af07-471e48c9313d',
      'Content-Type': 'application/json'
    }
  }
)

const popupDelete = new PopupWithConfirmation({ 
  handleFormSubmit(id, evt) {
    api.removeCard(id)
      .then(() => {
        evt.target.closest('.element').remove()
        popupDelete.close()
      })
      .catch((err) => {
        console.log(err);
      })
  } 
}, '.popup-delete')
popupDelete.setEventListeners()

const section = new Section(
  {
    renderer: (item) => {
      const newCard = new Card(item, config.templateSelector, { 
        handleCardClick(name, src) { 
          popupImg.open(src, name) 
        }, 
        handleDeleteClick: (id, evt) => { 
          popupDelete.open(id, evt) 
        }, 
      }, api)
      const card = newCard.generateCard(item, userID) 
      section.addItem(card)
    }
  },
  '.elements'
)

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([data, cards]) => {
    userID = data._id
    userInfo.setUserInfo(data)
    section.renderElements(cards)
  })
  .catch((err) => {
    console.log(err);
})

const popupImg = new PopupWithImage('.popup-image')
popupImg.setEventListeners()

const popupEditForm = new PopupWithForm(
  {
    handleFormSubmit: (data) => {
      popupEditForm.renderLoading(true)
      api.changeeProfileInfo(data)
      .then((data) => {
        popupEditForm.close()
        userInfo.setUserInfo(data)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupEditForm.renderLoading(false)
      })
    }
  },
  '.popup-profile'
)
popupEditForm.setEventListeners()
profileButton.addEventListener('click', () => {
  popupEditForm.open()
  popupEditForm.setInputValues(userInfo.getUserInfo())
  formProfileValidation.disableButton()
})

const popupPostForm = new PopupWithForm(
  {
    handleFormSubmit: (data) => {
      popupPostForm.renderLoading(true)
      api.addNewCard(data)
        .then((newData) => {
          section.renderElement(newData)
          popupPostForm.close()
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          popupPostForm.renderLoading(false)
        })
    }
  },
  '.popup-post'
)
popupPostForm.setEventListeners()
addButton.addEventListener('click', () => {
  popupPostForm.open()
  formPostValidation.disableButton()
})

const popupAvatarForm = new PopupWithForm(
  {
    handleFormSubmit: (data) => {
      popupAvatarForm.renderLoading(true)
      api.updateAvatar(data.links)
        .then((data) => {
          userInfo.setUserInfo(data)
          popupAvatarForm.close()
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          popupAvatarForm.renderLoading(false)
        })
    }
  },
  '.popup-avatar'
)
popupAvatarForm.setEventListeners()
avatarButton.addEventListener('click', () => {
  popupAvatarForm.open()
  formAvatarValidation.disableButton()
})