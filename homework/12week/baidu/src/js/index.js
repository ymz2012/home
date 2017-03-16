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

    //换肤并放到缓存中
    var red = document.getElementById('red');
    var yellow = document.getElementById('yellow');
    var green = document.getElementById('green');
    var blue = document.getElementById('blue');
    var clearr = document.getElementById('clearr');

    /*var aaa = document.getElementById('abc');*/
    red.addEventListener("click",clickA);
    yellow.addEventListener("click",clickB);
    green.addEventListener("click",clickC);
    blue.addEventListener("click",clickD);
    clearr.addEventListener("click",clickE);
    var storage = window.localStorage;
    function load() {
        if(storage.getItem("menuTitle")!=null){
            var newColor = storage.getItem("menuTitle");
            console.log(newColor);
            $('.wrapper').css("background-color",newColor);
        }else if(Cookie.read("menuTitle")!=null){
            var newColor = Cookie.read("menuTitle");
            $('.wrapper').css("background-color",newColor);
        }
    }
    load();
    function clickA(){
        $('.wrapper').css("background-color","red");
        if (window.localStorage) {
            localStorage.setItem("menuTitle","red");
        } else {
            Cookie.write("menuTitle","red");
        }
        /*aaa.style.backgroundColor('red');*/
    }
    function clickB(){
        $('.wrapper').css("background-color","yellow");
        if (window.localStorage) {
            localStorage.setItem("menuTitle","yellow");
        } else {
            Cookie.write("menuTitle","yellow");
        }
        /*aaa.style.backgroundColor('red');*/
    }
    function clickC(){
        $('.wrapper').css("background-color","green");
        if (window.localStorage) {
            localStorage.setItem("menuTitle","green");
        } else {
            Cookie.write("menuTitle","green");
        }
        /*aaa.style.backgroundColor('red');*/
    }
    function clickD(){
        $('.wrapper').css("background-color","blue");
        if (window.localStorage) {
            localStorage.setItem("menuTitle","blue");
        } else {
            Cookie.write("menuTitle","blue");
        }
        /*aaa.style.backgroundColor('red');*/
    }
    function clickE(){
        $('.wrapper').css("background-color","#fff");
        /*aaa.style.backgroundColor('red');*/
        if (window.localStorage) {
            localStorage.setItem("menuTitle","#fff");
        } else {
            Cookie.write("menuTitle","#fff");
        }
    }
})
