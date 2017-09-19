<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>App管理</title>
    <!-- library list = slimscroll;metismenu;bsfileinput;icheck;jqgrid;laydate;layer;steps;ztree -->
    <jsp:include page="/header.jsp?libs=layer" />
    <script>
        $(function () {
            $(".x-menus li").click(function () {
                $(".x-menus li").removeClass("active");
                $(this).addClass("active");
                $("#menucontextblock").attr("src",$(this).attr("data-menu-url"));
            });
            $("#menucontextblock").attr("src",$(".x-menus li.active").attr("data-menu-url"));
            $("#btn_exit").click(function () {
                layer.confirm('确认退出登录吗？',{btn:['确定','取消']},
                    function (o) {
                        window.location.href=app.ctx+"/login.jsp";
                    },
                    function (o) {
                        layer.close(o);
                    }
                );
            });
        });
    </script>
</head>
<body style="padding-bottom:55px;overflow: hidden">
    <nav class="navbar navbar-default" style="margin:0px;">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="#">App管理</a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav x-menus">
                    <li class="active" data-menu-url="${ctx}/views/appmgr/main.jsp"><a href="#"><span class="fa fa-mobile-phone" style="font-size:16px"></span> 设备管理 <span class="sr-only">(current)</span></a></li>
                    <li data-menu-url="${ctx}/views/pwdmgr/main.jsp"><a href="#"><span class="fa fa-user"> </span> 修改管理员密码</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li id="btn_exit"><a href="#"><span class="fa fa fa-sign-out"></span> 退出登录</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <div style="height:100%;margin:0px;">
        <iframe class="J_iframe" id="menucontextblock" width="100%" height="100%" src="" frameborder="0" data-id="1" seamless></iframe>
    </div>
</body>
</html>