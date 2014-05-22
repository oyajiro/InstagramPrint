var http = require("http");
var url = require('url');

http.createServer(function(request, response) {
    var get_data = url.parse(request.url, true);
    if (get_data.query['hub.verify_token'] != undefined && get_data.query['hub.verify_token'] == 'instagramPrintVerify') {
        console.log(get_data.query);
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(get_data.query['hub.challenge']);
        response.end();
    } else {
        response.end();
    }
}).listen(8885);