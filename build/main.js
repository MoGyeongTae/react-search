'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.PORT || 3000;

var client_id = '1fr8ZMwo0junJlsTBhZS';
var client_secret = '_og2obZQ9q';

app.use('/', _express2.default.static(__dirname + '/../public'));
app.get('/search/:select/:keyword', function (req, res) {
    var api_url = 'https://openapi.naver.com/v1/search/' + req.params.select + '?query=' + encodeURI(req.params.keyword);
    var options = {
        url: api_url,
        headers: { 'X-Naver-Client-Id': client_id, 'X-Naver-Client-Secret': client_secret }
    };
    _request2.default.get(options, function (err, response, body) {
        if (!err && response.statusCode === 200) {
            res.setHeader('Content-Type', 'text/json;charset=utf-8');
            res.send(body);
        } else {
            console.log('error = ' + res.statusCode);
        }
    });
});

var server = app.listen(port, function () {
    console.log('On', port);
});