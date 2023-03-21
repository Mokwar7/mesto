const initialCards = [{  name: 'Архыз',  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'},{  name: 'Челябинская область',  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'},{  name: 'Иваново',  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'},{  name: 'Камчатка',  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'},{  name: 'Холмогорский район',  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'},{  name: 'Байкал',  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'}]; 

import {openPopupImage, popupImage, popupImageName, popupImagePhoto} from './index.js'

class Card {
    constructor(data) {
        this._nameData = data.name;
        this._imgData = data.link;
    }

    _getTemplate() {
        const newCard = document.querySelector('#template_element').content.querySelector('.element').cloneNode(true);
        return newCard;
    }

    _seteventListeners() {
        this._heart.addEventListener('click', () => {
            this._heart.classList.toggle('element__heart_active');
        })
        this._delete.addEventListener('click', () => {
            this._delete.closest('.element').remove();
        })
        this._img.addEventListener('click', () => {
            openPopupImage(this._name.textContent, this._img.src);
        })
    }

    generateCard() {
        this._card = this._getTemplate();
        this._name = this._card.querySelector('.element__name');
        this._img = this._card.querySelector('.element__photo');
        this._heart = this._card.querySelector('.element__heart');
        this._delete = this._card.querySelector('.element__delete');
        this._name.textContent = this._nameData;
        this._img.src = this._imgData;
        this._img.alt = 'Фото ' + this._nameData;
        this._seteventListeners();
        document.querySelector('.elements').prepend(this._card);
    }
}

initialCards.forEach((item) => {
    const render = new Card(item)
    render.generateCard();
})


export {Card}