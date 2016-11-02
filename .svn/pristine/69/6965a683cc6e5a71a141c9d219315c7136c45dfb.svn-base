(function(){
    function add0(m){return m<10?'0'+m:m }
    function format(shijianchuo)
    {
        //shijianchuo是整数，否则要parseInt转换
        var time = new Date(shijianchuo);
        var m = time.getMonth()+1;
        var d = time.getDate();
        var h = time.getHours();
        var mm = time.getMinutes();
        return add0(m)+'-'+add0(d)+' '+add0(h)+':'+add0(mm);
    }
    $(function(){
        new topicDetails();
    });
    var topicDetails = function(){
        this.int();
    };
    topicDetails.prototype.int = function(){
        this.readDom();
        this.bindEven();
    };
    topicDetails.prototype.readDom = function(){
        var _this = this;
        var id = getQueryString("id");
        this.readFun = {
            ejsGet: function (option) {
                var ohtml = new EJS({
                    'element': option.ejsid
                }).render(option.data);
                (option.tagid).html(ohtml);
            },
            readTopicDetail: function(data){
                this.ejsGet({
                    data:data,
                    ejsid: "ejs_topic_wrap",
                    tagid: $("#topic_wrap")
                })
            },
            readMoreAnswer: function(data){
                var ohtml = new EJS({
                    'element': 'ejs_more_answer'
                }).render(data);
                $("#answer_box").append(ohtml);
            }
        };

        api.topic_details({
            id:id
        },function(data){
            if(data.errno == 0){
                data.data=JSON.parse(data.data);
                data.data.data.topic.createDate = format(data.data.data.topic.createDate);
                for(var i=0;i<data.comment_list.length;i++){
                    data.comment_list[i].answer_time =format(data.comment_list[i].answer_time);
                    var emoji = data.comment_list[i].emotion;
                    if(emoji != null){
                        for(emoji in emojiMap){
                            if( emojiMap[emoji] != ''){
                                data.comment_list[i].emotion = emojiMap[emoji];
                            }
                        }
                    }
                }
                if(data.data.data.topic.topicTypeId == 6 && data.hasGoodAnswer != 0){
                    data.goodAnswer.answer_time = format(data.goodAnswer.answer_time);
                    var emoji = data.goodAnswer.emotion;
                    if(emoji != null){
                        for(emoji in emojiMap){
                            if( emojiMap[emoji] != ''){
                                data.goodAnswer.emotion = emojiMap[emoji];
                            }
                        }
                    }
                }
                console.log(data);
                _this.refreshtime = data.refreshtime;
                _this.nowPage = data.nowPage;
                _this.readFun.readTopicDetail(data);
                _this.bindeven();
            }else{
                alert(data.errdesc);
            }
        },function () {
            alert("系统异常");
        })
    };
    topicDetails.prototype.bindEven = function(){
        var _this = this;
        var id = getQueryString("id");
        this.bindeven = function(){
            $('#down').off('click').on('click',function(){
                var ua = navigator.userAgent.toLowerCase();
                if (/android/.test(ua)) {
                    window.location.href = "http://www.haoyunma.com";
                } else {
                    window.location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.yoloho.ubaby";
                }
            });
            $('#close').off('click').on('click',function(){
                $('#footer_fixed').css('display','none');
            });
            $('#more_btn').off('click').on('click',function(){
                var refreshtime = _this.refreshtime;
                var nowPage = _this.nowPage+1;
                console.log(refreshtime);
                if($(this).hasClass('disable')){
                    return false;
                }
                api.topic_details({
                    refreshtime:refreshtime,
                    nowPage:nowPage
                },function(data){
                    if(data.errno == 0){
                        console.log(data);
                        if(data.data != undefined){
                            data.data=JSON.parse(data.data);
                            data.data.data.topic.createDate = new Date(parseInt(data.data.data.topic.createDate) ).toLocaleDateString();
                        }
                        if(data.comment_list.length>0){
                            for(var i=0;i<data.comment_list.length;i++){
                                data.comment_list[i].answer_time =format(data.comment_list[i].answer_time);
                            }
                            _this.readFun.readMoreAnswer(data);
                        }else{
                            $('#more_btn').html('没有更多').css('color','#666').addClass('disable');
                        }
                        _this.refreshtime = data.refreshtime;
                        _this.nowPage = data.nowPage;
                        _this.bindeven();
                    }else{
                        alert(data.errdesc);
                    }
                },function () {
                    alert("系统异常");
                })
            });
        }
    }
})();