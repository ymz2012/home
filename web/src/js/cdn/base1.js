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
/*
/!*************************************************************************
 * 引入fastclick
 *************************************************************************!/
window.addEventListener('load', function() {
  FastClick.attach(document.body);
}, false);*/
/*************************************************************************
 * 改造系统alert
 * param  str  传入要弹出的str
 *          pos  弹出的位置        1
 *                            2
 *                            3
 * return false
 *************************************************************************/
window.alert = function (str, pos) {
    if (document.getElementById("tAlert") || !str) {
        return false;
    }
    var position = '';
    var pos = pos || 1;
    var tAlert_wrap = document.createElement("div");
    tAlert_wrap.setAttribute("id", "tAlert");
    tAlert_wrap.style.textAlign = "center";
    tAlert_wrap.style.position = "fixed";
    tAlert_wrap.style.zIndex = "100";
    switch (pos) {
        case 1:
            position = '10%';
            break;
        case 2:
            position = '40%';
            break;
        case 3:
            position = "85%";
            break;
        default:
            position = "10%";
            break;
    }
    tAlert_wrap.style.top = position;
    tAlert_wrap.style.width = "100%";
    document.getElementsByTagName("body")[0].appendChild(tAlert_wrap);
    var tAlert_in = document.createElement("div");
    tAlert_in.style.padding = "4px 14px";
    tAlert_in.style.maxWidth = "200px";
    tAlert_in.style.zIndex = "99";
    tAlert_in.style.fontSize = "12px";
    tAlert_in.style.textShadow = "none";
    tAlert_in.style.display = "inline-block";
    tAlert_in.style.lineHeight = "16px";
    tAlert_in.style.backgroundColor = "#000000";
    tAlert_in.style.color = "#ffffff";
    tAlert_in.style.borderRadius = "6px";
    tAlert_in.style.opacity = "0.8";
    tAlert_in.style.wordBreak = "break-all";
    tAlert_in.textContent = str;
    document.getElementById("tAlert").appendChild(tAlert_in);
    setTimeout(function () {
        document.getElementsByTagName("body")[0].removeChild(tAlert_wrap);
    }, 2000);
    return false;
}
/*************************************************************************
 *　方法:Array.remove(dx)   此函数是已知数组下标进行删除。
 *　功能:删除数组元素.
 *　参数:dx删除元素的下标.
 *　返回:在原数组上修改数组
 *************************************************************************/
Array.prototype.remove = function (dx) {
    if (isNaN(dx) || dx > this.length) {
        return false;
    }
    for (var i = 0, n = 0; i < this.length; i++) {
        if (this[i] != this[dx]) {
            this[n++] = this[i]
        }
    }
    this.length -= 1
}
/*************************************************************************
 *　方法:Array.removeValue(dx)   此函数是已知数值进行删除数组中对应的数组元素。
 *　功能:删除数组元素.
 *　参数:dx删除元素的值.
 *　返回:在原数组上修改数组
 *************************************************************************/
