import {openPopupImage} from '../utils/utils.js'

class Card {
    constructor(data, templateSelector) {
        this._nameData = data.name;
        this._imgData = data.link;
        this._templateSelector = templateSelector;
    }

    _getTemplate() {
        const newCard = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);
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
        
        return this._card;
    }

    render(selector) {
        selector.prepend(this._card);
    }
}

export {Card}
