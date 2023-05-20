function showError (inputElement, errorElement, config) {
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
}

function hideError (inputElement, errorElement, config) {
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
}

function disabledButton (buttonElement, config) {
  buttonElement.disabled = true;
  buttonElement.classList.add(config.inactiveButtonClass);
}

function enableButton (buttonElement, config) {
  buttonElement.disabled = false;
  buttonElement.classList.remove(config.inactiveButtonClass);
}

function toggleButtonState(buttonElement, isActive, config) {
  if (!isActive) {
    disabledButton(buttonElement, config)
  } else {
    enableButton(buttonElement, config)
  }
}

function checkInputValidity(inputElement, formElement, config) {
  const isInputValid = inputElement.validity.valid;
  const errorElement = formElement.querySelector(`#${inputElement.name}-error`);

  if (!isInputValid) {
    showError (inputElement, errorElement, config)
  } else {
    hideError (inputElement, errorElement, config)
  }
}

function setEventListener(formElement, config) {
  const inputsList = formElement.querySelectorAll(config.inputSelector);
  const submitButtonElement = formElement.querySelector(config.submitButtonSelector);

  toggleButtonState(submitButtonElement, formElement.checkValidity(), config);

  inputsList.forEach((inputItem) => {
    inputItem.addEventListener('input', () => {
      toggleButtonState(submitButtonElement, formElement.checkValidity(), config)
      checkInputValidity(inputItem, formElement, config);
    })
  })
}

function enableValidation(config) {
  const forms = document.querySelectorAll(config.formSelector);

  forms.forEach((formItem) => {
    setEventListener(formItem, config)
  })
}

const configFormSelector = {
  formSelector: '.popup__content',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_invalid',
  inputErrorClass: 'popup__input_state_invalid',
}

enableValidation(configFormSelector)
