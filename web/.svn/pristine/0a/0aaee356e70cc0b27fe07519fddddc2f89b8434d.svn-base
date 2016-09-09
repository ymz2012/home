(function(){
    $(function(){
        new canEatList();
    })
    var canEatList = function(){
        this.int();
    }
    canEatList.prototype.int = function(){
        this.readDom();
        this.bindEven();
    }
    canEatList.prototype.readDom = function(){
        var _this = this;
        var foodId = getQueryString("food_id")
        var readFun = {
            ejsGet: function (option) {
                var ohtml = new EJS({
                    'element': option.ejsid
                }).render(option.data);
                (option.tagid).html(ohtml);
            },
            readGoodsDetail: function(data,cb){
                this.ejsGet({
                    data:data,
                    ejsid: "ejs_good_box",
                    tagid: $("#good_box")
                });
                cb&&cb();
            }
        }

        api.canEat_detail({
            foodId:foodId
        },function(data){
            console.log(data);
            if(data.errno == 0){
                readFun.readGoodsDetail(data,function(){
                    var ua = navigator.userAgent.toLowerCase();

                    var htmls = '<div style="height:100px; background:#fff;"></div>'+'<div class="footer_fixed" id="footer_fixed">'+
                        '<div class="close" id="close"></div>'+
                        '<div class="down" id="down"></div>'+
                        '</div>';
                    if(!(/dayima/gi.test(ua))) {
                        $('#tool').remove();
                        $('body').append(htmls);
                    }
                });
                _this.bindeven();
            }else{
                alert(data.errdesc);
            }
        },function () {
            alert("系统异常");
        })



    };
    canEatList.prototype.bindEven = function(){
        var evenFun = {
            selectGoodFun:function(e){
                e.preventDefault();
            }
        }
        this.bindeven = function() {
            $("#list").find('.good_box').off('click').on('click', evenFun.selectGoodFun);
            $('#down').off('click').on('click',function(){
                var ua = navigator.userAgent.toLowerCase();
                if (/android/.test(ua)) {
                    window.location.href = "http://www.haoyunma.com?no_cache=" + 1e6*Math.random();
                } else {
                    window.location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.yoloho.ubaby";
                }
            });
            $('#close').off('click').on('click',function(){
                $('#footer_fixed').css('display','none');
            });
        }
    }
})();