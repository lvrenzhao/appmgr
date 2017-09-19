package com.teect.appmgr.utils;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.teect.appmgr.bean.UserBean;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;


public class HandlerInterceptor extends HandlerInterceptorAdapter {
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
		UserBean user = (UserBean) request.getSession().getAttribute("user");
		if (user == null) {
			request.setAttribute("msg", "登录过期，请刷新页面重新登录");
			request.getRequestDispatcher("/login.do").forward(request, response);
			return false;
		}
		System.out.println("===========HandlerInterceptor preHandle ===========>user:" + user.getYhid());
		return super.preHandle(request, response, handler);
	}
		
}