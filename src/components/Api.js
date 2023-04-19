export default class Api{
    constructor(settings) {
        this._url = settings.url
        this._headers = settings.headers
    }
    _checkPesponse(res) {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getUserInfo() {
        return fetch(this._url + 'users/me', {
            method: 'GET',
            headers: this._headers
        })
            .then(this._checkPesponse)
            
    }

    getInitialCards() {
        return fetch(this._url + 'cards', {
            method: 'GET',
            headers: this._headers
        })
        .then(this._checkPesponse)
    }

    changeeProfileInfo(data) {
        return fetch(this._url + 'users/me', {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.about
            })
        })
        .then(this._checkPesponse)
    }

    addNewCard(data) {
        return fetch(this._url + 'cards', {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.naming,
                link: data.link
            })
        })
        .then(this._checkPesponse)
    }

    removeCard(id) {
        return fetch(this._url + 'cards/' + id, {
            method: 'DELETE',
            headers: this._headers,
        })
        .then(this._checkPesponse)
    }

    addLike(id) {
        return fetch(`${this._url}/cards/${id}/likes`, {
            method: 'PUT',
            headers: this._headers,
        })
        .then(this._checkPesponse)
    }

    removeLike(id) {
        return fetch(`${this._url}/cards/${id}/likes`, {
            method: 'DELETE',
            headers: this._headers,
        })
        .then(this._checkPesponse)
    }

    updateAvatar(avatar) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-64/users/me/avatar', {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: avatar
            })
        })
        .then(this._checkPesponse)
    }
}
