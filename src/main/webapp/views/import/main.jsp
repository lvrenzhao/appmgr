<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>需求单导入</title>
    <!-- library list = slimscroll;metismenu;bsfileinput;icheck;jqgrid;laydate;layer;steps;ztree -->
    <jsp:include page="/header.jsp?libs=xlsx;layer" />
    <script src="main.js"></script>
    <style>
        .importtable thead tr{height:40px;}
        .importtable thead th{text-align: center;vertical-align: middle !important;}
    </style>
</head>
<body>
<div class="bmbox_layout title_fixed clearfix">
    <div class="bmbox_title">
        <h5>图例: (<span style="background-color:#fcf8e3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> 代表改行存在错误数据 | <span style="background-color:#f2dede">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> 代表该单元格数据错误)</h5>
        <div class="bmbox_tool">
            <a class="collapse-link" href="${ctx}/assets/template.xlsx"> <i class="fa fa-download"></i>下载Excel模板</i> </a>
            <button id="btn_upload" class="btn btn-white btn-sm btn-smx" type="button"><i class="fa fa-folder-open"></i> 导入</button>
            <button id="btn_submit" class="btn btn-primary btn-sm btn-smx" disabled type="button"><i class="fa fa-check"></i> 提交数据</button>
            <input  id="upload_file" type="file" style="float:left;visibility: hidden">
        </div>
    </div>
    <div class="bmbox_content clearfix fullbox" style="overflow: scroll">
        <div class="fullbox" style="overflow-x: auto;">
            <table class="table table-bordered table-condensed importtable" style="width:100%;">
                <thead>
                <th>行号</th>
                <th>IMEI*</th>
                <th>使用单位</th>
                <th>使用人</th>
                <th>手机号码</th>
                <th>服务截止日期*</th>
                </thead>
                <tbody id="tablebody"></tbody>
            </table>
            <div id="tips" style="text-align: center;line-height: 25px;margin: 150px;"><span><span class="fa fa-warning"></span> 未导入任何数据</span><br /><span>请先点击【下载excel模板】按钮并完成数据后，点击【导入】按钮。</span></div>
        </div>
    </div>
</div>
</body>
</html>