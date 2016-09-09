// +----------------------------------------------------------------------
// | Tjs [ Sucry 自己改造的js库  此文件一般改造系统变量for Html5 ] 基于jquery
// +----------------------------------------------------------------------
// | v1.6.2 release  2014.12.18
// +----------------------------------------------------------------------
// | Copyright (c) 2014-2015 http://www.dayima.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: Sucry <sqboytan@126.com><tankang@dayima.com>
// +----------------------------------------------------------------------

/*************************************************************************
 * 引入fastclick
 *************************************************************************/
window.addEventListener('load', function() {
  FastClick.attach(document.body);
}, false);
/*************************************************************************
 * 改造系统alert
 * param  str  传入要弹出的str
 *          pos  弹出的位置        1
 *                            2
 *                            3
 * return false
 * creat by zwn
 *************************************************************************/
window.alert = function (str){
    if (document.getElementById("tAlert") || !str) {
        return false;
    }
    var html;
    html ='<style id="tAlertStyle">#tAlert div{font-size: 12px; }[data-dpr="2"] #tAlert div {font-size: 24px; }@media all and (-webkit-device-pixel-ratio: 2) and (min-width: 1080px) {[data-dpr="2"] #tAlert div {font-size: 48px; } }[data-dpr="3"] #tAlert div {font-size: 36px; }@media all and (-webkit-device-pixel-ratio: 3) and (min-width: 1620px) {[data-dpr="3"] #tAlert div {font-size: 72px; } }@media all and (-webkit-device-pixel-ratio: 1) and (min-width: 540px) {#tAlert div {font-size: 24px; } }</style>'+
        '<div style="text-align: center;position:fixed;top: 1.6rem;z-index: 100;width:100%;" id="tAlert">'+
        '<div style="padding:0.10667rem 0.37333rem;max-width: 5.33333rem;z-index: 99;text-shadow: none;display: inline-block;line-height: 1.5em;background:#000;color:#fff;border-radius:0.16rem;opacity: 0.8;word-break: break-all; ">'+
        str+
        '</div>'+
        '</div>';
    var $dialog = $(html);
    $("body").append($dialog);
    setTimeout(function () {
        $("#tAlert").remove();
        $("#tAlertStyle").remove();
    }, 2000);
    return false;
}


/*************************************************************************
 *　对象名:tReg
 *　功能    :  一些正则的集合。
 *　参数    :  @param telphone、email and so on
 *　返回    :  返回true or false
 *************************************************************************/
var tReg = function () {
};
/*
 * 正则匹配手机号码  传入tels 返回true or false
 * */
tReg.prototype.matchTels = function (tels) {
    var telReg = !!tels.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/);
    return telReg;
}


/*
 * 获取对象的长度
 * */

function getObjecLength(obj) {
    var i = 0;
    for (v in obj) {
        i++;
    }
    return i;
}


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
}

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
}

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
}

/**
 * 获取url中得参数
 * @author lvliqi
 * @param name
 * @returns {null}
 */
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

/**
 * 数字补零
 * @author lvliqi
 * @param num
 * @param n
 * @returns {string}
 */
