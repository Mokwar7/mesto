export default class Api{
    constructor(settings) {
        this._url = settings.url
        this._headers = settings.headers
    }

    getUserInfo() {
        return fetch(this._url + 'users/me', {
            method: 'GET',
            headers: this._headers
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
            })
            .catch((err) => {
                console.log(err);
              });
    }

    getInitialCards() {
        return fetch(this._url + 'cards', {
            method: 'GET',
            headers: this._headers
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch((err) => {
                console.log(err);
              });
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
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch((err) => {
                console.log(err);
              });
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
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch((err) => {
                console.log(err);
              });
    }

    removeCard(id) {
        return fetch(this._url + 'cards/' + id, {
            method: 'DELETE',
            headers: this._headers,
        })
        .then((res) => {
            if (res.ok) {
                return
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .catch((err) => {
            console.log(err);
          });
    }

    addLike(id) {
        return fetch(`${this._url}/cards/${id}/likes`, {
            method: 'PUT',
            headers: this._headers,
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch((err) => {
                console.log(err);
              });
    }

    removeLike(id) {
        return fetch(`${this._url}/cards/${id}/likes`, {
            method: 'DELETE',
            headers: this._headers,
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch((err) => {
                console.log(err);
              });
    }

    updateAvatar(avatar) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-64/users/me/avatar', {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: avatar
            })
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch((err) => {
                console.log(err);
              });
    }
}
