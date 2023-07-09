import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, { callbackSubmitForm }) {
    super(popupSelector);
    this._callbackSubmitForm = callbackSubmitForm;
    this._form = this._popup.querySelector(".popup__content");
    this._inputs = Array.from(this._form.querySelectorAll(".popup__input"));
    this._saveButton = this._popup.querySelector(".popup__save");
    this._buttonText = this._saveButton.textContent;
  }

  _getInputValues() {
    const values = {};
    this._inputs.forEach((item) => {
      values[item.name] = item.value;
    });
    return values;
  }

  setLoading(loading) {
    if (loading) {
      this._saveButton.textContent = "Сохранение...";
    } else {
      this._saveButton.textContent = this._buttonText;
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();

      this._callbackSubmitForm(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
