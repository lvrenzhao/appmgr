var URL_GET = app.ctx + "/getbyid.do";
var URL_SAVE = app.ctx + "/save.do";
$(function () {
   var id = $.getUrlParam("id");
   if(id){
       $.ajax({
           type : 'POST',
           url : URL_GET,
           datatype : 'json',
           data : {
               id:id
           },
           success : function(data) {
               $("#form_inp_old").val(data.fwrq);
           }
       });
   }
   $("#btn_save").click(function () {
       if($("#form_inp_new").val()){
           $.ajax({
               type : 'POST',
               url : URL_SAVE,
               datatype : 'json',
               data : {
                   id:id,
                   type:"SD",
                   oldservicedate:$("#form_inp_old").val(),
                   servicedate:$("#form_inp_new").val()
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
           layer.msg("请完成必填项...");
       }
   });
});