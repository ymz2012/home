/**
 * Created by ymz on 17/3/2.
 */

//打开后台页面的时候发送请求 刷新新闻列表

$(document).ready(function(){
    var $newsTable = $('#newstable tbody');
    refreshNews();
    //添加新闻

    $('#btnsubmit').click(function(e){
        e.preventDefault();
        //输入判断

        if($('#newstitle').val() === "" || $('#newsimg').val() === "" || $('#newstime').val() === "" || $('#newssrc').val() === ""){
            if($('#newstitle').val() === ""){
                $('#newstitle').parent().addClass('has-error');
            }else{
                $('#newstitle').parent().removeClass('has-error');
            }
            if($('#newsimg').val() === ""){
                $('#newsimg').parent().addClass('has-error');
            }else{
                $('#newsimg').parent().removeClass('has-error');
            }
            if($('#newstime').val() === ""){
                $('#newstime').parent().addClass('has-error');
            }else{
                $('#newstime').parent().removeClass('has-error');
            }
            if($('#newssrc').val() === ""){
                $('#newssrc').parent().addClass('has-error');
            }else{
                $('#newssrc').parent().removeClass('has-error');
            }
        }else {
            var jsonNews = {
                newstitle:$('#newstitle').val(),
                newstype:$('#newstype').val(),
                newsimg:$('#newsimg').val(),
                newstime:$('#newstime').val(),
                newssrc:$('#newssrc').val()
            }
            //提交添加
            $.ajax({
                url:'./server/insert.php',
                type:'post',
                data:jsonNews,
                datatype:'json',
                success:function(data){
                    console.log(data);
                    refreshNews();
                }

            });
        }
    });

    //删除新闻的功能
    var deleteId =null;
    $newsTable.on('click','.btn-danger',function(e){
        $('#deleteModal').modal('show');
        deleteId = $(this).parent().prevAll().eq(3).html();
    });

    $('#deleteModal #confirmDelete').click(function(e){
        if(deleteId){
            $.ajax({
                url:'./server/delete.php',
                type:'post',
                data:{newsid:deleteId},
                success:function(){
                    console.log('删除成功');
                    $('#deleteModal').modal('hide');
                    refreshNews();

                }
            })
        }
    });
    //修改新闻的功能
    var updateId =null;
    $newsTable.on('click','.btn-primary',function(e){
        $('#updateModal').modal('show');
        updateId = $(this).parent().prevAll().eq(3).html();
        $.ajax({
            url:'./server/curnews.php',
            type:'get',
            datatype:'json',
            data:{newsid:updateId},
            success:function(data){
                $('#unewstitle').val(data[0].newstitle);
                $('#unewstype').val(data[0].newstype);
                $('#unewsimg').val(data[0].newsimg);
                $('#unewssrc').val(data[0].newssrc);
                var utime = data[0].newstime.split(' ')[0];
                $('unewstime').val(utime);

            }
        })
    });

    $('#updateModal #confirmUpdate').click(function(e){
        $.ajax({
            url:'./server/update.php',
            type:'post',
            data:{
                newstitle:$('#unewstitle').val(),
                newstype:$('#uewstype').val(),
                newsimg:$('#unewsimg').val(),
                newstime:$('#unewstime').val(),
                newssrc:$('#unewssrc').val(),
                id:updateId
            },
            success:function(data){
                $('#updateModal').modal('hide');
                refreshNews();
            }
        })
    });






    function refreshNews(){
        //清空所有新闻列表
        $newsTable.empty();
        $.ajax({
            type:'get',
            url:'./server/getnews.php',
            datatype:'json',
            success:function(data){
                console.log(data);
                data.forEach(function(item,index,array){
                    var $tdid = $('<td>').html(item.id);
                    var $tdtype = $('<td>').html(item.newstype);
                    var $tdtitle = $('<td>').html(item.newstitle);
                    var $tdimg = $('<td>').html(item.newsimg);
                    var $tdsrc = $('<td>').html(item.newssrc);
                    var $tdtime = $('<td>').html(item.newstime);
                    var $tdctrl = $('<td>');
                    var $btnupdate = $('<button>').addClass('btn btn-primary btn-xs').html('编辑');
                    var $btndelete = $('<button>').addClass('btn btn-danger btn-xs').html('删除');
                    $tdctrl.append($btnupdate,$btndelete);
                    var $tRow = $('<tr>');
                    $tRow.append($tdid,$tdtype,$tdtitle,$tdimg,$tdsrc,$tdtime,$tdctrl);
                    $newsTable.append($tRow);
                })
            }
        });
    }
});

