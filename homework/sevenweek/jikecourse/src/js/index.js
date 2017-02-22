/**
 * Created by ymz on 17/2/4.
 */

$(document).ready(function(){
    //设置点击回到顶部按钮
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
    //点击顶部搜索框特效

    $('#search-btn').on("click",function(){
        $('#searchbox').addClass('scale');
    })
    $('#close-btn').on("click",function(){
        $('#searchbox').removeClass('scale');
    })


    //切换课程列表排版方式
    $('.kuai-icon').on("click",function(){
        $('#changeid').removeClass('lesson-list2').addClass('lesson-list');
    })
    $('.list-icon').on("click",function(){
        $('#changeid').removeClass('lesson-list').addClass('lesson-list2');
    })


    //鼠标滑过块状排饭效果问题

/*    $('.lesson-list li').each(function(index){
        var linode = $(this);
        $(this).mouseover(function(){

        })
    })*/
})


