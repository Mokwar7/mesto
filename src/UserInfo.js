export default class UserInfo {
    constructor(selectorName, selectorbio) {
        this._name = document.querySelector(selectorName)
        this._bio = document.querySelector(selectorbio)
    }

    getUserInfo() {
        this._info = {
            name: this._name.textContent,
            bio: this._bio.textContent,
        }
        return this._userInfo
    }

    setUserInfo(data) {
        this._name.textContent = data.name
        this._bio.textContent = data.description
    }
}