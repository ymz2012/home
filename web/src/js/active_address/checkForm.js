//表单验证
function check(){
    var cus_name = $("#cus_name").val();
    var tel = $("#cus_tel").val();
    var loc_province = $("#loc_province").val();
    var loc_city = $("#loc_city").val();
    var loc_town = $("#loc_town").val();
    var addr_details = $("#addr_details").val();

    if(cus_name.length>40){
        alert("收货人姓名大于40字，请重新填写");
        return false;
    }
    if(cus_name ==""){
        alert("姓名不能为空");
        return false;
    }
    if(tel ==""){
        alert("请填写手机号");
        return false;
    }
    /*if(cardIdName!=""){
     if(!(/^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/.test(cardIdName))){
     alert('身份证格式不正确，检查一下吧')
     return false;
     }
     }*/
    if(!(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(tel))){
        alert("手机号不正确，检查一下吧");
        return false;
    }
    if(loc_province =="error" ||loc_province==-1 || loc_province =="请选择省" ){
        alert("请选择省份");
        return false;
    }
    if(loc_city =="error"  ||loc_city==-74 || loc_city == "请选择市"){
        alert("请选择市");
        return false;
    }
    if(loc_town =="error" ||loc_town==-1149 || loc_town=="请选择区" ){
        alert("请选择县、区");
        return false;
    }
    if(addr_details.length ==""){
        alert("请填写详细地址");
        return false;
    }
    if(addr_details.length >60){
        alert("详细地址不要超过60个字哟");
        return false;
    }
    return true;
}

