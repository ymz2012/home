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
    var new_value,
        old_value,
        flag = false,
        new_symbol = "",
        old_symbol = "";
    //清屏方法
    function clickC() {
        //点击按钮颜色变化
        this.style.backgroundPosition = '0 0';
        setBtnStyle(this);
        tBtn.value = '';

        new_value = undefined  ,
            old_value = undefined  ,
            flag = false,
            new_symbol = "",
            old_symbol = "";
    }

    //清屏按钮
    if (!!cBtn.addEventListener) {
        cBtn.addEventListener("click", clickC);
    } else if (!!cBtn.attachEvent) {
        cBtn.attachEvent("click", clickC);
    } else {
        cBtn.onclick = clickC;
    }
    //退格方法
    function clickB() {
        //点击按钮颜色变化
        this.style.backgroundPosition = '0 0';
        setBtnStyle(this);
        tBtn.value = tBtn.value.substring(0, tBtn.value.length - 1);
        valuess = tBtn.value;
        console.log(valuess);
    }

    //退格按钮
    function tBack() {
        if (!!bBtn.addEventListener) {
            bBtn.addEventListener("click", clickB);
        } else if (!!bBtn.attachEvent) {
            bBtn.attachEvent("click", clickB);
        } else {
            bBtn.onclick = clickB;
        }
    }

    tBack();//执行退格方法


    function bindEven(obj, bindFun) {//兼容绑定事件
        if (!!obj.addEventListener) {
            obj.addEventListener("click", bindFun);
        } else if (!!obj.attachEvent) {
            obj.attachEvent("click", bindFun);
        } else {
            obj.onclick = bindFun;
        }
    }

    //给元素绑定事件
    //点击数字
    for (var i = 0; i < nBtn.length; i++) {
        bindEven(nBtn[i], clickNumber);
    }
    //点击符号
    for (var i = 0; i < xBtn.length; i++) {
        bindEven(xBtn[i], clickSymbol);
    }
    //定时器修改背景颜色方法
    function setBtnStyle(obj) {//设置按钮的动画

        obj.style.backgroundPosition = '0 0';
        clearTimeout(aBtnClock);
        aBtnClock = setTimeout(function () {
            obj.style.backgroundPosition = '0 -44px';
        }, 100);
    }

    //判断计算
    function if_operation_style(new_symbol) {// +  -   *   /
        if (new_symbol == '+/-') {
            tBtn.value = -(old_value * 1);
            old_value = tBtn.value;
        }else if(new_symbol == 'x^2'){
            tBtn.value = parseFloat((new_value * 1*new_value * 1).toFixed(8));
            old_value = tBtn.value;
        }else if(new_symbol == 'sin'){
            tBtn.value = parseFloat((Math.sin(old_value * 1)).toFixed(8));
            old_value = tBtn.value;
        }else if(new_symbol == 'cos'){
            tBtn.value = parseFloat((Math.cos(old_value * 1)).toFixed(8));
            old_value = tBtn.value;
        }else if(new_symbol == 'sqrt'){
            tBtn.value = parseFloat((Math.sqrt(old_value * 1)).toFixed(8));
            old_value = tBtn.value;
            flag = true;
        }else {
            switch (old_symbol) {
                case '%':
                    if(new_value==0){
                        alert('除数不能为0');
                        tBtn.value = 'NaN';
                    }else{
                        tBtn.value = parseFloat((old_value * 1%new_value * 1).toFixed(8));
                        old_value = tBtn.value;
                    }
                    break;
                case '+':
                    tBtn.value = parseFloat((old_value * 1+new_value * 1).toFixed(8));
                    old_value = tBtn.value;
                    break;

                case '-':
                    tBtn.value = parseFloat((old_value * 1-new_value * 1).toFixed(8));
                    old_value = tBtn.value;
                    break;

                case 'x':
                    tBtn.value = parseFloat((old_value * 1 * new_value * 1).toFixed(8));
                    old_value = tBtn.value;
                    break;

                case '÷':
                    if(new_value==0){
                        alert('除数不能为0');
                        tBtn.value = 'NaN';
                    }else{
                        tBtn.value = parseFloat((old_value * 1/new_value * 1).toFixed(8));
                        old_value = tBtn.value;
                    }
                    break;
                case '+/-':
                    tBtn.value = -(old_value * 1);
                    old_value = tBtn.value;
                    break;

                case '=':
                    if_operation_style(old_symbol);
                    old_value = tBtn.value;
                    break;
            }
        }
    }
    //点击数字
    function clickNumber() {
        setBtnStyle(this);//点击动画

        if (flag == true) {
            old_value = tBtn.value;

            tBtn.value = "";
            flag = false;
            old_symbol = new_symbol;

        } else {

        }

        var this_value = this.value;

        tBtn.value += this_value;

        new_value = tBtn.value;
        //处理符号

        console.log("++++++++++++++++++++");
        console.log("new_value:" + new_value);
        console.log("old_value:" + old_value);
        console.log("new_symbol:" + new_symbol);
        console.log("old_symbol:" + old_symbol);
    }

    //点击符号
    function clickSymbol() {
        setBtnStyle(this);//点击动画
        new_symbol = this.value;
        if (new_symbol == '+/-') {
            var abs = -new_value;//去相反值
            new_value = abs;
            tBtn.value = abs;
            if_operation_style(new_symbol);
        } else {
            if (flag == false) {
                console.log(flag);
                flag = true;
                if (old_value == undefined) {
                    old_value = new_value;
                    switch (new_symbol) {
                        case "+" :
                            new_value = 0;
                            break;
                        case "-" :
                            new_value = 0;
                            break;
                        case "x" :
                            new_value = 1;
                            break;
                        case "÷" :
                            new_value = 1;
                            break;
                    }
                }
                if_operation_style(new_symbol);
            } else {
                //new_value = tBtn.value;
                if(new_symbol == 'x^2' || new_symbol == 'sin' || new_symbol == 'cos' || new_symbol =='sqrt'){
                    new_value = tBtn.value;
                    if_operation_style(new_symbol);
                }
                old_symbol = new_symbol;

            }
        }
        console.log("++++++++++++++++++++");
        console.log("new_value:" + new_value);
        console.log("old_value:" + old_value);
        console.log("new_symbol:" + new_symbol);
        console.log("old_symbol:" + old_symbol);
    }
    /*    //定时器修改背景颜色方法
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
     //接收到的flag是true的话就把输入框的value滞空,因为是点了一下操作按钮
     if(flag){


     if(tBtn.value == ''){
     fuhao(newfh,oldValue,0)
     }else{
     fuhao(newfh,oldValue,newValue)
     }
     oldfh = newfh;
     tBtn.value = '';
     }else{
     //点击数字或者.显示在输入框中
     tBtn.value += aBtnValue;
     //清空一个空数组并把获得的屏幕上显示的值传入一个数组中
     valuess = tBtn.value;
     console.log(valuess);
     newValue = valuess;
     /!*        sumArr.push(valuess);
     console.log(sumArr);*!/

     flag = false;
     }


     }
     console.log(valuess);
     //绑定点击数字和小数点按钮事件
     /!*for(var i =  0;i < nBtn.length;i++){

     if(!!nBtn[i].addEventListener){
     nBtn[i].addEventListener("click",clickMe);
     }else if(!!nBtn[i].attachEvent){
     nBtn[i].attachEvent("click",clickMe);
     }else {
     nBtn[i].onclick = clickMe;
     }
     }*!/
     //判断点击的运算符号是什么
     function fuhao(obj,oldValue,newValue){
     switch (obj){
     case '+':
     tBtn.value = oldValue*1 + newValue*1;
     break;
     case '-':
     tBtn.value = oldValue*1 - newValue*1;
     break;
     case 'x':
     if(newValue == ""){
     newValue = 1;
     }
     tBtn.value = oldValue*1 * newValue*1;
     break;
     case '÷':
     if(newValue == ""){
     newValue = 1;
     }
     tBtn.value = (oldValue*1) / (newValue*1);
     break;
     case '+/-':
     tBtn.value = -(newValue*1)
     break;
     case '=':
     fuhao(oldfh);
     break;
     }
     }
     //点击计算按钮
     function clickYou() {
     //点击按钮颜色变化
     if(flag){
     tBtn.value = 0
     }
     flag = true;
     this.style.backgroundPosition = '0 0';
     aBtnReset(this);
     xvaluess = this.value;
     newfh = this.value;
     oldValue = valuess;

     console.log("old_value"+oldValue);
     fuhao(newfh,oldValue,newValue);


     /!*aaa=sumArr[sumArr.length-1];
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
     console.log(sumArr);*!/
     }
     //绑定点击数字和小数点按钮事件
     /!*for(var i =  0;i < xBtn.length;i++){
     if(!!xBtn[i].addEventListener){
     xBtn[i].addEventListener("click",clickYou);
     }else if(!!nBtn[i].attachEvent){
     xBtn[i].attachEvent("click",clickYou);
     }else {
     xBtn[i].onclick = clickYou;
     }
     }*!/
     //计算*/

})()
