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
<div class="form_center wb85 clearfix" style="padding: 15px 0;">
    <div class="form_item wb100 fl">
        <label>IMEI</label>
        <input type="text" class="form-control" placeholder="请输入设备的IMEI"/>
    </div>
    <div class="form_item wb100 fl">
        <label>使用单位</label>
        <input type="text" class="form-control" placeholder="请输入设备使用单位"/>
    </div>
    <div class="form_item wb100 fl">
        <label>使用人</label>
        <input type="text" class="form-control" placeholder="请输入设备使用单位"/>
    </div>
    <div class="form_item wb100 fl">
        <label>手机号码</label>
        <input type="text" class="form-control" placeholder="使用人手机号码"/>
    </div>
    <div class="form_item wb100 fl" style="padding-top: 20px">
        <button class="btn btn-primary btn-block" type="button"><i class="fa fa-save"></i> 保存</button>
    </div>
</div>
</body>
</html>