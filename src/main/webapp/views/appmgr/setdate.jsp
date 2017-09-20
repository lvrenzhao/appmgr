<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>
    <!-- library list = slimscroll;metismenu;bsfileinput;icheck;jqgrid;laydate;layer;steps;ztree -->
    <jsp:include page="/header.jsp?libs=laydate;layer" />
    <script src="setdate.js"></script>
</head>
<body>
<div class="form_center wb85 clearfix" style="padding: 15px 0;">
    <div class="form_item wb100 fl">
        <label>原服务截止日期</label>
        <input type="text" id="form_inp_old" class="form-control" placeholder="" readonly/>
    </div>
    <div class="form_item wb100">
        <label>设定新的服务截止日期<span>*</span></label>
        <input type="text" class="form-control" id="form_inp_new" placeholder="" onclick="laydate({istime: true,format: 'YYYY/MM/DD'})"/>
    </div>
    <div class="form_item wb100 fl" style="padding-top: 20px">
        <button class="btn btn-primary btn-block" id="btn_save" type="button"><i class="fa fa-save"></i> 保存</button>
    </div>
</div>
</body>
</html>