module.exports = {
    setInfo: (name,value) => {
        localStorage.setItem(name,value);
    },
    getInfo: (name) => {
        return localStorage.getItem(name);
    }
}