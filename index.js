var http = require("http");
var url = require('url');

http.createServer(function(request, response) {
    if (request.method == 'GET') {
        var get_data = url.parse(request.url, true);
        response.writeHead(200, {"Content-Type": "text/plain"});
        //console.log(get_data.query['a']);
        response.write(get_data.query['a']);
        response.end();
    }
}).listen(8885);