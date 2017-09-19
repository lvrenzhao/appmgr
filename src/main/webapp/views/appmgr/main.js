var URL_DELETE_DEVICE = app.ctx+"/deletedevice.do"

var URL_TABLE1 = app.ctx+"/devicelist.do";
$(function () {
    $("#btn_query").click(function () {
        $("#table1").jqGrid().setGridParam({
            url : URL_TABLE1,
            page : 1,
            postData: {
                imei:$("#form_ipt_imei").val(),
                org:$("#form_ipt_sydw").val(),
                man:$("#form_ipt_syr").val(),
                phone:$("#form_ipt_sjhm").val(),
                state:$("#form_sel_state").val()
            }
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
        postData: {
            imei:$("#form_ipt_imei").val(),
            org:$("#form_ipt_sydw").val(),
            man:$("#form_ipt_syr").val(),
            phone:$("#form_ipt_sjhm").val(),
            state:$("#form_sel_state").val()
        },
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
                var service = '<button class="btn btn-primary btn-xs" type="button" onclick="setdate(\'' + rowObject.id + '\')"><i class="fa fa-diamond"></i> 设定服务截止日期</button>&nbsp;';
                return trash+edit+service;
            }},
            {label : 'IEMI',name : "imei",width : 100,sortable : false,formatter:function(cellvalue,options,rowObject){
                return '<a href="javascript:;" onclick="viewOne(\'' + rowObject.id + '\')">'+cellvalue+'</a>';
            }} ,
            {label : '使用单位',name : "org",width : 100,sortable : false,frozen : true},
            {label : '使用人',name : "man", width : 100, sortable : false,frozen : true},
            {label : '手机号码',name : "phone",width : 100,sortable : false,align:'right'} ,
            {label : '设备状态',name : "state",width : 80,sortable : false,align:'center'},
            {label : '注册日期',name : "zcrq", width : 80,sortable : false,align:'right'},
            {label : '截止日期',name : "fwrq", width : 80,sortable : false,align:'right'},
            {label : '剩余天数',name : "remainsDays",width : 80,sortable : false,align:'right'}
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
        $.ajax({
            type : 'POST',
            url : URL_DELETE_DEVICE,
            datatype : 'json',
            data : {
                id:key
            },
            success : function(data) {
                if(data >= 1){
                    layer.msg("设备删除成功!");
                    $("#btn_query").trigger('click');
                }else{
                    layer.msg("程序异常，请联系系统管理员。");
                }
            }
        });
        layer.close(o);
    },function (o) {
        layer.close(o);
    });
}

function setdate(key) {
    layer.open({
        type : 2,
        shift : 5,
        title : '设定新的服务截止日期',
        shadeClose : false,
        shade : 0.3,
        area : ['40%', '60%'],
        content : app.ctx + '/views/appmgr/setdate.jsp?id=' + key,
        cancel : function(index) {
            layer.close(index);
        }
    });
}