var pad = function (num, n) {
    var len = num.toString().length;
    while (len < n) {
        num = "0" + num;
        len++;
    }
    return num;
};
window.confirmList=function(list,cb){
    var list=list||[];
    var ohtml="";
    var html=
    '<style>.confirmListModel {background: rgba(0, 0, 0, 0.6);left: 0;top: 0;bottom: 0;position: fixed;width: 100%;z-index: 100; }.confirmListModel .confirmListBody {transition: bottom 500ms ease;  position: absolute;  left: 0;  width: 100%; }.confirmListModel .confirmListBody .confirmList {margin-bottom: 0.26667rem; }.confirmListModel .confirmListBody .confirmList li {width: 100%;height: 1.33333rem;background: #fff;border-bottom: 1px solid #ccc;font-family: "HY QIHEI50" !important;font-size: 16px;color: #333;display: -webkit-box;-webkit-box-align: center;-webkit-box-pack: center; }[data-dpr="2"] .confirmListModel .confirmListBody .confirmList li {font-size: 32px; }@media all and (-webkit-device-pixel-ratio: 2) and (min-width: 1080px) {[data-dpr="2"] .confirmListModel .confirmListBody .confirmList li { font-size: 64px; } }[data-dpr="3"] .confirmListModel .confirmListBody .confirmList li {font-size: 48px; }@media all and (-webkit-device-pixel-ratio: 3) and (min-width: 1620px) {[data-dpr="3"] .confirmListModel .confirmListBody .confirmList li {font-size: 96px; } }@media all and (-webkit-device-pixel-ratio: 1) and (min-width: 540px) {.confirmListModel .confirmListBody .confirmList li {font-size: 32px; } }.confirmListModel .confirmListBody .confirmList li:last-child {border-bottom: 0; }.confirmListModel .confirmListBody .confirmClose {width: 100%;height: 1.33333rem;background: #f0f0f0;border-bottom: 1px solid #ccc;font-family: "HY QIHEI50" !important;font-size: 16px;color: #666;display: -webkit-box;-webkit-box-align: center;-webkit-box-pack: center; }[data-dpr="2"] .confirmListModel .confirmListBody .confirmClose {font-size: 32px; }@media all and (-webkit-device-pixel-ratio: 2) and (min-width: 1080px) {[data-dpr="2"] .confirmListModel .confirmListBody .confirmClose {font-size: 64px; } }[data-dpr="3"] .confirmListModel .confirmListBody .confirmClose {font-size: 48px; }@media all and (-webkit-device-pixel-ratio: 3) and (min-width: 1620px) {[data-dpr="3"] .confirmListModel .confirmListBody .confirmClose {font-size: 96px; } }@media all and (-webkit-device-pixel-ratio: 1) and (min-width: 540px) {.confirmListModel .confirmListBody .confirmClose {font-size: 32px; } }</style>'+
    '<div class="confirmListModel">'+
        '<div class="confirmListBody" id="confirmListBody">'+
            '<ul class="confirmList" id="confirmList">'+

            '</ul>'+
            '<p  class="confirmClose" id="confirmClose">取消</p>'+
        '</div>'+

    '</div>';
    var $dialog = $(html);
    $("body").append($dialog);
    for(var i=0;i<list.length;i++){
        ohtml+="<li>"+list[i]+"</li>";
    }
    var $list=$(ohtml);
    $("#confirmList").append($list);
    var confirmListBodyHeight=$("#confirmListBody").height()
    $("#confirmListBody").css("bottom",-confirmListBodyHeight);
    setTimeout(function(){$("#confirmListBody").css("bottom","0");},0)

    $dialog.find("#confirmClose").off("click").on("click", function () {
        cb(false);
        $("#confirmListBody").css("bottom",-confirmListBodyHeight);
        setTimeout(function(){$dialog.remove();},500)

    });
    $dialog.find("#confirmList li").off("click").on("click", function () {
        var str=$(this).html();
        cb(true,str);
        $("#confirmListBody").css("bottom",-confirmListBodyHeight);
        setTimeout(function(){$dialog.remove();},500)
    });
};
/**
 * 重写默认confirm
 * @param str
 * @param cb 回调一个bool值
 * @param title 默认是'姨吗爱买提示您'
 */
