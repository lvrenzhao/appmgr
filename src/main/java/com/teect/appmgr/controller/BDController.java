package com.teect.appmgr.controller;

import com.teect.appmgr.bean.BdDevice;
import com.teect.appmgr.bean.BdLoginlog;
import com.teect.appmgr.bean.BdServicelog;
import com.teect.appmgr.bean.UserBean;
import com.teect.appmgr.mapper.BdDeviceMapper;
import com.teect.appmgr.mapper.BdLoginlogMapper;
import com.teect.appmgr.mapper.BdServicelogMapper;
import com.teect.appmgr.mapper.UserMapper;
import com.teect.appmgr.utils.IdGen;
import com.teect.appmgr.utils.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.UUID;

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

    @RequestMapping("/deletedevice")
    public  @ResponseBody String deletedevice(String id){
        return String.valueOf(bdDeviceMapper.deleteByPrimaryKey(id));
    }

    @RequestMapping("/devicelist")
    public @ResponseBody List<BdDevice> devicelist(BdDevice bean){
        return bdDeviceMapper.selectAll(bean);
    }

    @RequestMapping("/save")
    public @ResponseBody int save(BdDevice bean){
        if(StringUtils.isNoneBlank(bean.getId())){
            return bdDeviceMapper.updateByPrimaryKey(bean);
        }else{
            bean.setId(IdGen.uuid());
            return bdDeviceMapper.insert(bean);
        }
    }
    @RequestMapping("/getbyid")
    public @ResponseBody BdDevice getbyid(String id){
        return bdDeviceMapper.selectByPrimaryKey(id);
    }

}
