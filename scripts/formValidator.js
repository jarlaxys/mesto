export class FormValidator {
  constructor(formElement, config) {
    this._formElement = formElement;
    this._config = config;
    this._inputsList = this._formElement.querySelectorAll(this._config.inputSelector);
    this._submitButtonElement = this._formElement.querySelector(this._config.submitButtonSelector)
  }

  resetValidation() {
    this._inputsList.forEach((inputItem) => {
      const errorElement = this._formElement.querySelector(`#${inputItem.name}-error`);
      inputItem.classList.remove(this._config.inputErrorClass);
      errorElement.textContent = '';
    })
  }

  _showError(inputItem, errorElement) {
    inputItem.classList.add(this._config.inputErrorClass);
    errorElement.textContent = inputItem.validationMessage;
  }

  _hideError(inputItem, errorElement) {
    inputItem.classList.remove(this._config.inputErrorClass);
    errorElement.textContent = inputItem.validationMessage;
  }

  disabledButton() {
    this._submitButtonElement.disabled = true;
    this._submitButtonElement.classList.add(this._config.inactiveButtonClass);
  }

  _enableButton() {
    this._submitButtonElement.disabled = false;
    this._submitButtonElement.classList.remove(this._config.inactiveButtonClass);
  }

  _toggleButtonState(isActive) {
    if (!isActive) {
      this.disabledButton()
    } else {
      this._enableButton()
    }
  }

  _checkInputValidity(inputItem) {
    const isInputValid = inputItem.validity.valid;
    const errorElement = this._formElement.querySelector(`#${inputItem.name}-error`);

    if (!isInputValid) {
      this._showError(inputItem, errorElement)
    } else {
      this._hideError(inputItem, errorElement)
    }
  }

  _setEventListener() {
    this._toggleButtonState(this._formElement.checkValidity());

    this._inputsList.forEach((inputItem) => {
      inputItem.addEventListener('input', () => {
        this._toggleButtonState(this._formElement.checkValidity())
        this._checkInputValidity(inputItem);
      })
    })
  }

  enableValidation() {
    this._setEventListener()
  }
}
