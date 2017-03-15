/**
 * Created by ymz on 17/3/15.
 */
//合并参数

/*
function add(num1,num2){
    return (num1+num2);
}


function totalAdd(num3){
    return 50 +add(1,2);
}
totalAdd(50);//结果是*/



//级联函数

//设计模式
//单例模式 保证一个类只有一个实例   实现的方法是先判断实例是否存在 如果存在直接返回  如果不存在就创建了然后再返回
//这就确保了一个类只有一个实例对象 在js里 单例作为一个命名空间提供者 从全局命名空间里提供一个唯一的访问点来访问该对象
//模式作用  模块间通信  系统中某个类的对象只能存在一个  保护自己的属性和方法
//注意事项 注意this的使用  闭包容易造成内存泄漏 不需要的赶快干掉 注意new的成本


//单例模式代码实战总结

//1.独立的对象  建两个 一个是小王  一个是小李
//2.让小王和小李通过门铃进行通信
//3.先看一下小王家有没有门 如果有门直接通过门铃通讯didi ,如果没有先建门
//4.两个单例之间开始通讯

/*
var xiaowang = (function(){
    var xiaowangjia = function(message){
        this.menling = message;
    };
    var men;
    var info = {
        sendMessage:function(message){
            if(!men){
                men = new xiaowangjia(message);
            }
            return men;
        }
    };
    return info;
})();

var xiaoli = {
    callXiaowang:function(msg){
        var _xw = xiaowang.sendMessage(msg);
        alert(_xw.menling);
        _xw = null; //等待垃圾回收
    }
};

xiaoli.callXiaowang("didi");*/

//开发用到的单例模式

//页面上6个按钮的点击

//工厂模式的解读

//工厂模式定义一个用于创建对象的接口,这个接口由子类决定实例化哪个类.该模式使一个类的实例化延迟到了子类.而子类可以重写接口方法以便创建的时候指定自己的对象类型(抽象工厂);
//这个模式十分有用,尤其是创建对象的流程赋值的时候,比如依赖于很多设置文件等.并且,你会经常在程序里看到工厂方法,用于让子类类定义需要创建的对象类型.
//模式的作用1.对象的构建十分复杂2.需要依赖具体的环境创建不同的实例3.处理大量具有相同属性的小对象
//注意事项1.不能滥用工厂  有时候仅仅是给代码增加复杂度


//工厂应该有厂长来决定运行到底哪条产品线
var gongchang = {

};
gongchang.chanyifu = function(){
    this.gongren = 50;
    alert('我们有'+this.gongren)
}
gongchang.chanxie = function(){
    alert('产鞋子');
}
gongchang.yunshu = function(){
    alert('运输');
}

gongchang.changzhang = function(para){
    return new gongchang[para]();
}

var me = gongchang.changzhang('chanyifu');
