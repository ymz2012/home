/**
 * Created by ymz on 17/3/16.
 */

/**单例模式
 * 将方法和执行分割开来,代码清晰明了
 * 方法的互相访问
 */
(function(){
    $(function(){
        new baidu();
    });
    function baidu(){
        this.init();
    };

    baidu.prototype.init = function(){
        this.func();
        this.bindEven();
    };
    baidu.prototype.func = function(){

        var storage = window.localStorage;
        this.evenFun = {
            //加载存储的颜色
            loadIng:function(){
                if(storage.getItem("menuTitle")!=null){
                    var newColor = storage.getItem("menuTitle");
                    $('.wrapper').css("background-color",newColor);
                }else if(Cookie.read("menuTitle")!=null){
                    var newColor = Cookie.read("menuTitle");
                    $('.wrapper').css("background-color",newColor);
                }
            },
            //点击更换肤色并存储
            clickColor:function(e){
                $('.wrapper').css("background-color",e);
                if (window.localStorage) {
                    localStorage.setItem("menuTitle",e);
                } else {
                    Cookie.write("menuTitle",e);
                }
            },
            //右侧边栏划出函数
            rightGo:function(){
                $(".moreProduct").mouseover(function () {
                    $(".hover").css("display","block");
                });
                $(".hover")[0].onmouseleave = function(){
                    this.style.display = "none";
                }
            },
            //点击切换tab
            kotab:function(){
                $("#tabUl li").each(function(index){
                    var linode = $(this);
                    $(this).click(function(){
                        $(".tabList li.listyle").removeClass("listyle");
                        linode.addClass("listyle");
                        $('.show').removeClass("show").addClass("hide");
                        $(".tabContent").eq(index).removeClass("hide").addClass("show");
                    })
                })
            }
        };
        console.log(this);
        //return evenFun;

    };
    baidu.prototype.bindEven = function(){
        var _this = this;
        console.log(this);
        //执行上面的方法
        this.evenFun.loadIng();
        this.evenFun.rightGo();
        this.evenFun.kotab();
        var clickFun = {
            storColor:function(){
                var color=$(this).data('color');
                _this.evenFun.clickColor(color);
            }
        }
        //执行切换背景颜色的函数
        $(".changeColor").off('click').on('click','span',clickFun.storColor);
    };
})()
