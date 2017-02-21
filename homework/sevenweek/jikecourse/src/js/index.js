/**
 * Created by ymz on 17/2/4.
 */

(function(){
    //设置点击回到最上面按钮
    var screenh = document.documentElement.clientHeight || document.body.clientHeight;
    var oTop = document.getElementById("wrapper");
    var gototop = document.getElementById("gototop");
    oTop.style.top = screenh - oTop.offsetHeight + "px";
    oTop_top = screenh - oTop.offsetHeight;
    window.onscroll = function(){
        var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
        oTop.style.top = screenh - oTop.offsetHeight + scrolltop +"px";
    }

    gototop.onclick = function(){
        document.documentElement.scrollTop = document.body.scrollTop =0;
    }
})()
