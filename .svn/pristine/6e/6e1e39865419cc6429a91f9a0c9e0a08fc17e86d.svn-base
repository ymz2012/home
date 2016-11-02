
/*************************************************************************
 *　对象名    :    t_animationEvent
 *　功能        :   CSS3动画执行完毕\开始\循环执行后执行的一些事件  兼容webkit\Mozilla\Opera\MS等浏览器
 *　参数        :    @param 无
 *　返回        :    返回 事件参数
 *************************************************************************/
var t_animationEvent = function () {
};
t_animationEvent.prototype.t_transitionend = function () {
    var t;
    var el = document.createElement('t_element');
    var transitions = {
        'transition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'MozTransition': 'transitionend',
        'WebkitTransition': 'webkitTransitionEnd',
        'MsTransition': 'msTransitionEnd'
    }
    for (t in transitions) {
        if (el.style[t] !== undefined) {
            return transitions[t];
        }
    }
}

t_animationEvent.prototype.t_animationstart = function () {
    var t;
    var el = document.createElement('t_element');
    var animations = {
        'animation': 'animationstart',
        'OAnimation': 'oAnimationStart',
        'MozAnimation': 'animationstart',
        'WebkitAnimation': 'webkitAnimationStart',
        'MsAnimation': 'msAnimationStart'
    }
    for (t in animations) {
        if (el.style[t] !== undefined) {
            return animations[t];
        }
    }
};

t_animationEvent.prototype.t_animationend = function () {
    var t;
    var el = document.createElement('t_element');
    var animations = {
        'animation': 'animationend',
        'OAnimation': 'oAnimationEnd',
        'MozAnimation': 'animationend',
        'WebkitAnimation': 'webkitAnimationEnd',
        'MsAnimation': 'msAnimationEnd'
    }
    for (t in animations) {
        if (el.style[t] !== undefined) {
            return animations[t];
        }
    }
};

t_animationEvent.prototype.t_animationiteration = function () {
    var t;
    var el = document.createElement('t_element');
    var animations = {
        'animation': 'animationiteration',
        'OAnimation': 'oAnimationIteration',
        'MozAnimation': 'animationiteration',
        'WebkitAnimation': 'webkitAnimationIteration',
        'MsAnimation': 'msAnimationIteration'
    }
    for (t in animations) {
        if (el.style[t] !== undefined) {
            return animations[t];
        }
    }
};




