package com.teect.appmgr.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import com.teect.appmgr.bean.UserBean;
import com.teect.appmgr.service.UserService;
import com.teect.appmgr.utils.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class LoginController {

	@Resource
	private UserService userService;

	@RequestMapping("/login")
	public String login(HttpSession httpSession) {
		return "../login";
	}

	@RequestMapping("/checklogin")
	public String checklogin(String username, String password, HttpSession httpSession) {
		if (StringUtils.isNotEmpty(username) && StringUtils.isNotEmpty(password)) {
			UserBean user = userService.getByzh(username);
			if (user != null && user.getMm().equals(password)) {
				if("1".equals(user.getZhzt())) {
					httpSession.setAttribute("msg", "");//清空消息
					httpSession.setAttribute("user", user);
					httpSession.setAttribute("userid", user.getYhid());
					return "redirect:/index.do";
				}else{
					httpSession.setAttribute("msg", "账号被禁用，请联系系统管理员解禁。");//清空消息
					return "redirect:/login.do";
				}
			} else {
				httpSession.setAttribute("msg", "用户名或密码不正确");
			}
		} else {
			httpSession.setAttribute("msg", "用户名或密码不能为空");
		}
		httpSession.setAttribute("username", username);
		return "redirect:/login.do";
	}


	@RequestMapping("/logout")
	public String logout(HttpSession httpSession) {
		httpSession.removeAttribute("user");
		httpSession.setAttribute("msg", "已退出，请重新登录..");
		return "redirect:/";
	}

}
