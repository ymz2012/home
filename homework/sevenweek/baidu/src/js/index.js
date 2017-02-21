/**
 * Created by ymz on 16-12-14.
 */
/*
(function mou() {
console.log(document.getElementsByClassName("moreProduct")[0]);
document.getElementsByClassName("moreProduct")[0].onmouseenter = function(){
    document.getElementsByClassName("hover")[0].style.display = "block";
}
document.getElementsByClassName("hover")[0].onmouseleave = function(){
     this.style.display = "none";
}
})()*/
var timeoutid;
$(document).ready(function () {
    //右侧边栏滑动弹出
    $(".moreProduct").mouseover(function () {
        $(".hover").css("display","block");

    });
    document.getElementsByClassName("hover")[0].onmouseleave = function(){
        this.style.display = "none";
    }

    //点击切换tab
    $("#tabUl li").each(function(index){
        var linode = $(this);
        $(this).click(function(){
            $(".tabList li.listyle").removeClass("listyle");
            linode.addClass("listyle");
            $('.show').removeClass("show").addClass("hide");
            $(".tabContent").eq(index).removeClass("hide").addClass("show");
        })
    })
})
