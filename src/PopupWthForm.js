import Popup from "./Popup.js"

export default class PopupWithForm extends Popup {
    constructor({handleFormSubmit}, popupSelector) {
        super(popupSelector)
        this._handleFormSubmit = handleFormSubmit
        this._form = this._popup.querySelector('.popup__form')
        this._inputs = this._form.querySelectorAll('.popup__input')
        this._button = this._form.querySelector('.popup__save-button')
    }

    _getInputValues() {
        this._inputValues = {}
        this._inputs.forEach(input => {
            this._inputValues[input.id] = input.value
        })
        return this._inputValues
    }

    setEventListeners() {
        super.setEventListeners()
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault()
            this._handleFormSubmit(this._getInputValues())
            this.close()
        })
    }

    close() {
        super.close()
        this._form.reset()
        this._button.classList.add('popup__save-button_inactive')
        this._button.disabled = true
    }
}