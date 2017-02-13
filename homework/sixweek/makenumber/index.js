/**
 * Created by ymz on 17/2/9.
 */
/*刷新当前页面清空数据*/
function clearAll(){
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    document.getElementById('result').innerText = "";
}
function calculation(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    /*判断是否输入了数字*/
    if(num1=="" && num2==""){
        alert('请输入数字之后点击计算')
        return;
    }else if(num1=="" && num2!=""){
        alert('请输入第一个数字后点击计算')
        return;
    }else if(num1!="" && num2==""){
        alert('请输入第二个数字后点击计算')
        return;
    }
    /*判断输入的字符是不是数字*/
    var reg = /^\d+(\.\d+)?$/;
    if(reg.test(num1)==false || reg.test(num2)==false){
        alert('您输入的字符中有不是数字的,请检查后重新输入')
        return;
    }
    var operator = document.getElementById('op').value;
    console.log(operator);
    /*判断除数是否是0*/
    if(operator=='/'){
        if(num2=='0'){
            alert('0不能作为除数,请换个数')
            return;
        }
    }
    var sum =makeNumber(parseFloat(num1),parseFloat(num2),operator);
    document.getElementById('result').innerText = sum;
}
function makeNumber(n1,n2,oper){
    switch (oper){
        case '+':
            return parseFloat((n1+n2).toFixed(8));
        case '-':
            return parseFloat((n1-n2).toFixed(8));
        case '*':
            return parseFloat((n1*n2).toFixed(8));
        case '/':
            return parseFloat((n1/n2).toFixed(8));
        default:
            return "未知操作符";
    }
}