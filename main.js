const http = require('http');
const fs = require('fs');
const url = require('url');
var template = require('./lib/template.js');

const app = http.createServer(function(request,response){
    const _url = request.url;
    const queryData = url.parse(_url, true).query;
    let title = queryData.id;

    

    if(_url == '/'){
      title = 'main';
    }

    response.writeHead(200);

    fs.readFile(`data/${title}`, 'utf-8', function(err, description){
    const html = template.HTML(title, description)


    response.end(html);
    
  })
 
});
app.listen(3000);