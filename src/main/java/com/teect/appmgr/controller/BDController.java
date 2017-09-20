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
import org.apache.commons.lang3.time.DateFormatUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.persistence.Id;
import javax.servlet.http.HttpSession;
import java.util.*;

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

    @RequestMapping("/api")
    public  @ResponseBody Map api(String imei){
        Map<String,String> map = new HashMap<String,String>();
        map.put("now", DateFormatUtils.ISO_DATE_FORMAT.format(new Date()));

        if(StringUtils.isNoneBlank(imei)){
            BdDevice bean = new BdDevice();
            bean.setImei(imei);
            List<BdDevice> dvs = bdDeviceMapper.selectAll(bean);
            if(dvs != null && dvs.size()>0){
                BdLoginlog log = new BdLoginlog();
                log.setDeviceid(dvs.get(0).getId());
                log.setId(IdGen.uuid());
                bdLoginlogMapper.insert(log);
                if(dvs.get(0).getServicedate() != null){
                    map.put("servicedate",DateFormatUtils.ISO_DATE_FORMAT.format(dvs.get(0).getServicedate()));
                }
            }
        }

        return map;
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


    @RequestMapping("/table2")
    public @ResponseBody List<BdServicelog> table2(String id){
        return bdServicelogMapper.selectAll(id);
    }

    @RequestMapping("/table1")
    public @ResponseBody List<BdLoginlog> table1(String id){
        return bdLoginlogMapper.selectAll(id);
    }


    @RequestMapping("/save")
    public @ResponseBody int save(BdDevice bean){
        if(StringUtils.isNoneBlank(bean.getId())){
            if("SD".equals(bean.getType())){
                BdServicelog log = new BdServicelog();
                log.setId(IdGen.uuid());
                log.setRemarks(bean.getId());
                log.setOldservicedate(bean.getOldservicedate());
                log.setNewservicedate(bean.getServicedate());
                bdServicelogMapper.insert(log);
            }
            return bdDeviceMapper.updateByIdSelective(bean);
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
