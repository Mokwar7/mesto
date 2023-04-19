export default class Card {
    constructor(data, templateSelector, handle, api) {
        this._nameData = data.name;
        this._imgData = data.link;
        this._id = data._id
        this._likesCount = data.likes
        this._templateSelector = templateSelector;
        this._handleCardClick = handle.handleCardClick;
        this._handleDeleteClick = handle.handleDeleteClick
        this.__handleHeartClick = handle.handleHeartClick
        this._api = api
    }

    _getTemplate() {
        const newCard = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);
        return newCard;
    }

    _seteventListeners() {
        this._heart.addEventListener('click', () => {
            if (this._heart.classList.contains('element__heart_active')) {
                this._heart.classList.remove('element__heart_active')
                this._api.removeLike(this._id)
                    .then(data => {
                        this._likes.textContent = data.likes.length
                    })
            }
            else {
                this._heart.classList.add('element__heart_active')
                this._api.addLike(this._id)
                    .then(data => {
                        this._likes.textContent = data.likes.length
                    })
            }
        })
        this._delete.addEventListener('click', (evt) => {
            this._handleDeleteClick(this._id, evt)
        })
        this._img.addEventListener('click', () => {
            this._handleCardClick(this._nameData, this._imgData)
        })
    }

    generateCard() {
        this._card = this._getTemplate();
        this._name = this._card.querySelector('.element__name');
        this._img = this._card.querySelector('.element__photo');
        this._heart = this._card.querySelector('.element__heart');
        this._delete = this._card.querySelector('.element__delete');
        this._likes = this._card.querySelector('.element__like-count');
        this._likes.textContent = this._likesCount.length;
        this._name.textContent = this._nameData;
        this._img.src = this._imgData;
        this._img.alt = 'Фото ' + this._nameData;
        this._seteventListeners();
        return this._card;
    }

    render(container) {
        container.prepend(this._card);
    }
}
