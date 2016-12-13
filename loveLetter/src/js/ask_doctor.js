/**
 * Created by ymz on 16/11/23.
 */

(function(){
    text = new Array(
        "时光让我承认",
        "在此生行程上",
        "我们分离了",
        "尽管如此",
        "某一个地方",
        "在你离开后",
        "19位玛芬悄悄发来私信",
        "174位玛芬默默的关注了你",
        "765位玛芬来过你的个人主页",
        "........",
        "发生这么多'大事'",
        "你却浑然不知"
    );
    function type(){
        str += text[i] +"<br>";
        text.innerHTML = str;
        console.log(text);
        i++;
        if (i>=text.length){
            setTimeout("type()",500);
        }

    }
})();

