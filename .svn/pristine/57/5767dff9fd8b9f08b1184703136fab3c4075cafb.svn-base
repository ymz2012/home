
(function(){
    $(function(){
        new directSeeding();
    });
    var directSeeding = function(){
        this.int();
    };
    directSeeding.prototype.int = function(){
        this.readDom();
        this.bindEven();
    };
    directSeeding.prototype.readDom = function(){
        var _this = this;
        var broadcastId = getQueryString("broadcastId");
        var readFun = {
            ejsGet: function (option) {
                var ohtml = new EJS({
                    'element': option.ejsid
                }).render(option.data);
                (option.tagid).html(ohtml);
            },
            readDetail: function(data){
                this.ejsGet({
                    data:data,
                    ejsid: "ejs_wrap",
                    tagid: $("#wrap")
                })
            }
        };
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
        api.direct_seeding_share({
            broadcastId:broadcastId,
            num:0
        },function(data){
            console.log(data);
            data.font = parseFloat($('html').css('font-size'));

            var newRow1=[],newRow2=[];
            for(var i=0,j=data.rows.length-1; i<data.rows.length,j>=0;i++,j--){
                newRow1[j]=data.rows[i];
            }
            data.rows = newRow1;
            if(data.rows.length >0){
                for(var i =0; i<data.rows.length ; i++) {
                    if(data.rows[i].messageType == 5){
                        data.rows[i].message=JSON.parse(data.rows[i].message);
                    }
                    data.rows[i].dateline = format((data.rows[i].dateline) * 1000);
                    if(data.rows[i].messageType != 2) {
                        newRow2.push(data.rows[i]);
                    }
                }
            }
            data.rows = newRow2;
            data.begainday = Math.floor((data.data.beginTime - data.data.nowTime)/86400);
            data.begainhour = Math.floor((data.data.beginTime - data.data.nowTime)%86400/3600);
            data.begainminute = Math.floor((data.data.beginTime - data.data.nowTime)%86400%3600/60);
            data.endday = Math.floor((data.data.endTime - data.data.nowTime)/86400);
            data.endhour = Math.floor((data.data.endTime - data.data.nowTime)%86400/3600);
            data.endminute = Math.floor((data.data.endTime - data.data.nowTime)%86400%3600/60);
            if(data.errno == 0){
                readFun.readDetail(data);
                _this.bindeven();
            }else{
                alert(data.errdesc);
            }
        },function () {
            alert("系统异常");
        })
    };
    directSeeding.prototype.bindEven = function(){
        this.bindeven = function(){
            $(".voice .box").off('click').on('click',function(){
                if($(this).find('.line').hasClass('play')){
                    $(this).find('.line').removeClass('play');
                    $(this).find('.line_top').css({'display':'none','-webkit-animation': 'none'});
                    $(this).find('audio')[0].pause();
                }else{
                    $(this).find('.line').addClass('play');
                    $(this).find('.line_top').css({'display':'block','-webkit-animation': 'line_play 1s infinite'});
                    $(this).find('audio')[0].load();
                    $(this).find('audio')[0].play();
                    $(this).parent().parent().parent().siblings().find('audio')[0].pause();
                    $(this).parent().parent().parent().siblings().find('.line_top').css({'display':'none','-webkit-animation': 'none'});
                }
            });
            $('.voice .box').find('audio').off('ended').on('ended',function () {
                $('.line').removeClass('play');
                $(this).siblings().find('.line_top').css({'display':'none','-webkit-animation': 'none'});
                $(this)[0].pause();
            });
            $('#down').off('click').on('click',function(){

                    window.location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.yoloho.ubaby&no_cache="+1e6*Math.random();
            });
            $('#close').off('click').on('click',function(){
                $('#footer_fixed').css('display','none');
            })
        }
    }
})();