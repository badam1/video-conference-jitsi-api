/*
 * Created by Adam Bodansky on 2017.06.10..
 */

'use strict';

$(function () {

    var domain = "https://localhost:8443/";
    var room = $("#room");
    var width = 480;
    var height = 640;
    var htmlElement = document.querySelector("#meet");
    var noSsl = false;
    var api = new JitsiMeetExternalAPI(domain, room, width, height, htmlElement, undefined, undefined, noSsl);

});



