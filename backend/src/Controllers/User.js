module.exports = {
    login: (req,res) => {
        
        res.send(`Login method,special token: ${req.headers['x-token']}`);
    }
}