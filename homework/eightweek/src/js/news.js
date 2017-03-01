/**
 * Created by ymz on 17/3/1.
 */
$(document).ready(function(){
    refreshNews();
});


function refreshNews(){
    var $lists = $('article ul');
    $lists.empty();
    $.ajax({
        url:'./server/getnews.php',
        type:'get',
        datatype:'json',
        success:function(data){
            console.log(data);
/*            var $list = $('<li></li>').addClass('news-list').prependTo($lists);
            var $newsImg = $('<div></div>').addClass('newsimg').appendTo($list);
            var $img = $('<img>').attr('src',data.newsimg).appendTo($newsImg);
            var $newscontent = $('<div></div>').addClass('newscontent').appendTo($list);
            var $h1 = $('<h1></h1>').html(data.newstitle).appendTo($newscontent);
            var $p = $('<p></p>').appendTo($newscontent);
            var $newsTime = $('<span></span>').addClass('newstime').html(data.newstime).appendTo($p);
            var $newsSrc = $('<span></span>').addClass('newssrc').html(data.newssrc).appendTo($p);*/
        }
    })


}