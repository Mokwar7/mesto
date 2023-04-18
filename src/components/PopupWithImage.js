import Popup from "./Popup.js"

export default class PopupWithImage extends Popup{
    constructor(popupSelector) {
        super(popupSelector)
        this._popupName = this._popup.querySelector('.popup-image__name')
        this._popupImg = this._popup.querySelector('.popup-image__photo')
    }

    open(src, name) {
        super.open()
        this._popupName.textContent = name
        this._popupImg.src = src
        this._popupImg.alt = 'фото ' + name
    }
}