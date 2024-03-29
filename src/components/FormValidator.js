export default class FormValidator {
    constructor(configuration, formElement) {
        this._config = configuration;
        this._form = formElement;
        this._inputList = Array.from(this._form.querySelectorAll(this._config.inputSelector));
        this._button = this._form.querySelector(this._config.saveButtonSelector);
    }

    _showInputError = (inputElement) => {
        const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._config.inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(this._config.spanErrorClass);
    }

    _hideInputError = (inputElement) => {
        const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._config.inputErrorClass);
        errorElement.textContent = ' ';
        errorElement.classList.remove(this._config.spanErrorClass);
    }

    disableButton = () => {
        this._button.classList.add(this._config.saveButtonInactiveClass);
        this._button.disabled = true
    }

    _enableButton = () => {
        this._button.classList.remove(this._config.saveButtonInactiveClass);
        this._button.disabled = false
    }

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement)
        }
        else {
            this._hideInputError(inputElement)
        }
    }

    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid
        })
    }

    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this.disableButton()
        }
        else {
            this._enableButton()
        }
    }

    _setEventListeners() {
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            })
            
        })
    }

    enableValidation() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        })
        this._setEventListeners();
    }

    removeValidationErrors() {
        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement)
            inputElement.value = ''
        })
    }
}
