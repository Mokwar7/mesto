import Popup from "./Popup.js"

export default class PopupWithConfirmation extends Popup {
    constructor({handleFormSubmit}, popupSelector) {
        super(popupSelector)
        this._handleFormSubmit = handleFormSubmit
    }
    setEventListeners() {
        super.setEventListeners()
        this._popup.addEventListener('submit', (e) => {
            e.preventDefault()
            this._handleFormSubmit(this._id, this._evt)
        })
    }
    open(id, evt) {
        super.open()
        this._id = ''
        this._id = id
        this._evt = evt
    }
}