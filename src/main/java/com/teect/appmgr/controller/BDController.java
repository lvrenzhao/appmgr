package com.teect.appmgr.controller;

import com.teect.appmgr.bean.BdLoginlog;
import com.teect.appmgr.bean.BdServicelog;
import com.teect.appmgr.bean.UserBean;
import com.teect.appmgr.mapper.BdDeviceMapper;
import com.teect.appmgr.mapper.BdLoginlogMapper;
import com.teect.appmgr.mapper.BdServicelogMapper;
import com.teect.appmgr.mapper.UserMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
public class BDController {

    @Resource
    private UserMapper userMapper;

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

    @RequestMapping("/changepwd")
    public @ResponseBody String changepwd(HttpSession httpSession,String newpwd,String oldpwd) {
        UserBean us = new UserBean();
        us.setZh("admin");
        List<UserBean> list = userMapper.selectList(us);
        if(list != null && list.size() == 1){
            if(list.get(0).getMm().equals(oldpwd)){
                UserBean newUser = new UserBean();
                newUser.setYhid(list.get(0).getYhid());
                newUser.setMm(newpwd);
                userMapper.updateByIdSelective(newUser);
                return "1";
            }else {
                return "2";
            }
        }else{
            return "3";
        }
    }

}
