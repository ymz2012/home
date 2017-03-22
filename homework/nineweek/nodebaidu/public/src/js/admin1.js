/**
 * Created by ymz on 17/3/2.
 */

//打开后台页面的时候发送请求 刷新新闻列表

$(document).ready(function(){
    var $newsTable = $('#newstable tbody');
    refreshNews();
    //添加新闻

    //获取token
    var token = "";
    function getToken(){
        $.ajax({
            url:'/admin/token'


        })
    }

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
                newstitle:htmlEncode($('#newstitle').val()),
                newstype:htmlEncode($('#newstype').val()),
                newsimg:htmlEncode($('#newsimg').val()),
                newstime:htmlEncode($('#newstime').val()),
                newssrc:htmlEncode($('#newssrc').val())
            }
            //提交添加
            $.ajax({
                url:'/admin/insert',
                type:'post',
                data:jsonNews,
                datatype:'json',
                success:function(data){
                    console.log(data);
                    refreshNews();
                    window.location.reload();
                }

            });


        }
    });

    //删除新闻的功能
    var deleteId =null;
    $newsTable.on('click','.btn-danger',function(e){

        $('#deleteModal').modal('show');
        deleteId = $(this).parent().prevAll().eq(5).html();
    });

    $('#deleteModal #confirmDelete').click(function(e){
        if(deleteId){
            $.ajax({
                url:'/admin/delete',
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
        updateId = $(this).parent().prevAll().eq(5).html();
        console.log(updateId);
        $.ajax({
            url:'/admin/curnews',
            type:'get',
            datatype:'json',
            data:{newsid:updateId},
            success:function(data){
                console.log(data);
                $('#unewstitle').val(htmlspecialchars_decode(data[0].newstitle));
                $('#unewstype').val(htmlspecialchars_decode(data[0].newstype));
                $('#unewsimg').val(htmlspecialchars_decode(data[0].newsimg));
                $('#unewssrc').val(htmlspecialchars_decode(data[0].newssrc));
                var utime = data[0].newstime.split('T')[0];
                $('#unewstime').val(htmlspecialchars_decode(utime));
            }
        })
    });

    $('#updateModal #confirmUpdate').click(function(e){
       /* updateId = $(this).parent().prevAll().eq(5).html();
        console.log(updateId);*/
        $.ajax({
            url:'/admin/update',
            type:'post',
            data:{
                newstitle:htmlEncode($('#unewstitle').val()),
                newstype:htmlEncode($('#unewstype').val()),
                newsimg:htmlEncode($('#unewsimg').val()),
                newstime:htmlEncode($('#unewstime').val()),
                newssrc:htmlEncode($('#unewssrc').val()),
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
            url:'/admin/getnews',
            datatype:'json',
            success:function(data){
                console.log(data);
                data.forEach(function(item,index,array){
                    var $tdid = $('<td>').html(item.id);
                    var $tdtype = $('<td>').html(item.newstype);
                    var $tdtitle = $('<td>').html(item.newstitle);
                    var $tdimg = $('<td>').html(item.newsimg);
                    var $tdsrc = $('<td>').html(item.newssrc);
                    //去除后台带的T和Z
                    var $tdtime = $('<td>').html(moment(item.newstime).format("YYYY-MM-DD HH:mm"));
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

    //将特殊字符转换回来
    function htmlspecialchars_decode(str){
        str = str.replace(/&amp;/g, '&');
        str = str.replace(/&lt;/g, '<');
        str = str.replace(/&gt;/g, '>');
        str = str.replace(/&quot;/g, "''");
        str = str.replace(/&#039;/g, "'");
        return str;
    }
    //将传入的非法字符串进行转码传入后端
    function htmlEncode(html){
        //1.首先动态创建一个容器标签元素，如DIV
        var temp = document.createElement ("div");
        //2.然后将要转换的字符串设置为这个元素的innerText(ie支持)或者textContent(火狐，google支持)
        (temp.textContent != undefined ) ? (temp.textContent = html) : (temp.innerText = html);
        //3.最后返回这个元素的innerHTML，即得到经过HTML编码转换的字符串了
        var output = temp.innerHTML;
        temp = null;
        return output;
    }
});

