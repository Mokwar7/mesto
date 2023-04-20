export default class UserInfo {
    constructor(selectorName, selectorbio, slectorAvatar) {
        this._name = document.querySelector(selectorName)
        this._bio = document.querySelector(selectorbio)
        this._ava = document.querySelector(slectorAvatar)
    }

    getUserInfo() {
        this._info = {
            name: this._name.textContent,
            about: this._bio.textContent,
        }
        return this._info
    }

    setUserInfo(data) {
        this._name.textContent = data.name
        this._bio.textContent = data.about
        this._ava.style.backgroundImage = `url(${data.avatar})`
        this._id = data._id
    }
}