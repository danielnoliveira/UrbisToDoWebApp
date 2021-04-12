const tokenName = 'token-todo';
module.exports = {
    getToken: () => {
        return localStorage.getItem(tokenName);
    },
    login: token => {
        localStorage.setItem(tokenName,token);
    },
    logout: () => {
        localStorage.removeItem(tokenName);
    }
}