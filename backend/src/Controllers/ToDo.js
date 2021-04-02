module.exports = {
    getList: (req,res) => {
        res.send("get list method");
    },
    createItem: (req,res) => {
        res.send("post create item method");
    },
    updateItem: (req,res) => {
        res.send("put update item method");
    },
    deleteItem: (req,res) => {
        res.send("delete item method");
    }
}