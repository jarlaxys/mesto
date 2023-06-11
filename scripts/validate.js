export const configFormSelector = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_invalid',
  inputErrorClass: 'popup__input_state_invalid',
}

export const formSelector = '.popup__content';

export class FormValidator {
  constructor(object, config) {
    this._object = object;
    this._config = config;
  }

  _showError(inputElement, errorElement) {
    inputElement.classList.add(this._config.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
  }

  _hideError(inputElement, errorElement) {
    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
  }

  _disabledButton(buttonElement) {
    buttonElement.disabled = true;
    buttonElement.classList.add(this._config.inactiveButtonClass);
  }

  _enableButton(buttonElement) {
    buttonElement.disabled = false;
    buttonElement.classList.remove(this._config.inactiveButtonClass);
  }

  _toggleButtonState(buttonElement, isActive) {
    if (!isActive) {
      this._disabledButton(buttonElement)
    } else {
      this._enableButton(buttonElement)
    }
  }

  _checkInputValidity(inputElement, formElement) {
    const isInputValid = inputElement.validity.valid;
    const errorElement = formElement.querySelector(`#${inputElement.name}-error`);

    if (!isInputValid) {
      this._showError(inputElement, errorElement)
    } else {
      this._hideError(inputElement, errorElement)
    }
  }

  _setEventListener(formElement) {
    const inputsList = formElement.querySelectorAll(this._config.inputSelector);
    const submitButtonElement = formElement.querySelector(this._config.submitButtonSelector);

    this._toggleButtonState(submitButtonElement, formElement.checkValidity());

    inputsList.forEach((inputItem) => {
      inputItem.addEventListener('input', () => {
        this._toggleButtonState(submitButtonElement, formElement.checkValidity())
        this._checkInputValidity(inputItem, formElement);
      })
    })
  }

  enableValidation() {
    const forms = document.querySelectorAll(this._object);

    forms.forEach((formItem) => {
      this._setEventListener(formItem)
    })
  }
}
