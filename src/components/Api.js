class Api {
    constructor(options) {
        this.baseUrl = options.baseUrl;
        this.headers = options.headers;
    }

    getInitialCards() {
        // ...
    }

    // другие методы работы с API
}

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-70',
    headers: {
        authorization: '507ca991-9d37-4650-bfef-b2e1fd6da74a',
        'Content-Type': 'application/json'
    }
});