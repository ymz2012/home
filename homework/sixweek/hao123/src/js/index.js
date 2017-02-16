/**
 * Created by ymz on 17/2/15.
 */
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
        $('.layout-container-inner').css("background-color",newColor);
    }else if(Cookie.read("menuTitle")!=null){
        var newColor = Cookie.read("menuTitle");
        $('.layout-container-inner').css("background-color",newColor);
    }
}
load();
function clickA(){
    $('.layout-container-inner').css("background-color","red");
    if (window.localStorage) {
        localStorage.setItem("menuTitle","red");
    } else {
        Cookie.write("menuTitle","red");
    }
    /*aaa.style.backgroundColor('red');*/
}
function clickB(){
    $('.layout-container-inner').css("background-color","yellow");
    if (window.localStorage) {
        localStorage.setItem("menuTitle","yellow");
    } else {
        Cookie.write("menuTitle","yellow");
    }
    /*aaa.style.backgroundColor('red');*/
}
function clickC(){
    $('.layout-container-inner').css("background-color","green");
    if (window.localStorage) {
        localStorage.setItem("menuTitle","green");
    } else {
        Cookie.write("menuTitle","green");
    }
    /*aaa.style.backgroundColor('red');*/
}
function clickD(){
    $('.layout-container-inner').css("background-color","blue");
    if (window.localStorage) {
        localStorage.setItem("menuTitle","blue");
    } else {
        Cookie.write("menuTitle","blue");
    }
    /*aaa.style.backgroundColor('red');*/
}
function clickE(){
    $('.layout-container-inner').css("background-color","#f7f7f8");
    /*aaa.style.backgroundColor('red');*/
    if (window.localStorage) {
        localStorage.setItem("menuTitle","#f7f7f8");
    } else {
        Cookie.write("menuTitle","#f7f7f8");
    }
}

