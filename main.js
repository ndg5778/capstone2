const fs = require('fs');
const url = require('url');
var path = require('path');
const express = require('express');
const app = express();
const template = require('./express/lib/template.js');


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