Array.prototype.removeValue = function (dx) {
    //if(isNaN(dx)||dx>this.length){return false;}
    var index = this.indexOf(dx);  
    if (index > -1) {  
        this.splice(index, 1);  
    }  
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
                '<style>#cancel:active,#affirm:active{background-color: #eee}</style>'+
                '<div style="position:fixed;top: 0;left: 0;width: 100%;height: 100%;background-color: rgba(0,0,0,0.7);z-index: 999999;">'+
                '    <div style="position:absolute;top: 50%;left: 50%;margin-top:-75px;margin-left: -130px;width: 260px; border-radius: 5px;background-color: #fff;overflow:hidden;">'+
                '        <div style="min-height: 85px;">'+
                '            <div style="text-align: center;height:42px;line-height:42px;color: #444;font-size: 17px;font-weight:bold;background:#eee;">'+
                title+
                '            </div>'+
                '            <div style="margin-top: 11px;color: #444;font-size: 14px;text-align: center;padding: 0 10px;word-break: break-all;margin-bottom: 10px;">'+
                str+
                '            </div>'+
                '        </div>'+
                '        <div style="padding:0 14px 16px 14px;font-size:15px;box-sizing:border-box;">'+
                '            <span id="cancel" style="width:104px;height:30px;border:1px solid #fe6e7f; border-radius:15px;text-align:center;line-height:30px;color:#fe6e7f;display:inline-block;margin-right:16px;">'+
                '                取消'+
                '            </span>'+
                '            <span id="affirm" style="width:104px;height:30px;border:1px solid #c8c8c8; border-radius:15px;text-align:center;line-height:30px;color:#666;display:inline-block;">'+
                '                确认'+
                '            </span>'+
                '        </div>'+
                '    </div>'+
                '</div>';
        break;
        case 2:
            html =
                '<style>#cancel:active,#affirm:active{background-color: #eee}</style>'+
                '<div style="position:fixed;top: 0;left: 0;width: 100%;height: 100%;background-color: rgba(0,0,0,0.7);z-index: 999999;">'+
                '    <div style="position:absolute;top: 50%;left: 50%;margin-top:-75px;margin-left: -130px;width: 260px; border-radius: 5px;background-color: #fff;overflow:hidden;">'+
                '        <div style="min-height: 85px;">'+
                '            <div style="text-align: center;height:42px;line-height:42px;color: #444;font-size: 17px;font-weight:bold;background:#eee;">'+
                title+
                '            </div>'+
                '            <div style="margin-top: 11px;color: #444;font-size: 14px;text-align: center;padding: 0 10px;word-break: break-all;margin-bottom: 10px;">'+
                str+
                '            </div>'+
                '        </div>'+
                '        <div style="padding:0 14px 16px 14px;font-size:15px;box-sizing:border-box;">'+
                '            <span id="affirm" style="width:170px;height:30px;border:1px solid #fe6e7f; border-radius:15px;text-align:center;line-height:30px;color:#fe6e7f;display:block;margin:0 auto;">'+
                btnTitle+
                '            </span>'+
                '        </div>'+
                '    </div>'+
                '</div>';
        break;
        default :
            html =
                '<style>#cancel:active,#affirm:active{background-color: #eee}</style>'+
                '<div style="position:fixed;top: 0;left: 0;width: 100%;height: 100%;background-color: rgba(0,0,0,0.7);z-index: 999999;">'+
                '    <div style="position:absolute;top: 50%;left: 50%;margin-top:-75px;margin-left: -130px;width: 260px; border-radius: 5px;background-color: #fff;overflow:hidden;">'+
                '        <div style="min-height: 85px;">'+
                '            <div style="text-align: center;height:42px;line-height:42px;color: #444;font-size: 17px;font-weight:bold;background:#eee;">'+
                title+
                '            </div>'+
                '            <div style="margin-top: 11px;color: #444;font-size: 14px;text-align: center;padding: 0 10px;word-break: break-all;margin-bottom: 10px;">'+
                str+
                '            </div>'+
                '        </div>'+
                '        <div style="padding:0 14px 16px 14px;font-size:15px;box-sizing:border-box;">'+
                '            <span id="cancel" style="width:104px;height:30px;border:1px solid #fe6e7f; border-radius:15px;text-align:center;line-height:30px;color:#fe6e7f;display:inline-block;margin-right:16px;">'+
                '                取消'+
                '            </span>'+
                '            <span id="affirm" style="width:104px;height:30px;border:1px solid #c8c8c8; border-radius:15px;text-align:center;line-height:30px;color:#666;display:inline-block;">'+
                '                确认'+
                '            </span>'+
                '        </div>'+
                '    </div>'+
                '</div>';
        break;
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
/*
(function(a){a.extend(a.fn,{cookie:function(b,c,d){var e,f,g,h;if(arguments.length>1&&String(c)!=="[object Object]"){d=a.extend({},d);if(c===null||c===undefined)d.expires=-1;return typeof d.expires=="number"&&(e=d.expires*24*60*60*1e3,f=d.expires=new Date,f.setTime(f.getTime()+e)),c=String(c),document.cookie=[encodeURIComponent(b),"=",d.raw?c:encodeURIComponent(c),d.expires?"; expires="+d.expires.toUTCString():"",d.path?"; path="+d.path:"",d.domain?"; domain="+d.domain:"",d.secure?"; secure":""].join("")}return d=c||{},h=d.raw?function(a){return a}:decodeURIComponent,(g=(new RegExp("(?:^|; )"+encodeURIComponent(b)+"=([^;]*)")).exec(document.cookie))?h(g[1]):null}})})(Zepto);*/
