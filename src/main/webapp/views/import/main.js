
var URL_SUBMIT = app.ctx+"/import.do";

//设定Excel一共读取哪些列
var EXCEL_COLS = ['A','B','C','D','E'];
//设定Excel哪些是必填列，便于数据检查
var EXCEL_COLS_REQUERE= ['A','E'];
//设定Excel哪些是日期列，便于数据检查
var EXCEL_COLS_DATE=['E'];
//设定EXCEL哪些是数值列，便于数据检查
var EXCEL_COLS_NUMBER=['D'];
//设定Excel从哪一行开始读取
var EXCEL_ROW_START = 2;


var EXCEL_ROW_DATAS = []; //从前端读取excel的数据。
var EXCEL_WRONGS={}; //检测到非法的数据
$(function () {
    //上传需求单按钮处理
    $("#btn_upload").click(function () {
        $("#upload_file").trigger("click");
    });
    var sublox;
    $("#upload_file").change(function () {
        sublox = layer.msg("数据处理中...",{time:600000});
        var file = document.getElementById("upload_file").files[0];
        if(file){
            r = new FileReader();
            r.onload = function(e){
                // try{
                EXCEL_ROW_DATAS = [];
                EXCEL_WRONGS = {};
                $("#tips").hide();
                var data = e.target.result;
                var workbook = XLSX.read(data, {type: 'binary'});
                var sheet_first = workbook.Sheets[workbook.SheetNames[0]];
                var max_rn = getMaxRowNumber(sheet_first);
                for(var i = EXCEL_ROW_START ; i<= max_rn ; i++){
                    var row = [];
                    for(var j  = 0 ; j < EXCEL_COLS.length ; j++){
                        var cell = sheet_first[EXCEL_COLS[j]+i];
                        if(cell && cell.w){
                            row.push($.trim(cell.w));
                        }else{
                            row.push("");
                        }
                    }
                    EXCEL_ROW_DATAS.push(row);
                }
                loadTable();//加载表格
                layer.close(sublox);
                //如果没有非法数据，则开放提交按钮
                if(isEmptyObject(EXCEL_WRONGS)){
                    $("#btn_submit").removeAttr("disabled");
                }
                // }catch(err){
                //     alert("未能正确解析，请确保文件是Excel类型、浏览器是现代浏览器。");
                // }
                //清除file防止同一文件无法触发onchange事件
                $("#upload_file").val('');
            };
            r.readAsBinaryString(file);
        }
    });
    //提交数据按钮处理
    $("#btn_submit").click(function () {

        layer.confirm('确定提交数据吗？', {
            btn: ['确定','取消'] //按钮
        }, function(index){
            var sublox = layer.msg("数据上传中...",{time:600000});
            $.ajax({
                type : 'POST',
                url : URL_SUBMIT,
                dataType : 'json',
                data : {
                    datas:JSON.stringify(EXCEL_ROW_DATAS)
                },
                success : function(data) {
                    if (data > 0) {
                        layer.msg("数据上传成功!" ,{icon: 1});
                    } else {
                        layer.msg("数据上传失败!" ,{icon: 2});
                    }
                    $("#tablebody").html("");
                    $("#btn_submit").attr("disabled","disabled");
                    EXCEL_ROW_DATAS = [];
                    EXCEL_WRONGS = {};
                    $("#tips").show();
                    layer.close(sublox);
                    layer.close(index);
                }
            });
        }, function(index){
            layer.close(index);
        });
    });
});
//根据excel数据绘制表格并加载
function loadTable() {
    var html_table_body = "";
    for(var i = 0 ;i < EXCEL_ROW_DATAS.length ; i++){
        html_table_body += "<tr id='TR_"+i+"'><td>"+(i+1)+"</td>";
        checkdata(i);//数据校验(常规检查)
        for(var j = 0 ; j < EXCEL_ROW_DATAS[i].length ; j++){
            var cell = EXCEL_ROW_DATAS[i][j];
            html_table_body += "<td id='TD_"+i+"_"+j+"'>"+getNbsp(cell)+"</td>";
        }
        html_table_body += "</tr>";
    }
    $("#tablebody").html(html_table_body);
    //根据检查结果为表格添加标识
    markWroingData();
}

