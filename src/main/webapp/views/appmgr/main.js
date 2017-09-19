var URL_TABLE1 = app.ctx+"/1.json";
$(function () {
    $("#btn_query").click(function () {
        $("#table1").jqGrid().setGridParam({
            url : URL_TABLE1,
            page : 1,
            postData: {}
        }).trigger("reloadGrid");
    });
    $("#btn_add").click(function () {
        layer.open({
            type : 2,
            shift : 5,
            title : '新增设备信息',
            shadeClose : false,
            shade : 0.3,
            area : ['60%', '80%'],
            content : app.ctx + '/views/appmgr/add_device.jsp',
            cancel : function(index) {
                layer.close(index);
            }
        });
    });
    $("#table1").jqGrid({
        url : URL_TABLE1,
        postData: {},
        datatype : "json",
        mtype : "post",
        height : $('body').height() -165,
        width : $('body').width() ,
        rownumbers : true,
        shrinkToFit : true,
        rowNum : 20,
        rowList : [ 10, 20, 30,50,100 ],
        pager : '#pager1',
        viewrecords: true,
        colModel : [
            {label : 'id',name : "id",hidden : true,key : true,frozen : true},
            {label:'操作',name:'',width:130,sortable:false,align:'center',formatter:function(cellvalue,options,rowObject){
                var trash = '<button class="btn btn-white btn-xs" type="button" onclick="trashOne(\'' + rowObject.id + '\')"><i class="fa fa-trash"></i></button>&nbsp;';
                var edit = '<button class="btn btn-white btn-xs" type="button" onclick="eidtOne(\'' + rowObject.id + '\')"><i class="fa fa-pencil"></i></button>&nbsp;';
                var service = '<button class="btn btn-primary btn-xs" type="button" onclick=""><i class="fa fa-diamond"></i> 设定服务截止日期</button>&nbsp;';
                return trash+edit+service;
            }},
            {label : 'IEMI',name : "",width : 100,sortable : false,formatter:function(cellvalue,options,rowObject){
                return '<a href="javascript:;" onclick="viewOne(\'' + rowObject.id + '\')">'+cellvalue+'</a>';
            }} ,
            {label : '使用单位',name : "",width : 100,sortable : false,frozen : true},
            {label : '使用人',name : "", width : 100, sortable : false,frozen : true},
            {label : '手机号码',name : "",width : 100,sortable : false} ,
            {label : '设备状态',name : "",width : 80,sortable : false},
            {label : '注册日期',name : "", width : 80,sortable : false},
            {label : '截止日期',name : "", width : 80,sortable : false},
            {label : '剩余天数',name : "",width : 80,sortable : false}
        ]
    });

});

function viewOne(key) {
    layer.open({
        type : 2,
        shift : 5,
        title : '查看设备信息',
        shadeClose : false,
        shade : 0.3,
        area : ['60%', '80%'],
        content : app.ctx + '/views/appmgr/view_device.jsp?id=' + key,
        cancel : function(index) {
            layer.close(index);
        }
    });
}

function eidtOne(key) {
    layer.open({
        type : 2,
        shift : 5,
        title : '编辑设备信息',
        shadeClose : false,
        shade : 0.3,
        area : ['60%', '80%'],
        content : app.ctx + '/views/appmgr/add_device.jsp?id=' + key,
        cancel : function(index) {
            layer.close(index);
        }
    });
}

function trashOne(key) {
    layer.confirm('确定删除该设备吗?',{btn:['确定','取消']},function (o) {
        //todo
        layer.close(o);
    },function (o) {
        layer.close(o);
    });
}