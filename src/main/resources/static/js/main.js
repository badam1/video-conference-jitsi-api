/*
 * Created by Adam Bodansky on 2017.06.10..
 */

'use strict';

$(function () {

    var domain = "meet.jit.si";
    var room = $("#room").val();
    var width = 600;
    var height = 800;
    var htmlElement = document.querySelector("#meet");
    var configOverwrite = {};
    var interfaceConfigOverwrite = {
        filmStripOnly: true
    };
    var noSsl = false;
    var api = new JitsiMeetExternalAPI(domain, room, width, height, htmlElement, configOverwrite, interfaceConfigOverwrite, noSsl);


    var $body = $("body");

    if (room) {
        $("form").remove();
        $("#urlAndForm").append(
            "<h4>Access url for room: " + room + "</h4> " +
            "<input readonly='readonly' class='input form-control input-block' type='text' value='" + window.location + "'/>");
        $body.append("<a href='/video-conference/index' class='btn btn-warning right-corner'><i class='fa fa-sign-out'>Leave room</i></a>")
    }

    $("#createRoomBtn").on("click", function () {
        var roomName = $("#roomName").val();
    });

});



