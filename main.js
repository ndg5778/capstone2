const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const template = require('./express/lib/template.js');

app.use(express.static(__dirname + '/express/public'));


app.get('/', function(request, response){
  const title = 'main';
  fs.readFile(`./express/data/${title}`, 'utf-8', function(err, description){
  const html = template.HTML(title, description);
  response.send(html);
  });
});

app.get('/page/:pageId', function(req, res){
  const fileredId = path.parse(req.params.pageId).base;

  fs.readFile(`./express/data/${fileredId}`, 'utf-8', function(err, description){
    const title = req.params.pageId;
    const html = template.HTML(title, description);

    res.send(html);
  });
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
});