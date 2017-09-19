<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>
    <!-- library list = slimscroll;metismenu;bsfileinput;icheck;jqgrid;laydate;layer;steps;ztree -->
    <jsp:include page="/header.jsp?libs=jqgrid;layer" />
    <script src="main.js"></script>
</head>
<body style="overflow: hidden">
    <div class="clearfix">
        <div class="form_item wb15 fl reality pdt_10">
            <label>设备序列号</label>
            <input type="text" id="form_ipt_imei" class="form-control input-sm" placeholder="设备IMEI" maxlength="255" />
        </div>
        <div class="form_item wb15 fl reality pdt_10">
            <label>使用单位</label>
            <input type="text" id="form_ipt_sydw" class="form-control input-sm" placeholder="设备使用单位" maxlength="255" />
        </div>
        <div class="form_item wb15 fl reality pdt_10">
            <label>使用人</label>
            <input type="text" id="form_ipt_syr" class="form-control input-sm" placeholder="设备使用人" maxlength="255" />
        </div>
        <div class="form_item wb15 fl reality pdt_10">
            <label>手机号码</label>
            <input type="text" id="form_ipt_sjhm" class="form-control input-sm" placeholder="设备注册手机号" maxlength="255" />
        </div>
        <div class="form_item wb15 fl reality pdt_10">
            <label>设备状态</label>
            <select class="form-control input-sm" id="form_sel_state">
                <option value="">--请选择--</option>
                <option value="1">正常</option>
                <option value="2">过期</option>
            </select>
        </div>
        <div class="form_item wb25 fl" style="text-align:right">
            <button id="btn_query" class="btn btn-primary btn-smx mt40" type="button">
                <i class="fa fa-search"></i> 查询
            </button>
            <button id="btn_add" class="btn btn-white btn-smx mt40" type="button" >
                <i class="fa fa-plus"></i> 新增设备
            </button>
        </div>
    </div>
    <div class="clearfix pd10">
        <table id="table1"></table>
        <div id="pager1"></div>
    </div>
</body>
</html>