const express = require('express');
const app = express();
const port = 3000;

app.get('/main.html',(req, res) =>{
    res.send('Homepage');
});

app.listen(port, () => {
    console.log('Server Listening oon port ${port}');
});

const main = require("./main.html");

app.use("/main", main);

process.env.NODE_ENV = 'production';

module.exports = router;