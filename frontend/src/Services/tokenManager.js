const tokenName = 'token-todo';
module.exports = {
    isAuthenticaded: () => {
        return localStorage.getItem(tokenName) !== null;
    },
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