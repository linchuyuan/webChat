define('jquery', [], function() {
    return jQuery;
});
require(['socket.js','config.js'],function(socket,config){
    jQuery(document).ready(function ($) {
        var webChat = new socket.socket(config.serverIp,config.serverIpSocketPort);
        webChat.connect.onopen = function(){$(config.inputID).removeAttr("disabled");$(config.statusID).text("Connected");}
        webChat.connect.onmessage = function(message){
            $(config.displayID).append("<p>"+message.data+"</p>")
        }
        $(config.inputID).keydown(function(e){
            if(e.keyCode === 13){
                webChat.connect.send($(config.inputID).val());
            }
        })
    })
})