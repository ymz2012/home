
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







/**
 * Created by lvlq on 16/2/25.
 */
$(function () {
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


    var backgroundPositions;
    var flag = new Array();		// 1 2
    flag = [3, 2, 2, 2, 2, 2, 2, 2];
    init();
    $(".section .tab .tabImg").hover(function () {
        var indexs = $(this).parent().index();
        if (flag[indexs] != 2) {
            return;
        }
        flag[indexs] = 1;
        var thisClass = $(this).children("div").attr("class");
        backgroundPositions = $(this).children("div").css("background-position");
        var hoverPositions = $(this).children("div").data("hovers");
        $(this).children("div").css("background-position", hoverPositions);
    }, function () {
        var indexs = $(this).parent().index();
        if (flag[indexs] != 1) {
            return;
        }
        flag[indexs] = 2;
        $(this).children("div").css("background-position", backgroundPositions);
    });


    $(".section .tab .tabImg").bind('click', function () {

        var indexs = $(this).parent().index();

        if (flag[indexs] != 1) {
            return;
        }

        for (var i = 0; i < 7; i++) {
            flag[i] = 2;
        }
        flag[indexs] = 3;

        $(".tips").html(tips[indexs][0]);
        $(".tips_second").html(tips[indexs][1]);

        var $tab = $(".tab");

        for (var i = 0; i < $tab.length; i++) {
            if ($tab.eq(i).hasClass("tab-last-child")) {
                uFlag = $tab.eq(i).index();
            }
        }

        $(".tab").removeClass("tab-last-child");
        $(".tipsImg").each(function () {
            $(this).css("background-position", $(this).data("normal"));
        });
        $(this).parent(".tab").addClass("tab-last-child");
        var clickPositions = $(this).children("div").data("clicks");
        $(this).children(".tipsImg").css("background-position", clickPositions);
        //tabs(indexs);
        var name = $(this).find(".tipsImg").data("name");
        $(".mainContent .mainLeft .mainLeftTips div").hide();
        $(".mainContent .mainRight .mainRightTips div").hide();
        $(".mainContent .mainLeft .mainLeftTips ." + name).show();
        $(".mainContent .mainRight .mainRightTips ." + name).show();
    });


});

var init = function () {
    $(".tab").eq(0).addClass("tab-last-child");
    var firstClickPositions = $(".tab").eq(0).find("div.tipsImg").data("clicks");
    $(".tab").eq(0).find(".tipsImg").css("background-position", firstClickPositions);
    var t_animationEvents = new t_animationEvent();
    var ani = t_animationEvents.t_animationend();

    $(".phone_bg").on(ani, function () {
        var src = $(this).attr("src");
        $(".topHide").css("background-image", "url('" + src + "')");
    });
    $(".ani_1").show();
};