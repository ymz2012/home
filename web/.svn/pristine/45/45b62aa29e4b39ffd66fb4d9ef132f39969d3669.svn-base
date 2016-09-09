var setArea=function(){
    this.init();
}
setArea.prototype.init=function(options){
    this.defaultCity='<option value="-74" selected="selected">选择市</option>';
    this.defaultTown='<option value="-1149" selected="selected">选择区</option>';
}
setArea.prototype.readEjs=function(options){
    var idx=options.idx,
        tagId=options.tagId,
        data=options.data;

    var ohtml = new EJS({
        'element': idx
    }).render(data);
    tagId.html(ohtml);
}
setArea.prototype.getAjax=function(options){
    var id=options.id,
        cb=options.cb;
    api.area({
        id:id
    }, function (data) {
        cb(data);
    });
}
setArea.prototype.setProvince=function(options){

    var _this=this,
        id=options.id,
        pcb=options.cb;

    var provFun=function(data,cb){
        console.log(data);
        var tagId=$("#loc_province");
        if($("#loc_province").length!=0){
            data.province=data;
            _this.readEjs({
                idx:'province',
                tagId:tagId,
                data:data
            });
            $("#loc_city").html(_this.defaultCity);
            $("#loc_town").html(_this.defaultTown);
        }
        cb&&cb(data);
    }


    this.getAjax({
        id:id,
        cb:function(data){
            provFun(data,pcb);
        }
    })
}
setArea.prototype.setCity=function(options){
    var _this=this,
        id=options.id,
        ccb=options.cb,
        cenCon;

    var cityFun=function(data,cb){
        console.log(data);
        var tagId=$("#loc_city");
        data.city=data;
        _this.readEjs({
            idx:'city',
            tagId:tagId,
            data:data
        });
        $("#loc_town").html(_this.defaultTown);
        cb&&cb(data);
        cenCon=$("#loc_city").find("option").eq(1);


        if($("#loc_province").val()==0){
            $("#loc_city").html(_this.defaultCity);
            $("#loc_town").html(_this.defaultTown);
        }

    }

    this.getAjax({
        id:id,
        cb:function(data){
            cityFun(data,ccb);
        }
    });

}

setArea.prototype.setTown=function(options){
    var _this=this,
        id=options.id,
        tcb=options.cb;

    var townFun=function(data,cb){
        var tagId=$("#loc_town");
        data.town=data;
        _this.readEjs({
            idx:'town',
            tagId:tagId,
            data:data
        });
        cb&&cb(data);
    }

    this.getAjax({
        id:id,
        cb:function(data){
            townFun(data,tcb);
        }
    });
}


