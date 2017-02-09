/**
 * Created by ymz on 17/2/9.
 */
function panduan(){
    var score = document.getElementById('num').value;
    /*判断是否输入了成绩*/
    if(score==""){
        alert('请输入您的成绩再做判断');
        return;
    }
    /*判断输入的是否是数字*/
    var reg = /^\d+(\.\d+)?$/;
    if(reg.test(score)==false){
        alert('您输入的成绩不是合法的成绩,请检查后输入')
        return;
    }
    /*判断成绩区间*/
    if(score<=100&&score>=90){
        document.getElementById('result').innerText = '您是一等生,继续保持,加油';
    }else if(score<90&&score>=80){
        document.getElementById('result').innerText = '您是二等生,继续保持,加油';
    }else if(score<80&&score>=70){
        document.getElementById('result').innerText = '您是三等生,继续保持,加油';
    }else if(score<70&&score>=60){
        document.getElementById('result').innerText = '您是四等生,继续保持,加油';
    }else if(score<60&&score>=50){
        document.getElementById('result').innerText = '您是五等生,要努力了,加油';
    }else if(score<50&&score>=40){
        document.getElementById('result').innerText = '您是六等生,继续保持,加油';
    }else if(score<40&&score>=30){
        document.getElementById('result').innerText = '您是七等生,继续保持,加油';
    }else if(score<30&&score>=20){
        document.getElementById('result').innerText = '您是八等生,继续保持,加油';
    }else if(score<20&&score>=10){
        document.getElementById('result').innerText = '您是九等生,继续保持,加油';
    }else if(score<10&&score>=0){
        document.getElementById('result').innerText = '您是十等生,继续保持,加油';
    }else{
        document.getElementById('result').innerText = '您这个分数不是老师批改的,请检查后重新输入';
    }
}