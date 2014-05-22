var http = require("http");
var url = require('url');
var qs = require('querystring');



http.createServer(function(request, response) {
    if (request.method == 'POST') {
        var body = "";
        request.on('data', function (data) {
            body += data;
        });
        request.on('end', function () {
            response.writeHead(200, {"Content-Type": "text/plain"});
            var post = qs.parse(body)
            console.log(post);
        });
        response.end();
    }
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