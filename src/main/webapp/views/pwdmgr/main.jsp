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
    <script src="main.js"></script>
</head>
<body>

<div class="form_center width500 clearfix" style="padding: 15px 0;">
    <div class="form_item wb100 fl">
        <label>原密码</label>
        <input type="text" class="form-control" placeholder="请输入原密码"/>
    </div>
    <div class="form_item wb100 fl">
        <label>新密码</label>
        <input type="text" class="form-control" placeholder="请输入新密码"/>
    </div>
    <div class="form_item wb100 fl" style="padding-top: 20px">
        <button class="btn btn-primary btn-block" type="button"><i class="fa fa-save"></i> 保存</button>
    </div>

</div>

</body>
</html>