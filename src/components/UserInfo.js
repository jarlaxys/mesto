export class UserInfo {
  constructor(name, info, avatar) {
    this._name = document.querySelector(name);
    this._info = document.querySelector(info);
    this._avatar = document.querySelector(avatar);
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      job: this._info.textContent,
    };
  }

  setUserInfo({ name, info, avatar, id }) {
    this._name.textContent = name;
    this._info.textContent = info;
    this._avatar.src = avatar;
    this._id = id;
  }

  setAvatar({ avatar }) {
    this._avatar.src = avatar;
  }
}
