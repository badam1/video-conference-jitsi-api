/*
 * Created by Adam Bodansky on 2017.06.10..
 */

'use strict';

$(function () {

    var domain = "meet.jitsi.si";
    var room = $("#room");
    var width = 480;
    var height = 640;
    var htmlElement = document.querySelector("#meet");
    var configOverwrite = {};
    var interfaceConfigOverwrite = {
        filmStripOnly: true
    };
    var noSsl = false;
    var api = new JitsiMeetExternalAPI(domain, room, width, height, htmlElement, configOverwrite, interfaceConfigOverwrite, noSsl);

});



