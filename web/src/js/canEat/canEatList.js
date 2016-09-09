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
        var typeId = getQueryString("type_id");
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
                    tagid: $("#goodListBody")
                })
            }
        }
        this.readGoodBody = function(option,ejsid){
            api.canEat_list(option,function(data){
                console.log(option);
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
        this.readGoodsListData = function(){
            $("#searchInput").val("");
            api.canEat_list({
                typeId:typeId,
                content:""
            },function(data){
                console.log(data);
                if(data.errno == 0){
                    readFun.readGoodsList(data,"ejs_list");
                    $("#goodList").find(".lazy").picLazyLoad();
                    _this.bindeven();
                }else{
                    alert(data.errdesc);
                }
            },function () {
                alert("系统异常");
            })
        }
        this.readGoodsListData();

    }
    canEatList.prototype.bindEven = function(){
        var _this = this;
        var timer =  null;
        var evenFun = {
            selectGoodFun:function(e){
                e.preventDefault();
                var food_id = $(this).data("id");
                var hym_title = encodeURIComponent($(this).data("title"));
                if(local_flag){
                    window.location.href =local_domain + "/canEatDetail.html?food_id=" + food_id + "&hym_title=" + hym_title;
                }else{
                    window.location.href = hym_domain + "/appFood/detail.htm?food_id=" + food_id + "&hym_title=" + hym_title;
                }

            },
            searchFun:function(){
                clearTimeout(timer);
                var content = $("#searchInput").val().replace(/\s+/g,"");
                if(content == ""){
                    _this.readGoodsListData();
                    $("#goodList").find(".lazy").picLazyLoad();
                }else{
                    _this.readGoodBody({typeId:"",content:content},"ejs_search")
                    $("#goodList").find(".lazy").picLazyLoad();
                }
            },
            searchClickFun:function(){
                var content = $("#searchInput").val().replace(/\s+/g,"");
                _this.readGoodBody({typeId:"",content:content},"ejs_list")
                $("#goodList").find(".lazy").picLazyLoad();
            }
        }
        this.bindeven = function() {

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
})()