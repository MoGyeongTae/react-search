import express from 'express';
import request from 'request';
const app = express();
let port = process.env.PORT || 3000;

const client_id = '1fr8ZMwo0junJlsTBhZS';
const client_secret = '_og2obZQ9q';

app.use('/', express.static(__dirname + '/../public'));
app.get('/search/:select/:keyword', (req,res) => {
    let api_url = `https://openapi.naver.com/v1/search/${req.params.select}?query=${encodeURI(req.params.keyword)}`;
    let options = {
        url : api_url,
        headers : {'X-Naver-Client-Id' : client_id, 'X-Naver-Client-Secret':client_secret},
    };
    request.get(options,(err,response,body) => {
        if(!err && response.statusCode === 200) {
            res.setHeader('Content-Type', 'text/json;charset=utf-8');
            res.send(body);
        } else {
            console.log(`error = ${res.statusCode}`);
        }
    })
});

const server = app.listen(port,() => {
    console.log('On',port)
});