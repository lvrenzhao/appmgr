var URL_TABLE1 = app.ctx+"/table1.do";
var URL_TABLE2 = app.ctx + "/table2.do";
$(function () {
    var id = $.getUrlParam("id");
    //1.注册登录日志表格
    $("#table1").jqGrid({
        url : URL_TABLE1,
        postData: {
            id:id
        },
        datatype : "json",
        mtype : "post",
        height : $('body').height() -135,
        width : $('body').width(),
        rownumbers : true,
        shrinkToFit : true,
        rowNum : 20,
        rowList : [ 10, 20, 30,50,100 ],
        pager : '#pager1',
        viewrecords: true,
        colModel : [
            {label : 'id',name : "id",hidden : true,key : true,frozen : true},
            {label : '登录时间',name : "dlrq",width : 100,sortable : false,frozen : true}
        ]
    });
    //2.注册服务信息（续费记录）表格
    $("#table2").jqGrid({
        url : URL_TABLE2,
        postData: {
            id:id
        },
        datatype : "json",
        mtype : "post",
        height : $('body').height() -135,
        width : $('body').width(),
        rownumbers : true,
        shrinkToFit : true,
        rowNum : 20,
        rowList : [ 10, 20, 30,50,100 ],
        pager : '#pager2',
        viewrecords: true,
        colModel : [
            {label : 'id',name : "id",hidden : true,key : true,frozen : true},
            {label : '原服务截止时间',name : "yrq",width : 100,sortable : false,frozen : true},
            {label : '设定新服务截止时间',name : "xrq",width : 100,sortable : false,frozen : true},
            {label : '操作时间',name : "czrq",width : 100,sortable : false,frozen : true}
        ]
    });
});