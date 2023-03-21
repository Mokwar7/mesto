const config = {
    formSelector: '.popup__form',
    saveButtonSelector: '.popup__save-button',
    inputSelector: '.popup__input',
    inputErrorClass: 'popup__input_error',
    spanErrorClass: 'popup__span-error',
    saveButtonInactiveClass: 'popup__save-button_inactive',
}

const showInputError = (formElement, inputElement, errorMessage, config) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(config.spanErrorClass);
}
  
const hideInputError = (formElement, inputElement, config) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(config.inputErrorClass);
    errorElement.textContent = ' ';
    errorElement.classList.remove(config.spanErrorClass);
}

const disableButton = (buttonElement, config) => {
    buttonElement.classList.add(config.saveButtonInactiveClass);
    buttonElement.disabled = true
}
  const enableButton = (buttonElement, config) => {
    buttonElement.classList.remove(config.saveButtonInactiveClass);
      buttonElement.disabled = false
}

class FormValidator {
    constructor(configuration, formElement) {
        this._config = configuration;
        this._form = formElement;
        this._inputList = Array.from(this._form.querySelectorAll(config.inputSelector));
        this._button = this._form.querySelector(config.saveButtonSelector);
    }

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            showInputError(this._form, inputElement, inputElement.validationMessage, this._config)
        }
        else {
            hideInputError(this._form, inputElement, this._config)
        }
    }

    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid
        })
    }

    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            disableButton(this._button, this._config)
        }
        else {
            enableButton(this._button, this._config)
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
            disableButton(this._button, this._config)
        })
        this._setEventListeners();
    }
}

const formList = Array.from(document.querySelectorAll(config.formSelector))
formList.forEach((form) => {
    const formValidator = new FormValidator(config, form);
    formValidator.enableValidation();
})