window.confirm = function (str, cb,confirmFlag,btnTitle,title) {
    var confirmFlag=confirmFlag||1;
    var btnTitle=btnTitle||'我知道了';
    title = title || '姨吗爱买提示您';
    var html;
    switch (confirmFlag) {
        case 1:
            html =
                '<style>#cancel:active,#affirm:active{background-color: #eee}#title{font-size: 17px; }[data-dpr="2"] #title {font-size: 34px; }@media all and (-webkit-device-pixel-ratio: 2) and (min-width: 1080px) {[data-dpr="2"] #title {font-size: 68px; } }[data-dpr="3"] #title {font-size: 51px; }@media all and (-webkit-device-pixel-ratio: 3) and (min-width: 1620px) {[data-dpr="3"] #title {font-size: 102px; } }@media all and (-webkit-device-pixel-ratio: 1) and (min-width: 540px) {#title {font-size: 34px; }}#content{font-size: 14px; }[data-dpr="2"] #content {font-size: 28px; }@media all and (-webkit-device-pixel-ratio: 2) and (min-width: 1080px) {[data-dpr="2"] #content {font-size: 56px; } }[data-dpr=" 3"] #content {font-size: 42px; }@media all and (-webkit-device-pixel-ratio: 3) and (min-width: 1620px) {[data-dpr="3"] #content {font-size: 84px; } }@media all and (-webkit-device-pixel-ratio: 1) and (min-width: 540px) {#content {font-size: 28px; }}.clearfix{font-size: 15px; }[data-dpr="2"] .clearfix {font-size: 30px; }@media all and (-webkit-device-pixel-ratio: 2) and (min-width: 1080px) {[data-dpr="2"] .clearfix {font-size: 60px; } }[data-dpr="3"] .clearfix {font-size: 45px; }@media all and (-webkit-device-pixel-ratio: 3) and (min-width: 1620px) {[data-dpr="3"] .clearfix {font-size: 90px; } }@media all and (-webkit-device-pixel-ratio: 1) and (min-width: 540px) {.clearfix {font-size: 30px; }}</style>'+
                '<div style="position:fixed;top: 0;left: 0;width: 100%;height: 100%;background-color: rgba(0,0,0,0.7);z-index: 999999;">'+
                '    <div style="position:absolute;top: 50%;left: 50%;margin-top:-2.8rem;margin-left: -4.6rem;width: 9.2rem; border-radius: 0.13333rem; overflow:hidden;background-color: #fff;">'+
                '        <div style="min-height: 2.26667rem;border-radius: 0.13333rem 0.13333rem 0 0;">'+
                '            <div style="text-align: center;height:1.33333rem;line-height:1.33333rem;color: #fff;font-weight:bold;background:#fe6e7f;border-radius: 0.13333rem 0.13333rem 0 0;" id="title">'+
                title+
                '            </div>'+
                '            <div style="margin-top: 0.8rem;color: #444;text-align: center;padding: 0 0.26667rem;word-break: break-all;margin-bottom: 0.8rem;line-height:1.5em;" id="content">'+
                str+
                '            </div>'+
                '        </div>'+
                '        <div class="clearfix" style="border-top:1px solid #e1e1e1;box-sizing:border-box;width:100%;display: -webkit-box;">'+
                '            <span id="affirm" style="width:4.5rem;height:1.33333rem;border-right:1px solid #e1e1e1;text-align:center;line-height:1.33333rem;color:#fe6e7f;display:inline-block;">'+
                '                确认'+
                '            </span>'+
                '            <span id="cancel" style="width:4.5rem;height:1.33333rem;text-align:center;line-height:1.33333rem;color:#666;display:inline-block;">'+
                '                取消'+
                '            </span>'+
                '        </div>'+
                '    </div>'+
                '</div>';
        break;
        case 2:
            html =
                '<style>#affirm:active{background-color: #fff}#title{font-size: 18px; }[data-dpr="2"] #title {font-size: 36px; }@media all and (-webkit-device-pixel-ratio: 2) and (min-width: 1080px) {[data-dpr="2"] #title {font-size: 72px; } }[data-dpr="3"] #title {font-size: 54px; }@media all and (-webkit-device-pixel-ratio: 3) and (min-width: 1620px) {[data-dpr="3"] #title {font-size: 108px; } }@media all and (-webkit-device-pixel-ratio: 1) and (min-width: 540px) {#title {font-size: 36px; }}#content{font-size: 15px; }[data-dpr="2"] #content {font-size: 30px; }@media all and (-webkit-device-pixel-ratio: 2) and (min-width: 1080px) {[data-dpr="2"] #content {font-size: 60px; } }[data-dpr="3"] #content {font-size: 45px; }@media all and (-webkit-device-pixel-ratio: 3) and (min-width: 1620px) {[data-dpr="3"] #content {font-size: 90px; } }@media all and (-webkit-device-pixel-ratio: 1) and (min-width: 540px) {#content {font-size: 30px; }}#affirm{font-size: 15px; }[data-dpr="2"] #affirm {font-size: 30px; }@media all and (-webkit-device-pixel-ratio: 2) and (min-width: 1080px) {[data-dpr="2"] #affirm {font-size: 60px; } }[data-dpr="3"] #affirm {font-size: 45px; }@media all and (-webkit-device-pixel-ratio: 3) and (min-width: 1620px) {[data-dpr="3"] #affirm {font-size: 90px; } }@media all and (-webkit-device-pixel-ratio: 1) and (min-width: 540px) {#affirm {font-size: 30px; }</style>'+
                '<div style="position:fixed;top: 0;left: 0;width: 100%;height: 100%;background-color: rgba(0,0,0,0.7);z-index: 999999;">'+
                '    <div style="position:absolute;top: 50%;left: 50%;margin-top:-2.8rem;margin-left: -4.6rem;width: 9.2rem;border-radius: 0.13333rem; overflow:hidden;background-color: #fff;">'+
                '        <div style="min-height:2.26667rem;border-radius: 0.13333rem 0.13333rem 0 0;">'+
                '            <div style="text-align: center;height:1.33333rem;line-height:1.33333rem;color: #fff;font-weight:normal;background:#fe6e7f;border-radius:0.13333rem 0.13333rem 0 0;" id="title">'+
                title+
                '            </div>'+
                '            <div style="margin-top: 0.8rem;color: #333;text-align: center;padding: 0 0.26667rem;word-break: break-all;margin-bottom:0.8rem;line-height:1.5em;" id="content">'+
                str+
                '            </div>'+
                '        </div>'+
                '        <div style="font-size:0.2rem;box-sizing:border-box;border-top:1px solid #e1e1e1;width:100%;">'+
                '            <span id="affirm" style="height:1.33333rem;width:100%; text-align:center;line-height:1.33333rem;color:#fe6e7f;display:inline-block;cursor: pointer;">'+
                btnTitle+
                '            </span>'+
                '        </div>'+
                '    </div>'+
                '</div>';
        break;
       
        default :
            html =
                '<style>#cancel:active,#affirm:active{background-color: #eee}#title{font-size: 17px; }[data-dpr="2"] #title {font-size: 34px; }@media all and (-webkit-device-pixel-ratio: 2) and (min-width: 1080px) {[data-dpr="2"] #title {font-size: 68px; } }[data-dpr="3"] #title {font-size: 51px; }@media all and (-webkit-device-pixel-ratio: 3) and (min-width: 1620px) {[data-dpr="3"] #title {font-size: 102px; } }@media all and (-webkit-device-pixel-ratio: 1) and (min-width: 540px) {#title {font-size: 34px; }}#content{font-size: 14px; }[data-dpr="2"] #content {font-size: 28px; }@media all and (-webkit-device-pixel-ratio: 2) and (min-width: 1080px) {[data-dpr="2"] #content {font-size: 56px; } }[data-dpr=" 3"] #content {font-size: 42px; }@media all and (-webkit-device-pixel-ratio: 3) and (min-width: 1620px) {[data-dpr="3"] #content {font-size: 84px; } }@media all and (-webkit-device-pixel-ratio: 1) and (min-width: 540px) {#content {font-size: 28px; }}.clearfix{font-size: 15px; }[data-dpr="2"] .clearfix {font-size: 30px; }@media all and (-webkit-device-pixel-ratio: 2) and (min-width: 1080px) {[data-dpr="2"] .clearfix {font-size: 60px; } }[data-dpr="3"] .clearfix {font-size: 45px; }@media all and (-webkit-device-pixel-ratio: 3) and (min-width: 1620px) {[data-dpr="3"] .clearfix {font-size: 90px; } }@media all and (-webkit-device-pixel-ratio: 1) and (min-width: 540px) {.clearfix {font-size: 30px; }}</style>'+
                '<div style="position:fixed;top: 0;left: 0;width: 100%;height: 100%;background-color: rgba(0,0,0,0.7);z-index: 999999;">'+
                '    <div style="position:absolute;top: 50%;left: 50%;margin-top:-2.8rem;margin-left: -4.6rem;width: 9.2rem; border-radius: 0.13333rem; overflow:hidden;background-color: #fff;">'+
                '        <div style="min-height: 2.26667rem;border-radius: 0.13333rem 0.13333rem 0 0;">'+
                '            <div style="text-align: center;height:1.33333rem;line-height:1.33333rem;color: #fff;font-weight:bold;background:#fe6e7f;border-radius: 0.13333rem 0.13333rem 0 0;" id="title">'+
                title+
                '            </div>'+
                '            <div style="margin-top: 0.8rem;color: #444;text-align: center;padding: 0 0.26667rem;word-break: break-all;margin-bottom: 0.8rem;line-height:1.5em;" id="content">'+
                str+
                '            </div>'+
                '        </div>'+
                '        <div class="clearfix" style="border-top:1px solid #e1e1e1;box-sizing:border-box;width:100%;display: -webkit-box;">'+
                '            <span id="affirm" style="width:4.5rem;height:1.33333rem;border-right:1px solid #e1e1e1;text-align:center;line-height:1.33333rem;color:#fe6e7f;display:inline-block;">'+
                '                确认'+
                '            </span>'+
                '            <span id="cancel" style="width:4.5rem;height:1.33333rem;text-align:center;line-height:1.33333rem;color:#666;display:inline-block;">'+
                '                取消'+
                '            </span>'+
                '        </div>'+
                '    </div>'+
                '</div>';
    }
    var $dialog = $(html);
    $("body").append($dialog);

    $dialog.find("#cancel").off("click").on("click", function () {
        cb(false);
        $dialog.remove();
    });

    $dialog.find("#affirm").off("click").on("click", function () {
        cb(true);
        $dialog.remove();
    });
};

