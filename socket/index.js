var url = require('url');
var WebSocketServer = require('ws').Server;


module.exports.initSocket = function (server) {

    var wss = new WebSocketServer({ server: server });
    console.log('Socket init ...');
    wss.on('connection', function connection(ws) {
        var location = url.parse(ws.upgradeReq.url, true);
        // you might use location.query.access_token to authenticate or share sessions
        // or ws.upgradeReq.headers.cookie (see http://stackoverflow.com/a/16395220/151312)
        console.log('Is Connected');

        ws.on('message', function incoming(message) {
            console.log('received: %s', message);
        });

        ws.send('something');
    });
};


