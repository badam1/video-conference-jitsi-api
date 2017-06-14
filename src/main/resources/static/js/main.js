/*
 * Created by Adam Bodansky on 2017.06.10..
 */

'use strict';

$(function () {

    var domain = "meet.jit.si";
    var room = $("#room").val();
    var width = 700;
    var height = 700;
    var htmlElement = document.querySelector("#meet");
    var configOverwrite = {};
    var noSsl = false;
    var api = new JitsiMeetExternalAPI(domain, room, width, height, htmlElement, configOverwrite, interfaceConfig, noSsl);


    var $body = $("body");

    if (room) {
        $("form").remove();
        $("#urlAndForm").append(
            "<h4>Access url for room: " + room + "</h4> " +
            "<input readonly='readonly' class='input form-control input-block' type='text' value='" + window.location + "'/>");
        $body.append("<a id='leaveRoom' href='/video-conference/index' class='btn btn-warning right-corner'><i class='fa fa-sign-out'>Leave room</i></a>")
    }

    $("#createRoomBtn").on("click", function () {
        var roomName = $("#roomName").val();
    });

    $body.on("click", "#leaveRoom", function () {
        api.executeCommand("hangup");
    });

    window.onbeforeunload = function () {
        api.dispose();
    };

});



