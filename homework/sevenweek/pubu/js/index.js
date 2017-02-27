/**
 * Created by ymz on 17/2/17.
 */


$(document).ready(function(){
    imgLocation();
    //定义一个滚动
    var dataImg = {"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"},{"src":"6.jpg"},{"src":"7.jpg"},{"src":"8.jpg"},{"src":"9.jpg"},{"src":"10.jpg"}]};
    $(window).on("scroll",function () {
        if(scrollside()){
            $.each(dataImg.data,function(index,value){
                var box = $("<div>").addClass("box").appendTo($("#container"));
                var content = $("<div>").addClass("content").appendTo(box);
                //console.log("../image/"+$(value).attr("src"));
                $("<img>").attr("src","./image/"+$(value).attr("src")).appendTo(content);
            });
            imgLocation();
        }
    });

    $(window).on("resize",function () {
        imgLocation();
    });
});

/*
鼠标滚动自动加载方法
*/
function scrollside(){
    var box = $(".box");
    var lastboxHeight = box.last().get(0).offsetTop+Math.floor(box.last().height()/2);
    var documentHeight = $(document).width();
    var scrollHeight = $(window).scrollTop();
    return (lastboxHeight<scrollHeight+documentHeight)?true:false;
}


/*
瀑布流布局对齐方法
*/
function imgLocation(){
    var box = $(".box");
    var boxWidth = box.eq(0).width();  //获得图片宽度
    var num = Math.floor($(window).width()/boxWidth);  //获得第一排图片数量
    var boxArr = []; //一排中所有盒子的高度    //定义一个数组将第一排图片的宽度放进去
    box.each(function(index,value){
        /*console.log(index+'------'+value);*/
        var boxHeight = box.eq(index).height();  //定义照片的高度
        if(index<num){
            boxArr[index] = boxHeight;
            //console.log(boxArr);
            $(value).css({  //定义下一排照片摆放的位置在第一排最小高度下面
                "position":"absolute",
                "top":0,
                "left":index*boxWidth
            });
        }else{
            var minboxHeight = Math.min.apply(null,boxArr);  //获得第一排最小高度的值
            /*console.log(minboxHeight);*/
            var minboxIndex = $.inArray(minboxHeight,boxArr); //获得第一排高度最下照片的下表
            //console.log(minboxIndex);

            $(value).css({  //定义下一排照片摆放的位置在第一排最小高度下面
                "position":"absolute",
                "top":minboxHeight,
                "left":box.eq(minboxIndex).position().left
            });

            boxArr[minboxIndex]+=box.eq(index).height(); //重新计算最小高度,因为下一排在第一排最小高度下面摆放了一张之后高度增加了
        }
    })
}