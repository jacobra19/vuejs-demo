const express = require('express')
const app = express()
const port = 3000

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(allowCrossDomain);

app.get('/ping', (req, res)=> {
    return res.send('pong');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))