var uFlag = 0;
$(function(){
    var tips = new Array();
    tips[0] = new Array();
    tips[0][0] = '孕育健康管理工具';
    tips[0][1] = '备孕、孕期、育儿三大模式，一站式解决孕育全阶段健康问题。';

    tips[1] = new Array();
    tips[1][0] = '健康记录';
    tips[1][1] = '科学记录妈妈和宝宝的健康状况，个性化推荐你想知道和必须知道的健康建议';

    tips[2] = new Array();
    tips[2][0] = '提升受孕几率';
    tips[2][1] = '精准推算每天受孕几率，推荐最佳同房时机';

    tips[3] = new Array();
    tips[3][0] = '科学数胎动';
    tips[3][1] = '简洁易用的胎动计数器，让准妈妈轻松掌握胎儿“动”态';

    tips[4] = new Array();
    tips[4][0] = '宝宝成长';
    tips[4][1] = '记录宝宝成长点滴，帮助新手爸妈合理喂养、科学育儿';

    tips[5] = new Array();
    tips[5][0] = '更多贴心实用工具';
    tips[5][1] = '备孕咨询、能不能吃、产检提醒、宝宝疫苗等丰富工具不断更新';

    tips[6] = new Array();
    tips[6][0] = '好孕妈社区';
    tips[6][1] = '解答孕育问题、交流孕产经验，分享育儿妙招';

    init();

    var backgroundPosition;
    var flag = new Array();
    flag = [3, 2, 2, 2, 2, 2, 2];
    /*滑过菜单事件*/
    $("#menus").find(".tab").hover(function(){
        var indexs = $(this).index();
        if(flag[indexs] != 2){
            return;
        }
        flag[indexs] = 1;
        backgroundPosition = $(this).find(".img").css('background-position');
        var hoverPosition = $(this).find(".img").data('hovers');
        $(this).find(".img").css("background-position",hoverPosition);
    },function(){
       var indexs = $(this).index();
        if(flag[indexs] != 1){
            return;
        }
        flag[indexs] = 2;
        $(this).find(".img").css("background-position",backgroundPosition);
    });

    /*点击菜单事件*/
    $('#menus').find(".tab").off('click').on('click',function(){
        var indexs = $(this).index();
        if(flag[indexs] != 1){
            return;
        }
        for(var i = 0; i < 7; i++){
            flag[i] = 2;
        }
        flag[indexs] = 3;
        $("#titleTop").hide().html(tips[indexs][0]).fadeIn(500);
        $("#titleBottom").hide().html(tips[indexs][1]).fadeIn(1000);
        $("#phone_bg").hide().addClass("slideInRight").attr('src',"image/index/pc/iphones/bg_" + indexs + ".png").fadeIn();
        $(".img").removeClass("on");
        $("#menus").find('.img').each(function(){
            $(this).css('background-position',$(this).data('normal'));
        });
        $(this).find('.img').addClass('on').css('background-position',$(this).find('.img').data("clicks"));
        tabs(indexs);
    });

    /*点击左右按钮事件*/
    $('#leftBtn').off('click').on('click',function(){
        var deviationLeft = $("#menus").find('ul').css('left');
        if(deviationLeft == '-269px'){
            $("#menus").find('ul').animate({'left':'0px'},500);
            $(this).find('.arrowImg').css('background-position','0px 0px');
            $('#rightBtn').find('.arrowImg').css('background-position','-20px -30px');
        }
    });
    $('#rightBtn').off('click').on('click',function(){
        var deviationLeft = $("#menus").find('ul').css('left');
        if(deviationLeft == '0px'){
            $("#menus").find('ul').animate({'left':'-269px'},500);
            $(this).find('.arrowImg').css('background-position','-20px 0px');
            $('#leftBtn').find('.arrowImg').css('background-position','0px -30px');
        }
    });

    /*点击跳转下载*/
    $('#iosBtn').off('click').on('click',function(){
       window.location = "https://itunes.apple.com/cn/app/hao-yun-ma-bei-yun-huai-yun/id929001462?mt=8";
    });
    $('#androidBtn').off('click').on('click',function(){
        window.location = "http://dayima.cn/s/androidupdate01";
    });

    var t_animationEvents = new t_animationEvent();
    var ani = t_animationEvents.t_animationend();
    var ani_start = t_animationEvents.t_animationstart();
    $(".ani_1 ").on(ani, function () {
        $(".ani_1 .ele_1_tag").addClass("fadeInLeft");
        $(".ani_1 .ele_1").addClass("fadeInLeft");
    });

    $(".ani_1 .ele_1").on(ani, function () {

        $(".ani_1 .ele_2").addClass("fadeInRightMiddle");
        $(".ani_1 .ele_2_tag").addClass("fadeInRightMiddle");

        setTimeout(function(){
            $(".ani_1 .ele_3").addClass("fadeInLeftMiddle");
            $(".ani_1 .ele_3_tag").addClass("fadeInLeftMiddle");
        },1000)
    });

    $(".ani_4").find(".ele_2").on(ani, function () {
        $(".board").addClass("fadeIn");
    });

    $(".board").on(ani, function () {
        $(".right4").find(".arrow").addClass("rotateInDownRight");
        $(".right4").find(".barometer").addClass("fadeInDown");
    });

    $(".ani_2").find(".runnings").on(ani, function () {
        $(".ani_2").find(".ele_1").css({"background": "url(image/index/pc/ani/2/3.png)","opacity":"1"}).removeClass("runningRight").parent("#runnings").removeAttr("style");

        setTimeout(function () {
            $(".right2 .tips").addClass("fadeIn");
            $(".ani_2").find(".ele_2").addClass("fadeIn");
        }, 200)
    });

    $(".ani_4").on(ani, function () {
        setTimeout(function () {
            $(".ani_4").find(".ele_1").find(".leftFooter").attr("src", 'image/index/pc/ani/4/quickening_leftfoot_blue.png');
        }, 400);

        setTimeout(function () {
            $(".ani_4").find(".ele_1").find(".rightFooter").attr("src", 'image/index/pc/ani/4/quickening_rightfoot_blue.png');
        }, 500);

        setTimeout(function () {
            $(".ani_4").find(".ele_1").find(".leftFooter").attr("src", 'image/index/pc/ani/4/quickening_leftfoot.png');

        }, 700);

        setTimeout(function () {
            $(".ani_4").find(".ele_1").find(".rightFooter").attr("src", 'image/index/pc/ani/4/quickening_rightfoot.png');
        }, 1000);

        setTimeout(function () {
            $(".ani_4").find(".ele_2").addClass("pulse");
        }, 1200)
    });

    $(".ani_5").on(ani, function () {
        $(this).find(".ele_1").addClass("fadeInDown");
    });

    $(".ani_5").find(".ele_1").on(ani, function () {
        $(".ani_5 .ele_1").addClass("again_decline");
        $(".ani_5 .ele_2 .plate").addClass("qt_decline");
        $(".ani_5 .ele_2 .verLine").addClass("bt_decline");

        $(".ani_5").find(".ele_3").addClass("rotatePointer");
    });

    $(".ani_6").on(ani, function () {
        $(".ani_6").find(".sc").addClass("decline");
    });

    $(".ani_6").find(".sc").on(ani, function () {
        $(".ani_6").find(".sc").addClass("rise");
        $(".ani_6").find(".boxSel").addClass("q_rise");
    });

    $(".ani_7").on(ani, function () {
        $(this).find(".ele_1").addClass("flash");
        $(".ani_7").find(".ele_2").addClass("fadeIn");
    });
    
    $(".ani_7 .ele_2").on(ani, function () {
        $(".ani_7").find(".ele_3").addClass("fadeIn");

    });
    $(".ani_7 .ele_3").on(ani_start, function () {
        setTimeout(function () {
            $(".ani_7").find(".ele_4").addClass("fadeInLeftMiddles");
            $(".ani_7").find(".ele_6").addClass("fadeInLeftMiddles");
            $(".ani_7").find(".ele_8").addClass("fadeInLeftMiddles");

            $(".ani_7").find(".ele_5").addClass("fadeInRightMiddles");
            $(".ani_7").find(".ele_7").addClass("fadeInRightMiddles");
            $(".ani_7").find(".ele_9").addClass("fadeInRightMiddles");
        }, 400);
    });

    $(".ani_7").find(".ele_5").on(ani, function () {
        $(".right7").find(".mouth").addClass("tada");
    });

    $(".right7").find(".mouth").on(ani, function () {
        $(".right7").find(".qqbb").addClass("rollIn");
    });

    $(".right7").find(".qqbb").on(ani, function () {
        $(".right7").find(".bm").addClass("fadeInDown");
    });

    $(".ani_6").find(".sc").on(ani, function () {
        $(".right6").find(".hands").addClass("shaking");
    });

    $(".right6").find(".hands").on(ani, function () {
        $(".right6").find(".papa").addClass("fadeIn");
    });

    $(".right6").find(".papa").on(ani, function () {
        $(".right6").find(".tips").addClass("fadeInDown");
    });

    $(".leftCircle").on(ani_start, function () {
        var nums = 0;
        var timing_ani = setInterval(function () {
            if (nums == 88) {
                clearInterval(timing_ani);
                $("#timing_ani").html(88);
            } else {
                $("#timing_ani").html(nums++);
            }
        }, 20)
    });
    $(".leftCircle").on(ani, function () {
        $(".ani_3 .ele_4").addClass("fadeInLeft");
        $(".ani_3 .ele_5").addClass("fadeInRight");
        $(".ani_3 .ele_6").addClass("rotateInUpLeft");
    });

    $(".ani_3 .ele_4").on(ani, function () {
        $(".right3 .tips_1").addClass("fadeInDown");
    });

});


