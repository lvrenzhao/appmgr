var URL_SAVE = app.ctx+"/save.do";
var URL_GET = app.ctx + "/getbyid.do";


var id ;
$(function () {
    id = $.getUrlParam("id");
    if(id){
        $.ajax({
            type : 'POST',
            url : URL_GET,
            datatype : 'json',
            data : {
                id:id
            },
            success : function(data) {
                $("#form_inp_imei").val(data.imei);
                $("#form_inp_org").val(data.org);
                $("#form_inp_man").val(data.man);
                $("#form_inp_phone").val(data.phone);
            }
        });
    }else{
        $("#div_displat").show();
    }
    $("#btn_save").click(function () {
        if(id){
            if($("#form_inp_imei").val()){
                $.ajax({
                    type : 'POST',
                    url : URL_SAVE,
                    datatype : 'json',
                    data : {
                        id:id,
                        imei:$("#form_inp_imei").val(),
                        org:$("#form_inp_org").val(),
                        man:$("#form_inp_man").val(),
                        phone:$("#form_inp_phone").val()
                    },
                    success : function(data) {
                        if(data >= 1){
                            parent.layer.msg("保存成功",{icon:1});
                            parent.$("#btn_query").trigger('click');
                            var index = parent.layer.getFrameIndex(window.name);
                            parent.layer.close(index);
                        }else{
                            layer.msg("程序异常，请联系系统管理员。");
                        }
                    }
                });
            }else{
                layer.msg("IMEI为必填项...");
            }
        }else{
            if($("#form_inp_imei").val() && $("#form_inp_sd").val()){
                $.ajax({
                    type : 'POST',
                    url : URL_SAVE,
                    datatype : 'json',
                    data : {
                        imei:$("#form_inp_imei").val(),
                        org:$("#form_inp_org").val(),
                        man:$("#form_inp_man").val(),
                        phone:$("#form_inp_phone").val(),
                        servicedate:$("#form_inp_sd").val()
                    },
                    success : function(data) {
                        if(data >= 1){
                            parent.layer.msg("保存成功",{icon:1});
                            parent.$("#btn_query").trigger('click');
                            var index = parent.layer.getFrameIndex(window.name);
                            parent.layer.close(index);
                        }else{
                            layer.msg("程序异常，请联系系统管理员。");
                        }
                    }
                });
            }else{
                layer.msg("IMEI和服务截止日期为必填项...");
            }
        }

    });
});