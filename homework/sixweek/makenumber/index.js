/**
 * Created by ymz on 17/2/13.
 */
(function () {
    //设置点击之后背景颜色变化
    var aBtn = document.getElementsByClassName('baseBtnCommonCss');
    for(var i=0;i<=aBtn.length;i++){
        if(aBtn[i].addEventListener){
            console.log(123);
            aBtn[i].addEventListener("click",clickMe);
        }else if(aBtn[i].attachEvent){
            aBtn[i].attachEvent("click",clickMe);
        }else {
            aBtn[i].onclick = clickMe;
        }
        function clickMe() {
            this.style.backgroundPosition = '0 0';
        }
    }
})()