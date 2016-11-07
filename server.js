var express = require('express');
var path = require('path');

var app = express();
var isDev = (process.env.NODE_ENV == 'dev');
app.set('port', (isDev ? process.env.PORT : 5000));
var publicPath = path.resolve(__dirname, 'src/client');

app.use(express.static(publicPath));

app.listen(app.get('port'), function () {
    console.log('Node app running on port ' + app.get('port'));
});