//常规检查
function checkdata(rowindex) {
    //常规检查-必填检查
    for(var i = 0 ; i<EXCEL_COLS_REQUERE.length ; i++){
        var idx = EXCEL_COLS.indexOf(EXCEL_COLS_REQUERE[i]);
        var cell = EXCEL_ROW_DATAS[rowindex][idx];
        if(!cell || cell.length == 0){
            var TDIDX = "TD_"+rowindex+"_"+idx;
            if(EXCEL_WRONGS["TR_"+rowindex]){
                EXCEL_WRONGS["TR_"+rowindex][TDIDX] = $("THEAD TR TH")[idx+1].innerText + " 不能为空!";
            }else{
                var obj = {};
                obj[TDIDX] = $("THEAD TR TH")[idx+1].innerText + " 不能为空!";
                EXCEL_WRONGS["TR_"+rowindex] = obj;
            }
        }
    }
    //常规检查-合法性检查（日期）
    for(var i = 0 ; i<EXCEL_COLS_DATE.length ; i++){
        var idx = EXCEL_COLS.indexOf(EXCEL_COLS_DATE[i]);
        var cell = EXCEL_ROW_DATAS[rowindex][idx];
        if(cell.length > 0 && isDate(cell) ==false){
            var TDIDX = "TD_"+rowindex+"_"+idx;
            if(EXCEL_WRONGS["TR_"+rowindex]){
                EXCEL_WRONGS["TR_"+rowindex][TDIDX] = $("THEAD TR TH")[idx+1].innerText + " 不是正确的日期格式，标准格式为:YYYY-MM-DD";
            }else{
                var obj = {};
                obj[TDIDX] = $("THEAD TR TH")[idx+1].innerText + " 不是正确的日期格式，标准格式为:YYYY-MM-DD";
                EXCEL_WRONGS["TR_"+rowindex] = obj;
            }
        }
    }
    //常规检查-合法性检查（数值）
    for(var i = 0 ; i<EXCEL_COLS_NUMBER.length ; i++){
        var idx = EXCEL_COLS.indexOf(EXCEL_COLS_NUMBER[i]);
        var cell = EXCEL_ROW_DATAS[rowindex][idx];
        if(cell.length > 0 && isNaN(cell) == true){
            var TDIDX = "TD_"+rowindex+"_"+idx;
            if(EXCEL_WRONGS["TR_"+rowindex]){
                EXCEL_WRONGS["TR_"+rowindex][TDIDX] = $("THEAD TR TH")[idx+1].innerText + " 必须是数值类型";
            }else{
                var obj = {};
                obj[TDIDX] = $("THEAD TR TH")[idx+1].innerText + " 必须是数值类型";
                EXCEL_WRONGS["TR_"+rowindex] = obj;
            }
        }
    }
}


//给没通过检查的表格行数据添加标记
function markWroingData() {
    $.each(EXCEL_WRONGS, function(key, val) {
        $("#"+key).addClass("warning");
        $.each(val, function(subkey, subval) {
            $("#"+subkey).addClass("danger");
            $("#"+subkey).click(function () {
                layer.tips(subval, "#"+subkey, {
                    tips: [1, '#ff6839'] //还可配置颜色
                });
            });

        });
    });
}

//获取Excel-sheet中最大行数
function getMaxRowNumber(sheet) {
    var max_rn = EXCEL_ROW_START;
    $.each(sheet, function(key, val) {
        var rn = parseInt(key.replace(/[^0-9]/ig,""));
        if(rn > max_rn){
            max_rn = rn;
        }
    });
    return max_rn;
}

function getNbsp(cell) {
    if(!cell || cell.length == 0 ){
        return "&nbsp;";
    }
    return cell;
}

function fixdata(data) {
    var o = "", l = 0, w = 10240;
    for(; l<data.byteLength/w; ++l) o+=String.fromCharCode.apply(null,new Uint8Array(data.slice(l*w,l*w+w)));
    o+=String.fromCharCode.apply(null, new Uint8Array(data.slice(l*w)));
    return o;
}