var addTeam = function (indexs) {
    console.log('indexs==' + indexs);
    switch (indexs) {
        case 1:
            //do something
            $(".ani_1").show();
            break;
        case 2:
            $(".ani_2").show();
            $(".right2").show();
            $("#runnings").css({
                opacity: 0
            });
            setTimeout(function () {
                $(".ani_2").find(".ele_1").addClass("runningRight");
                $("#runnings").css({
                    "-webkit-animation-play-state": "running",
                    "-moz-animation-play-state": "running",
                    "animation-play-state": "running",
                    '-webkit-animation-name': 'runnings',
                    'animation-name': 'runnings',
                    '-webkit-animation-duration': '1.5s',
                    'animation-duration': '1.5s'
                });
            }, 200);

            break;
        case 3:
            $(".ani_3").show();
            $(".right3").show();
            $("#rightCircle").css({
                "opacity": "0"
            });
            $("#leftCircle").css({
                "opacity": "0"
            });
            setTimeout(function () {
                $("#rightCircle").css({
                    "opacity": "1",
                    "-webkit-animation-play-state": "running",
                    "-moz-animation-play-state": "running",
                    "animation-play-state": "running",
                    '-webkit-animation': 'circleProgressLoad_right 1.8s linear',
                    'animation': 'circleProgressLoad_right 1.8s linear'
                });
                $("#leftCircle").css({
                    "opacity": "1",
                    "-webkit-animation-play-state": "running",
                    "-moz-animation-play-state": "running",
                    "animation-play-state": "running",
                    '-webkit-animation': 'circleProgressLoad_left 1.8s linear',
                    'animation': 'circleProgressLoad_left 1.8s linear'
                });
            }, 200);

            break;
        case 4:
            $(".ani_4").show();
            $(".right4").show();
            break;
        case 5:
            $(".ani_5").show();
            break;
        case 6:
            $(".ani_6").show();
            $(".right6").show();
            break;
        case 7:
            $(".ani_7").show();
            $(".right7").show();
            break;
    }
}

