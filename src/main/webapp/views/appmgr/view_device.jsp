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
<body>
<div class="bmbox_layout">
    <div class="bmbox_title home-righttab">
        <ul class="nav nav-tabs navs-3">
            <li class="active">
                <a data-toggle="tab" href="#tab-1">
                    设备基本信息
                </a>
            </li>
            <li class="">
                <a data-toggle="tab" href="#tab-2">
                    登录日志
                </a>
            </li>
            <li>
                <a data-toggle="tab" href="#tab-3">
                    服务信息
                </a>
            </li>
        </ul>
    </div>
    <div class="bmbox_content">
        <div class="tab-content">
            <div id="tab-1" class="tab-pane active">

            </div>
            <div id="tab-2" class="tab-pane">

            </div>
            <div id="tab-3" class="tab-pane">

            </div>
        </div>
    </div>
</div>
</body>
</html>