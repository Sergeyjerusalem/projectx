var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/allure/allure-report'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/allure/allure-report/index.html')
});

app.listen('1234', function () {
    console.log('server started: localhost:1234/')
});