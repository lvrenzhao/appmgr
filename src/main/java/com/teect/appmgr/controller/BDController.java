package com.teect.appmgr.controller;

import com.teect.appmgr.bean.BdLoginlog;
import com.teect.appmgr.bean.BdServicelog;
import com.teect.appmgr.mapper.BdDeviceMapper;
import com.teect.appmgr.mapper.BdLoginlogMapper;
import com.teect.appmgr.mapper.BdServicelogMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

@Controller
public class BDController {

    @Resource
    private BdDeviceMapper bdDeviceMapper;

    @Resource
    private BdLoginlogMapper bdLoginlogMapper;

    @Resource
    private BdServicelogMapper bdServicelogMapper;

    @RequestMapping("/index")
    public String index(HttpSession httpSession) {
        return "../index";
    }
}
