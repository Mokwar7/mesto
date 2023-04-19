import './index.css'
import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWthForm.js'
import UserInfo from '../components/UserInfo.js'
import {config} from '../utils/constants.js';
import Api from '../components/Api'
import PopupWithQ from '../components/PopupWithQ'

const profileButton = document.querySelector('.profile__edit-button')
const addButton = document.querySelector('.profile__add-button')
const avatarButton = document.querySelector('.profile__avatar')
const popupProfile = document.querySelector('.popup-profile')
const formProfile = popupProfile.querySelector('.popup__form')
const popupPost = document.querySelector('.popup-post')
const formPost = popupPost.querySelector('.popup__form')
const popupAvatar = document.querySelector('.popup-avatar')
const formAvatar = popupAvatar.querySelector('.popup__form')
const formProfileValidation = new FormValidator(config, formProfile)
const formPostValidation = new FormValidator(config, formPost)
const formAvatarValidation = new FormValidator(config, formAvatar)
const userInfo = new UserInfo('.profile__name', '.profile__description')
const avatar = document.querySelector('.profile__avatar')
const elements = document.querySelector('.elements')
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
const renderLoading = (is, button) => {
  if (is) {
    button.textContent = 'Сохранение...'
  }
  else if (!is) {
    button.textContent = 'Сохранить'
  }
}
api.getUserInfo()
.then((data) => {
    userInfo.setUserInfo(data)
    avatar.style.backgroundImage = `url(${data.avatar})`
})
.catch((err) => {
  console.log(err);
})

const popupDelete = new PopupWithQ({ 
  handleFormSubmit(id, evt) {
    api.removeCard(id)
      .then(() => {
        evt.target.closest('.element').remove()
      })
      .catch((err) => {
        console.log(err);
      })
  } 
}, '.popup-delete')
popupDelete.setEventListeners()

const renderCard = (item) => { 
  const newCard = new Card(item, config.templateSelector, { 
    handleCardClick(name, src) { 
      popupImg.open(src, name) 
    }, 
    handleDeleteClick: (id, evt) => { 
      popupDelete.open(id, evt) 
    }, 
  }, api) 
  if (item.owner.name != 'Mokwar') { 
    const card = newCard.generateCard() 
    card.querySelector('.element__delete').remove() 
    newCard.render(elements) 
  } 
  else { 
    newCard.generateCard() 
    newCard.render(elements) 
  } 
}

api.getInitialCards()
.then(data => {
    data.forEach(item => {
      renderCard(item)
    })
    
})
.catch((err) => {
  console.log(err);
})


const popupImg = new PopupWithImage('.popup-image')
popupImg.setEventListeners()

const popupEditForm = new PopupWithForm(
  {
    handleFormSubmit: (data, button) => {
      renderLoading(true, button)
      api.changeeProfileInfo(data)
      userInfo.setUserInfo(data)
      renderLoading(false, button)
    }
  },
  '.popup-profile'
)
popupEditForm.setEventListeners()
profileButton.addEventListener('click', () => {
  popupEditForm.open()
  formProfileValidation.resetButton()
})

const popupPostForm = new PopupWithForm(
  {
    handleFormSubmit: (data, button) => {
      renderLoading(true, button)
      api.addNewCard(data)
        .then((newData) => {
          renderCard(newData)
        })
        .catch((err) => {
          console.log(err);
        })
      renderLoading(false, button)
    }
  },
  '.popup-post'
)
popupPostForm.setEventListeners()
addButton.addEventListener('click', () => {
  popupPostForm.open()
  formPostValidation.resetButton()
})

const popupAvatarForm = new PopupWithForm(
  {
    handleFormSubmit: (data, button) => {
      renderLoading(true, button)
      api.updateAvatar(data.links)
        .then((data) => {
          avatar.style.backgroundImage = `url(${data.avatar})`
          renderLoading(false, button)
        })
        .catch((err) => {
          console.log(err);
        })
    }
  },
  '.popup-avatar'
)
popupAvatarForm.setEventListeners()
avatarButton.addEventListener('click', () => {
  popupAvatarForm.open()
  formPostValidation.resetButton()
})