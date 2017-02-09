/**
 * Created by ymz on 17/2/7.
 */
(function(){
    //导航经过改变宽度和颜色
    $(".headnav li").click(function () {
        var index = $(this).index();
        //alert(index);
        $(this).addClass("current_menu").siblings().removeClass('current_menu');
        //头部导航和左边导航对应
        $(".leftmenu").find(".leftmenu_0").eq(index).removeClass("hidden").siblings().addClass('hidden');

    });
    //左边导航点击上拉
    $(".leftmenu dl dt").click(function () {
        if (false == $(this).siblings("dd").is(":visible")) {//如果不可见点击后变蓝色
            $(this).css('background-position', 'right -30px');
        } else {
            $(this).css('background-position', 'right 0px');//可见点击后变红色
        }

        $(this).siblings('dd').slideToggle('fast').siblings('dt');//.end()

    });
})()