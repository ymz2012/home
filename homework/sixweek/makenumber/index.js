/**
 * Created by ymz on 17/2/13.
 */
(function () {
    var aBtn = document.getElementsByClassName('baseBtnCommonCss'); //所有按钮
    var cBtn = document.getElementById('clearLook'); //清屏按钮
    var bBtn = document.getElementById('backLook'); //退格按钮
    var tBtn = document.getElementById('resultIpt'); //输入框
    var nBtn = document.getElementsByClassName('baseBtnCss6');//点击可以在输入框显示的按钮
    var xBtn = document.getElementsByClassName('baseBtnCss7');//点击要计算的按钮
    var aBtnClock = null;
    var valuess = 0;
    var sum = 0; //定义所求的数
    var symbol = '+';
    var sumArr = [];
    var sumArr1 = [];
    //清屏方法
    function clickC(){
        //点击按钮颜色变化
        this.style.backgroundPosition = '0 0';
        aBtnReset(this);
        tBtn.value = '';
    }
    //清屏按钮
    if(!!cBtn.addEventListener){
        cBtn.addEventListener("click",clickC);
    }else if(!!cBtn.attachEvent){
        cBtn.attachEvent("click",clickC);
    }else {
        cBtn.onclick = clickC;
    }
    //退格方法
    function clickB(){
        //点击按钮颜色变化
        this.style.backgroundPosition = '0 0';
        aBtnReset(this);
        tBtn.value = tBtn.value.substring(0,tBtn.value.length-1);
        valuess = tBtn.value;
        console.log(valuess);
    }
    //退格按钮
    function tBack(){
        if(!!bBtn.addEventListener){
            bBtn.addEventListener("click",clickB);
        }else if(!!bBtn.attachEvent){
            bBtn.attachEvent("click",clickB);
        }else {
            bBtn.onclick = clickB;
        }
    }
    tBack();//执行退格方法
    //定时器修改背景颜色方法
    function aBtnReset(obj){
        clearTimeout(aBtnClock);
        aBtnClock = setTimeout(function(){
            obj.style.backgroundPosition = '0 -44px';
        },100);
    }
    //点击数字和小数点按钮
    function clickMe() {
        //点击按钮颜色变化
        this.style.backgroundPosition = '0 0';
        aBtnReset(this);
        var aBtnValue = this.value;
        //接收到的数组是空的话就把输入框的value滞空,因为是点了一下操作按钮
        if(sumArr.length == 0){
            tBtn.value = '';
        }
        //点击数字或者.显示在输入框中
        tBtn.value += aBtnValue;
        //清空一个空数组并把获得的屏幕上显示的值传入一个数组中
        valuess = tBtn.value;
        console.log(valuess);
        sumArr.push(valuess);
        console.log(sumArr);
    }

    console.log(valuess);
    //绑定点击数字和小数点按钮事件
    for(var i =  0;i < nBtn.length;i++){
        if(!!nBtn[i].addEventListener){
            nBtn[i].addEventListener("click",clickMe);
        }else if(!!nBtn[i].attachEvent){
            nBtn[i].attachEvent("click",clickMe);
        }else {
            nBtn[i].onclick = clickMe;
        }
    }
    //点击计算按钮
    function clickYou() {
        //点击按钮颜色变化
        this.style.backgroundPosition = '0 0';
        aBtnReset(this);
        xvaluess = this.value;
        aaa=sumArr[sumArr.length-1];
        if(!!aaa){
            sumArr1.push(aaa);
        }
        sumArr1.push(xvaluess);
        console.log(xvaluess);
        console.log(sumArr1);
        if(sumArr1.length>=3){
            if(sumArr1[1] == '+'){
                w = sumArr1[0]+sumArr1[2];
                sumArr1.splice(0,sumArr1.length);
            }else if(sumArr1[1] == 'x'){
                w = sumArr1[0]*sumArr1[2];
                sumArr1.splice(0,sumArr1.length);
            }else if(sumArr1[1] == '-'){
                w = sumArr1[0]-sumArr1[2];
                sumArr1.splice(0,sumArr1.length);
            }else if(sumArr1[1] == '÷'){
                w = sumArr1[0]/sumArr1[2];
                sumArr1.splice(0,sumArr1.length);
            }
            tBtn.value = w;
            console.log(w);

        }
        sumArr.splice(0,sumArr.length);
        console.log(aaa);
        console.log(sumArr);
    }
    //绑定点击数字和小数点按钮事件
    for(var i =  0;i < xBtn.length;i++){
        if(!!xBtn[i].addEventListener){
            xBtn[i].addEventListener("click",clickYou);
        }else if(!!nBtn[i].attachEvent){
            xBtn[i].attachEvent("click",clickYou);
        }else {
            xBtn[i].onclick = clickYou;
        }
    }
    //计算
    sumArr.push(valuess);
    console.log(sumArr);
})()
