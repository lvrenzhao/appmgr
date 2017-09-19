<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>
    <!-- library list = slimscroll;metismenu;bsfileinput;icheck;jqgrid;laydate;layer;steps;ztree -->
    <jsp:include page="/header.jsp?libs=" />
  </head>

  <body class="gray-bg">

  <div class="middle-box text-center loginscreen  animated fadeInDown" style="width:300px;margin:100px auto;">
    <div>
      <div>

        <h1 class="logo-name">App管理</h1>
        <p>中高压电力采集安卓设备管理系统</p>

      </div>

      <form class="m-t" role="form" action="${ctx}/checklogin.do" style="margin-top: 30px">
        <div class="form-group">
          <input type="text" name="username" class="form-control" placeholder="用户名" required="">
        </div>
        <div class="form-group">
          <input type="password" name="password" class="form-control" placeholder="密码" required="">
        </div>
        <span style="display:inline-block;margin:10px;margin-top: 0px;">${msg }</span>
        <button type="submit" class="btn btn-primary block full-width m-b">登 录</button>

      </form>
    </div>
  </div>
  </body>



</html>