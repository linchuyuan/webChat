var clientList = [];
var socketPort = 80;
var require = require('requirejs');
require(['express','websocket','http',"body-parser","path"],function(express,websocket,httpServer,bodyParser,path){
    var app = express();app.use(bodyParser.json());app.use(bodyParser.urlencoded({extended:true}));app.use(express.static("public"));
    var server = httpServer.createServer(app)
    server.listen(socketPort,function(){console.log((new Date()) + " Server is listening on port " + socketPort);})
    app.get("/",function(request,response){
        response.sendFile(path.join(__dirname,"index.html"));
    })
    var websocket = new websocket.server({
        httpServer:server,
    })
    websocket.on('request',function(request){
        console.log('Connection from origin ' + request.origin + '.');
        var connection = request.accept(null, request.origin);
        var index = clientList.push(connection) - 1;
        console.log(' Connection accepted.');
        connection.on('message',function(message){
            if (message.type != 'utf8'){
                return;
            }
            for (i in clientList){
                clientList[i].sendUTF(message.utf8Data)
            }
        })
    })
}) 