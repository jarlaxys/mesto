export class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    _checkAnswer(res) {
        if (res.ok) {
            return res.json()
        } else {
            throw new Error(`Ошибка: ${res.status}`)
        }
    }

    getUserInfo = async () => {
        const res = await fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        })
        return this._checkAnswer(res)
    }

    getCards = async () => {
        const res = await fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        })
        return this._checkAnswer(res)
    }

    patchUserInfo = async (values) => {
        const res = await fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: values.name,
                about: values.job
            })
        })
        return this._checkAnswer(res)
    }

    postNewCard = async (values) => {
        const res = await fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: values.title,
                link: values.link
            })
        })
        return this._checkAnswer(res)
    }
}

export const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-70',
    headers: {
        authorization: '507ca991-9d37-4650-bfef-b2e1fd6da74a',
        'Content-Type': 'application/json'
    }
});


api.patchUserInfo()
.then(res => console.log(res))
