(function(){
    $(function () {
        new canEatIndex()
    });
    var canEatIndex=function (){
        this.init();
    };
    canEatIndex.prototype.init = function(){
        this.readDom();
        this.bindEven();
    }
    canEatIndex.prototype.readDom = function(){
        var _this = this;

        var readFun = {
            ejsGet: function (option) {
                var ohtml = new EJS({
                    'element': option.ejsid
                }).render(option.data);
                (option.tagid).html(ohtml);
            },
            readGoodsList: function(data,ejsid){
                this.ejsGet({
                    data:data,
                    ejsid: ejsid,
                    tagid: $("#can_eat_body")
                })
            }
        }
        this.readGoodBody = function(option,ejsid){
            api.canEat_list(option,function(data){
                console.log(data);
                if(data.errno == 0){
                    readFun.readGoodsList(data,ejsid);
                    $("#goodList").find(".lazy").picLazyLoad();
                    _this.bindeven();
                }else{
                    alert(data.errdesc);
                }
            },function () {
                alert("系统异常");
            })
        }
        this.readTypeBody = function(){
            api.canEat_index({
            },function(data){
                console.log(data);
                if(data.errno == 0){
                    readFun.readGoodsList(data,"ejs_can_eat");
                    $("#goodList").find(".lazy").picLazyLoad();
                    _this.bindeven();
                }else{
                    alert(data.errdesc);
                }
            },function () {
                alert("系统异常");
            })
        }
        $("#searchInput").val("");
        this.readTypeBody();
    }
    canEatIndex.prototype.bindEven = function(){
        var _this = this;
        var timer = null;
        var evenFun = {
            selectTypeFun:function(e){
                e.preventDefault();
                var type_id = $(this).data("id");
                var hym_title = encodeURIComponent($(this).data("title"));
                if(local_flag){
                    window.location.href =local_domain + "/canEatList.html?type_id=" + type_id + "&hym_title=" + hym_title;
                }else{
                    window.location.href = hym_domain + "/appFood/list.htm?type_id=" + type_id + "&hym_title=" + hym_title;
                }

            },
            searchFun:function(){
                clearTimeout(timer);
                var content = $("#searchInput").val();
                if(content == ""){
                    _this.readTypeBody();
                }else{
                    _this.readGoodBody({content:content},"ejs_search")

                }
            },
            searchClickFun:function(){
                var content = $("#searchInput").val().replace(/\s+/g,"");
                _this.readGoodBody({content:content},"ejs_search1");

            },
            selectGoodFun:function(e){
                e.preventDefault();
                var food_id = $(this).data("id");
                var hym_title = encodeURIComponent($(this).data("title"));
                if(local_flag){
                    window.location.href =local_domain + "/canEatDetail.html?food_id=" + food_id + "&hym_title=" + hym_title;

                }else{
                    window.location.href = hym_domain + "/appFood/detail.htm?food_id=" + food_id + "&hym_title=" + hym_title;

                }

            }
        }
        this.bindeven = function() {
            $("#can_eat_body").find('.can_eat_item').off('click').on('click', evenFun.selectTypeFun);
            $("#searchInput").off('input').on('input',function(){
                if(timer){
                    clearTimeout(timer);
                }
                timer = setTimeout(evenFun.searchFun,500)
            });
            $(document).off('keydown').on('keydown',function(e){
                if(e.keyCode == 13){
                    evenFun.searchClickFun();
                }
            })
            $("#prompt").find('.search_list').off('click').on('click', evenFun.selectGoodFun);
            $("#goodList").find('.good_box').off('click').on('click', evenFun.selectGoodFun);
        }
    }
})();