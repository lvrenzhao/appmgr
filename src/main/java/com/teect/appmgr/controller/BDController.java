package com.teect.appmgr.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import javax.servlet.http.HttpSession;

@Controller
public class BDController {

    @RequestMapping("/index")
    public String index(HttpSession httpSession) {
        return "../index";
    }
}
