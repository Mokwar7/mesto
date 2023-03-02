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

const checkInputValidity = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, config);
  }
  else {
    hideInputError(formElement, inputElement, config);
  }
}
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid
  })
}
const disableButton = (buttonElement, config) => {
  buttonElement.classList.add(config.saveButtonInactiveClass);
  buttonElement.disabled = true
}
const enableButton = (buttonElement, config) => {
  buttonElement.classList.remove(config.saveButtonInactiveClass);
    buttonElement.disabled = false
}
const toggleButtonState = (inputList, buttonElement, config) => {
  if (hasInvalidInput(inputList)) {
    disableButton(buttonElement, config)
  }
  else {
    enableButton(buttonElement, config)
  }
}

const setEventListeners = (formElement, config) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector))
  const buttonElement = formElement.querySelector(config.saveButtonSelector)
  toggleButtonState(inputList, buttonElement, config)
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, config)
      toggleButtonState(inputList, buttonElement, config)
    }) 
  })
}

const enableValidation = config => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function(evt) {
      evt.preventDefault();
      const buttonElement = formElement.querySelector(config.saveButtonSelector);
      disableButton(buttonElement, config);
    })
    setEventListeners(formElement, config);
  })
}

enableValidation(config)
