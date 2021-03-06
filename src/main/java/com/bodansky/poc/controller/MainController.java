package com.bodansky.poc.controller;

/*
 * Created by Adam Bodansky on 2017.06.02..
 */

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.websocket.server.PathParam;

@Controller
@RequestMapping("/video-conference")
public class MainController {

    private static final Logger log = LoggerFactory.getLogger(MainController.class);

    @GetMapping("/index")
    public String index() {
        log.info("index() - open index.html");
        return "index";
    }

    @PostMapping("/index")
    public String getRoomName(@PathParam("roomName") String roomName) {
        log.info("getRoomName() {}", roomName);
        if (!roomName.isEmpty() && roomName != null) {
            return "redirect:/video-conference/" + roomName;
        }
        return "index";
    }

    @GetMapping("/{room}")
    public String getChatRoom(@PathVariable("room") String room, Model model) {
        log.info("getChatRoom() - {}", room);
        model.addAttribute("room", room);
        return "index";
    }
}
