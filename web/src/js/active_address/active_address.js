$(function () {
    var h = $(window).height();
    var w = $(window).width();
    $(".form").height(h);

    var minH = 1073 / 750 * w;
    $(".form").css("min-height", minH + "px");
});
var proPicker = new mui.PopPicker();
var cityPicker = new mui.PopPicker();
var townPicker = new mui.PopPicker();
var province=[{value:-1,text:"请选择省"}];
var city=[{value:-74,text:"请选择市"}];
var town=[{value:-1149,text:"请选择区"}];
var getData = function(obj,area,id,cb){
    api.area({
        id:id
    }, function (data) {
        for(var i = 0; i < data.chinaAreaList.length; i++){
            area[i+1] = {};
            area[i+1].value = data.chinaAreaList[i].id;
            area[i+1].text = data.chinaAreaList[i].name;
        }
        obj.setData(area);
        cb&&cb();
    });
};
var getData1 = function(obj,area,id,cb){
    api.area({
        id:id
    }, function (data) {
        for(var i = 0; i < data.chinaAreaList.length; i++){
            area[i+1] = {};
            area[i+1].value = data.chinaAreaList[i].id;
            area[i+1].text = data.chinaAreaList[i].name;
        }
        cb&&cb();
    });
}
var select = function(obj,area,id,cb){
    getData(obj,area,id,function(){
        cb&&cb();
    });
    $("#loc_province").off("click").on("click",function(){
        var theDom = this;
            proPicker.show(function(items) {
                $(theDom).val(items[0].text);
                $(theDom).attr('data-id',items[0].value);
                getData(cityPicker,city,items[0].value);
                $("#loc_city").val("请选择市");
                $("#loc_town").val('请选择区');
            });

    });
    $("#loc_city").off("click").on("click",function(){
        var theDom = this;
        cityPicker.setData(city);
        cityPicker.show(function(items) {
            $(theDom).val(items[0].text);
            $(theDom).attr('data-id',items[0].value);
            getData(townPicker,town,items[0].value);
            $("#loc_town").val('请选择区');
        })

    });
    $("#loc_town").off("click").on("click",function(){
        var theDom = this;
        townPicker.setData(town);
        townPicker.show(function(items) {
            $(theDom).val(items[0].text);
            $(theDom).attr('data-id',items[0].value);
        });
    });
}
$(function () {
    var uid = $("meta[name=hym_uid]").attr("content") || "";
    var code = $("meta[name=code]").attr("content") || "";
    if(uid == ""||uid == "${hym_uid}"){
        select(proPicker,province,0,function(){});
    }else{
        api.getActiveAddress({
            uid: uid,
            addressType:1
        }, function (data) {
            if(data.errno == 0){
                console.log(data);
                if(data.addressInfoList.length<=0){
                    select(proPicker,province,0,function(){});
                }else {
                   var pid=data.addressInfoList[0].province,
                        cid=data.addressInfoList[0].city,
                        tid=data.addressInfoList[0].area;
                    select(proPicker,province,0,function(){
                        proPicker.pickers[0].setSelectedValue(pid);
                        var data1 = proPicker.getSelectedItems();
                        console.log(data1);
                        $("#loc_province").val(data1[0].text);
                        select(cityPicker,city,pid,function(){
                            cityPicker.pickers[0].setSelectedValue(cid);
                            var data2 = cityPicker.getSelectedItems();
                            console.log(data2);
                            $("#loc_city").val(data2[0].text);
                            select(townPicker,town,cid,function(){
                                townPicker.pickers[0].setSelectedValue(tid);
                                var data3 = townPicker.getSelectedItems();
                                console.log(data3);
                                $("#loc_town").val(data3[0].text);
                            });
                        });
                    });
                }
                if(data.addressInfoList.length>0) {
                    $("#cus_name").val(data.addressInfoList[0].userName);
                    $("#cus_tel").val(data.addressInfoList[0].phone);
                    $("#addr_details").val(data.addressInfoList[0].detailAddress);
                    $("#save_btn").attr('data-id', data.addressInfoList[0].id);
                }
            }else{
                alert(data.errdesc)
            }
        },function(){
            alert("系统异常")
        });
    }
    $("#cus_name").off('input').on('input',function(){
        var cus_name = $("#cus_name").val();
        if(cus_name.length > 20){
            $("#cus_name").val(cus_name.slice(0, 20))
        }
    })
    $("#cus_tel").off('blur').on('blur',function(){
        var cus_tel = $("#cus_tel").val().replace(/\s+/g,"");
        $("#cus_tel").val(cus_tel)
    });
    $("#cus_name").off('blur').on('blur',function(){
        var cus_name = $("#cus_name").val().replace(/\s+/g,"");
        $("#cus_name").val(cus_name)
    });
    $("#addr_details").off('blur').on('blur',function(){
        var addr_details = $("#addr_details").val().replace(/\s+/g,"");
        $("#addr_details").val(addr_details)
    });
    //保存地址 （saveAddressData）
    $("#save_btn").off("click").on("click",function(e){
        e.preventDefault();
        var cus_name = $("#cus_name").val();
        var tel = $("#cus_tel").val();
        var loc_province = $("#loc_province").data('id');
        var loc_city = $("#loc_city").data('id');
        var loc_town = $("#loc_town").data('id');
        var addr_details = $("#addr_details").val();
        var id = $("#save_btn").data('id');
        if(check()){
            api.saveActiveAddress({
                userName:cus_name,
                phone:tel,
                province:loc_province,
                city:loc_city,
                area:loc_town,
                detailAddress:addr_details,
                uid: uid,
                addressType:1,
                isDefault:0,
                id:id,
                code:code
            },function(data){
                console.log(data);
                if(data.errno == 0){
                    if(!data.jumpUrl){
                        alert("地址保存成功");

                    }else{
                        window.location.replace(data.jumpUrl);
                    }

                }else{
                    alert("数据获取失败");
                }
            });
        };
    });

});


