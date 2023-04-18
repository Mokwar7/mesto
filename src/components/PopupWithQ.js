import Popup from "./Popup.js"

export default class PopupWithQ extends Popup {
    constructor({handleFormSubmit}, popupSelector, api, id) {
        super(popupSelector)
        this._handleFormSubmit = handleFormSubmit
        this._button = this._popup.querySelector('.popup__save-button')
    }
    setEventListeners() {
        super.setEventListeners()
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault()
            console.log(this._button.textContent)
            this._handleFormSubmit(this._button)
            this.close()
        })
    }
}