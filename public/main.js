define('jquery', [], function() {
    return jQuery;
});
require(['socket.js','config.js','decorator.js'],function(socket,config,decorator){
    jQuery(document).ready(function ($) {
        var webChat = new socket.socket(config.serverIp,config.serverIpSocketPort);
        webChat.connect.onopen = function(){$(config.inputID).removeAttr("disabled");$(config.statusID).text("Connected");}
        webChat.connect.onmessage = function(message){
            console.log(decorator.addTableRow(decorator.addTableData(message.data,"none","none")))
            $(config.displayID).append(decorator.addTableRow(decorator.addTableData("    "+message.data,"none","none")));
            $(config.inputID).val("");$(config.inputID).focus();
            var display = document.getElementById(config.displayID.slice(1));
            display.scrollTop = display.scrollHeight;
        }
        $(config.inputID).keydown(function(e){
            if(e.keyCode === 13){
                webChat.connect.send($(config.inputID).val());
            }
        })
    })
})