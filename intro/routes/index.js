const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/bob', function(req, res, next) {
  res.render('index', { title: 'Bob' });
});

router.post('/bob', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

let httpGet = (url,callback) =>
{
  let result = http(url);
  callback(result)
}

let foo = httpGet ('http://aaa.com/baz',result => console.log(result));
httpGet('http://aaa.com/baz')
.them(result => console.log(result));

async doGet()
{
  let foo = await(httpGet('http://aaa.com/baz'));
  console.log(foo);
}