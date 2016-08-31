define(function(){
    function socket(ip,port){
        window.WebSocket = window.WebSocket || window.MozWebSocket;
        if (!window.WebSocket) {alert("no websocket");return;}
        this.connect = new WebSocket("ws://"+ip+":"+port);
        this.connect.onopen = function(){alert("Connection opened")};
        this.connect.onclose = function(){alert("Connection closed")}
        this.connect.onmessage = function(message){alert(message.data);}
        this.connect.onerror = function(error){alert("connection error")};
    }
    return {
        socket:socket
    }
})