var removeTeam = function (indexs) {
    switch (indexs) {
        case 1:
            $(".ani_1").find(".ele_1").removeClass("fadeInLeft");
            $(".ani_1").find(".ele_2").removeClass("fadeInRightMiddle");
            $(".ani_1").find(".ele_3").removeClass("fadeInLeftMiddle");
            $(".ani_1").find(".ele_1_tag").removeClass("fadeInLeft");
            $(".ani_1").find(".ele_2_tag").removeClass("fadeInRightMiddle");
            $(".ani_1").find(".ele_3_tag").removeClass("fadeInLeftMiddle");
            break;
        case 2:
            setTimeout(function () {
                $(".ani_2").find(".ele_1").removeAttr("style");
                $(".right2 .tips").removeClass("fadeIn");
                $(".ani_2").find(".ele_2").removeClass("fadeIn");
            }, 10);
            break;
        case 3:
            setTimeout(function () {
                $(".ani_3 .ele_4").removeClass("fadeInLeft");
                $(".ani_3 .ele_5").removeClass("fadeInRight");
                $(".ani_3 .ele_6").removeClass("rotateInUpLeft");
                $(".right3 .tips_1").removeClass("fadeInDown");
            }, 10);
            break;
        case 4:
            $(".ani_4").find(".ele_2").removeClass("pulse");
            $(".right4").find(".board").removeClass("fadeIn");
            $(".right4").find(".arrow").removeClass("rotateInDownRight");
            $(".right4").find(".barometer").removeClass("fadeInDown");
            break;
        case 5:
            $(".ani_5").find(".ele_1").removeClass("fadeInDown");
            $(".ani_5").find(".ele_3").removeClass("rotatePointer");
            $(".ani_5 .ele_1").removeClass("again_decline");
            $(".ani_5 .ele_2 .plate").removeClass("qt_decline");
            $(".ani_5 .ele_2 .verLine").removeClass("bt_decline");
            break;
        case 6:
            $(".ani_6").find(".sc").removeClass("rise");
            $(".ani_6").find(".sc").removeClass("decline");
            $(".ani_6").find(".boxSel").removeClass("q_rise");
            $(".right6").find(".hands").removeClass("shaking");
            $(".right6").find(".tips").removeClass("fadeInDown");
            $(".right6").find(".papa").removeClass("fadeIn");
            break;
        case 7:
            $(".ani_7").find(".ele_1").removeClass("flash");
            $(".ani_7").find(".ele_2").removeClass("fadeIn");
            $(".ani_7").find(".ele_3").removeClass("fadeIn");

            $(".ani_7").find(".ele_4").removeClass("fadeInLeftMiddles");
            $(".ani_7").find(".ele_5").removeClass("fadeInRightMiddles");

            $(".ani_7").find(".ele_6").removeClass("fadeInLeftMiddles");
            $(".ani_7").find(".ele_7").removeClass("fadeInRightMiddles");

            $(".ani_7").find(".ele_8").removeClass("fadeInLeftMiddles");
            $(".ani_7").find(".ele_9").removeClass("fadeInRightMiddles");
            break;
    }
};
var init = function(){
    $('.tab').eq(0).find('.img').addClass('on');
    var firstClickPositions = $('.tab').eq(0).find('.img').data('clicks');
    $('.tab').eq(0).find('.img').css('background-position',firstClickPositions);
    tabs(0);
};
var tabs = function(indexs){
    indexs = indexs + 1;
    removeTeam(indexs);
    $(".rightTips").hide();
    $(".ani").hide();
    addTeam(indexs);
};