function getReadFlagId(){
    var readFlagStr;
    var url=document.URL || ''; 
    var hash=(url.split("#"))[1];
    var tempStr,urlArr=[],len;
    tempStr=(url.split("#"))[0];
    tempStr=(tempStr.split("?"))[0];
    urlArr=tempStr.split("/");
    len=urlArr.length;
    readFlagStr=urlArr[len-2]+"_"+urlArr[len-1]
    if(typeof hash!="undefined"){readFlagStr=readFlagStr+"_"+hash;}
    return readFlagStr;
}
/*zepto.cookie*/
(function(a){a.extend(a.fn,{cookie:function(b,c,d){var e,f,g,h;if(arguments.length>1&&String(c)!=="[object Object]"){d=a.extend({},d);if(c===null||c===undefined)d.expires=-1;return typeof d.expires=="number"&&(e=d.expires*24*60*60*1e3,f=d.expires=new Date,f.setTime(f.getTime()+e)),c=String(c),document.cookie=[encodeURIComponent(b),"=",d.raw?c:encodeURIComponent(c),d.expires?"; expires="+d.expires.toUTCString():"",d.path?"; path="+d.path:"",d.domain?"; domain="+d.domain:"",d.secure?"; secure":""].join("")}return d=c||{},h=d.raw?function(a){return a}:decodeURIComponent,(g=(new RegExp("(?:^|; )"+encodeURIComponent(b)+"=([^;]*)")).exec(document.cookie))?h(g[1]):null}})})(Zepto);