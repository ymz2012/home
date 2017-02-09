/**
 * Created by ymz on 17/2/9.
 */
var arr = ["a","x","b","d","m","a","k","m","p","j","a"];
var ret = {};
var res = [];
var max;
//将字母 以及出现的次数和位置放对象
for(var i = 0; i < arr.length; i++) {
    var item = arr[i];
    if(!ret[item]) {
        ret[item] = {};
        ret[item][item] = item;
        ret[item].count = 1;
        ret[item].index = [];
        ret[item].index.push(i);
    } else {
        ret[item].count++;
        ret[item].index.push(i);
    }
}
for(var i in ret) {
    var item = ret[i];
    res.push(item);
}
//按重复次数排序
res.sort(function(a,b) {
    return a.count - b.count < 0;
});
//取重复次数最多的
for(var i = 0; i < res.length - 1; i++) {
    if(i === 0) {
        max = res[i].count;
    }
    if(res[i].count === max) {
        for(var temp in res[i]){
            console.log(res[i][temp]);
        }
    }
}
