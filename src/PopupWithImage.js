import Popup from "./Popup.js"

export default class PopupWithImage extends Popup{
    constructor(popupSelector, src, name) {
        super(popupSelector)
        this._name = name
        this._src = src
        this._popupName = this._popup.querySelector('.popup-image__name')
        this._popupImg = this._popup.querySelector('.popup-image__photo')
    }

    open() {
        this._popupName.textContent = this._name
        this._popupImg.src = this._src
        this._popupImg.alt = 'фото ' + this._name
        this._popup.classList.add('popup_opened');
    }
}