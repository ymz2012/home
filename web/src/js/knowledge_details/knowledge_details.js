
    var knowledge=function (){
        this.init();
    };
    knowledge.prototype.init = function(){
        this.readDom();
        this.bindEven();
    }
    knowledge.prototype.readDom = function(){
        this.flag = {};
        var _this = this;
        var id = getQueryString("id");
        this.lastid =  {mom:0,help:0};
        var uid = $("meta[name=hym_uid]").attr("content") || "";
        _this.topicid = 7;
            this.readFun = {
            ejsGet: function (option) {
                var ohtml = new EJS({
                    'element': option.ejsid
                }).render(option.data);
                (option.tagid).html(ohtml);
            },
            readContentTop:function(data){
                data.kdetail.content=(data.kdetail.content).replace(/font-size: \d{0,3}px;/g,'');
                this.ejsGet({
                    data:data,
                    ejsid: "ejs_content_top",
                    tagid: $("#content_top")
                })
            },
            readRecommend: function(data){        //推荐
                var rc_flag = $("meta[name=rc_flag]").attr("content") || 1;
                console.log(rc_flag);
                if(rc_flag == 1){
                    this.ejsGet({
                        data:data,
                        ejsid: "ejs_recommend",
                        tagid: $("#recommend")
                    })
                }
            },
            readExperience:function(data){    //经验tab栏
                this.ejsGet({
                    data:data,
                    ejsid: "ejs_experience",
                    tagid: $("#experience")
                })
            },
            readMomexperience:function(data){    //经验妙招
                this.ejsGet({
                    data:data,
                    ejsid: "ejs_mom_experience",
                    tagid: $("#mom_experience")
                })
            },
            readAddexperience:function(data,tagid){  //用户发布
                var ohtml = new EJS({
                    'element': 'ejs_comment_box'
                }).render(data);
                $(ohtml).prependTo("#"+tagid);

            },
            readHelpxperience:function(data){   //用户提问
                this.ejsGet({
                    data:data,
                    ejsid: "ejs_help_experience",
                    tagid: $("#help_experience")
                })
            },
            readMore:function(data,tagid){
                var ohtml = new EJS({
                    'element': 'ejs_more_experience'
                }).render(data);
                $("#"+tagid).append(ohtml);
            }
        }
        this.readerBody = function (data,ops,cb) {   //第一次进入页面渲染
            if(!_this.flag.com){
                var arr = data.kdetail.keyword;
                data.kdetail.keyword=arr.split(",");
                _this.readFun.readContentTop(data);
                _this.readFun.readRecommend(data);
                _this.readFun.readExperience(data);
                _this.flag.com = true;
            }
            if(!_this.flag.mom&&ops.topicTypeId == 7){
                _this.readFun.readMomexperience(data);
                _this.flag.mom = true;
                _this.lastid.mom = data.lastid;
            };
            if (!_this.flag.help&&ops.topicTypeId == 6){
                _this.readFun.readHelpxperience(data);
                _this.flag.help = true;
                _this.lastid.help = data.lastid;
            };
            _this.bindeven();
            cb&&cb();
        }
        this.insertComment = function(data,tagid){   //用户发布
            _this.readFun.readAddexperience(data,tagid);
            _this.bindeven();
        };
        this.readBody = function(ops,cb){
            if(ops.topicTypeId==7&&!_this.flag.mom||ops.topicTypeId==6&&!_this.flag.help){
                api.knowledge_details(ops,function(data){
                    console.log(data);
                    if(data.errno == 0){
                        _this.readerBody(data,ops,cb);
                    }else{
                        alert(data.errdesc);
                    }
                },function () {
                    alert("系统异常");
                })
            }else{
                cb&&cb();
            }

        }
        this.readBody({
            id:id,
            uid:uid,
            lastid:_this.lastid.mom,
            topicTypeId:_this.topicid
        });
    };
    knowledge.prototype.bindEven = function(){
        var _this=this;
        var id = getQueryString("id");
        var uid = $("meta[name=hym_uid]").attr("content") || "";
        var token = getQueryString("token");
        var evenFun = {
            topbtnFun: function () {
                var gradeId = $(this).data("gradeid");
                var upGradeId = $(this).data("upgradeid");
                var typeName = encodeURI($(this).data("tname"));
                window.location.href = "ubaby://knowledgeGrade/new?gradeId=" + gradeId + "&upGradeId=" + upGradeId + "&typeName=" + typeName;
            },
            pointFun: function () {
                var categoryId = $(this).data("categoryid");
                var pointName = $(this).data("tagname");
                window.location.href = "ubaby://knowledgeCategory/new?categoryId=" + categoryId + "&typeName=" + pointName;
            },
            recommendFun: function () {
                var url = $(this).data("url");
                window.location.href = url;
            },
            tabhelpFun: function () {
                var the = this;
                _this.topicid = $(this).data("id");
                _this.readBody({
                    id: id,
                    uid: uid,
                    lastid: _this.lastid.help,
                    topicTypeId: _this.topicid
                }, function () {
                    var index = $(the).index();
                    $(the).addClass("y_color").siblings().removeClass("y_color");
                    $("#experience_tag").find('.exper').eq(index).css({"display": "block"}).siblings().css({"display": "none"});
                });
            },
            userzoneFun: function () {
                var Uid  =  $(this).data("uid");
                var usernik = $(this).data("usernik");
                if(usernik != "匿名用户"){
                    window.location.href = "ubaby://userSelfZone/new?userOpenId=" + Uid + "&userNick=" + usernik;
                }else{
                    return false;
                }
            },
            contentFun: function () {
                var topicid = $(this).data("topicid");
                window.location.href = "ubaby://topic/new?id=" + topicid;
            },
            zanFun: function () {
                var theDOM = this;
                var topicid = $(this).data("topicid");
                if ($(this).hasClass("on")) {
                    api.addlike({
                        uid: uid,
                        objType: "T",
                        topicId: topicid,
                        objId: topicid
                    }, function (data) {
                        if (data.errno == 0) {
                            var zanNum = $(theDOM).find('.num').html();
                            if (zanNum == "点赞") {
                                zanNum = 0;
                            }
                            $(theDOM).removeClass("on");
                            $(theDOM).find('.num').html(zanNum*1+ 1);
                        } else {
                            alert(data.errdesc);
                        }
                    }, function () {
                        alert("系统异常");
                    })
                } else {
                    alert("您已点过赞");
                }
            },
            commentFun: function () {
                var topicId = $(this).data("topicid");
                window.location.href = "ubaby://replyKnowledgeTopic/new?topicId=" + topicId;
            },
            shareexprenceFun: function () {
                var groupId = $(this).data("groupid");
                var kid = $(this).data("kid");
                var title = encodeURI($(this).data("title"));
                window.location.href = "ubaby://shareExperrienceTopic/new?groupId=" + groupId + "&kid=" + kid + "&title=" + title;
            },
            helpexprenceFun: function () {
                var groupId = $(this).data("groupid");
                var kid = $(this).data("kid");
                var title = encodeURI($(this).data("title"));
                window.location.href = "ubaby://shareAnswerTopic/new?groupId=" + groupId + "&kid=" + kid + "&title=" + title;
            },
            moreBtnFun: function () {
                if($(this).hasClass("disable")){
                   return false;
                }
                if (_this.topicid == 6) {
                    var lastid = _this.lastid.help;
                } else if (_this.topicid == 7) {
                    lastid = _this.lastid.mom;
                }
                api.knowledge_details({
                    lastid: lastid,
                    id:id,
                    uid:uid,
                    topicTypeId:_this.topicid
                }, function (data) {
                    console.log(data);
                    if (data.errno == 0) {
                        if(data.topicList.length != 0){
                            if(_this.topicid == 7){
                                _this.readFun.readMore(data,'mom_comment');
                                _this.lastid.mom = data.lastid;
                                $("#mom_more_btn").html('点击加载更多').removeClass("disable");
                            };
                            if (_this.topicid == 6){
                                _this.readFun.readMore(data,'help_comment');
                                _this.lastid.help = data.lastid;
                                $("#help_more_btn").html('点击加载更多').removeClass("disable");
                            };
                        }else{
                            if(_this.topicid == 7){
                                $("#mom_more_btn").html('没有更多').addClass("disable");
                            }
                            if (_this.topicid == 6){
                                $("#help_more_btn").html('没有更多').addClass("disable");
                            }

                        }
                        _this.bindeven();
                    } else {
                        alert(data.errdesc);
                    }
                }, function () {
                    alert("系统异常");
                })
            }
        };
        this.bindeven = function(){
            $('#top_btn').find('span').off("click").on("click",evenFun.topbtnFun);
            $('#point_details').find("span").off("click").on("click",evenFun.pointFun);
            $('#introduce li div').find('.url').off("click").on("click",evenFun.recommendFun);
            $('#experience').off("click").on("click","li",evenFun.tabhelpFun);
            $('#share_exprence').off("click").on("click",evenFun.shareexprenceFun);
            $('#help_exprence').off("click").on("click",evenFun.helpexprenceFun);
            $('#mom_comment,#help_comment').find('.user_comment').off("click").on('click',evenFun.commentFun);
            $('#mom_comment,#help_comment').find('.zan').off("click").on("click",evenFun.zanFun);
            $('#mom_comment,#help_comment').find('.comment').off("click").on("click",evenFun.userzoneFun);
            $('#mom_comment,#help_comment').find('.word_n,.topic_img').off("click").on('click',evenFun.contentFun);
            $('#mom_more_btn,#help_more_btn').off("click").on('click',evenFun.moreBtnFun);
        };
    };
    var a = new knowledge();
    function topicInfo(infos){
        var topicinfos = eval('(' + infos + ')');
        topicinfos.createDate = unix_to_datetime(topicinfos.createDate);
        if(topicinfos.topicTypeId ==7){
            a.insertComment(topicinfos,'mom_comment');
            $("#mom_prompt").remove();
        }else{
            a.insertComment(topicinfos,'help_comment');
            $("#help_prompt").remove();
        }
    };
    function unix_to_datetime(unix) {
        var date = new Date(unix);
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        var D = date.getDate() < 10 ? '0'+date.getDate() : date.getDate();
        var time = Y+M+D;
        return time;
    }
