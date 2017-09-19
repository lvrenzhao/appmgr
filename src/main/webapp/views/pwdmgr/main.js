var URL_CHANGEPWD = app.ctx+"/changepwd.do";

$(function () {

    $("#btn_save").click(function () {
        if($("#oldpwd").val() && $("#newpwd").val()){
            $.ajax({
                type : 'POST',
                url : URL_CHANGEPWD,
                datatype : 'json',
                data : {
                    newpwd:$("#newpwd").val(),
                    oldpwd:$("#oldpwd").val()
                },
                success : function(data) {
                    layer.msg(["","密码重置成功，请重新登录。","原密码不正确...","找不到admin用户，请联系系统管理员。"][data]);
                }
            });
        }else{
            layer.msg("请务必填写完整。");
            return ;
        }
    });

});