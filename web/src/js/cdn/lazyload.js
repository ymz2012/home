(function ($) {
    var sHeight = $(window).height()/2;
    $.fn.picLazyLoad = function (settings) {
        var $this = $(this),
        _winScrollTop = 0,
        _winHeight = $(window).height();
        settings = $.extend({
            threshold: sHeight, // 提前高度加载
            placeholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAABbUlEQVR4Xu3VUQkAMAzE0NW/xmrZYCry8aogJByd3b3HZQyMIJkWH0SQVg9BYj0EEaRmIMbjhwgSMxDDsRBBYgZiOBYiSMxADMdCBIkZiOFYiCAxAzEcCxEkZiCGYyGCxAzEcCxEkJiBGI6FCBIzEMOxEEFiBmI4FiJIzEAMx0IEiRmI4ViIIDEDMRwLESRmIIZjIYLEDMRwLESQmIEYjoUIEjMQw7EQQWIGYjgWIkjMQAzHQgSJGYjhWIggMQMxHAsRJGYghmMhgsQMxHAsRJCYgRiOhQgSMxDDsRBBYgZiOBYiSMxADMdCBIkZiOFYiCAxAzEcCxEkZiCGYyGCxAzEcCxEkJiBGI6FCBIzEMOxEEFiBmI4FiJIzEAMx0IEiRmI4ViIIDEDMRwLESRmIIZjIYLEDMRwLESQmIEYjoUIEjMQw7EQQWIGYjgWIkjMQAzHQgSJGYjhWIggMQMxHAsRJGYghmMhgsQMxHAedWJnDEiwhI0AAAAASUVORK5CYII='
        }, settings || {});
        var timer=null;
        // 执行懒加载图片
        lazyLoadPic();
        // 滚动触发换图
        $(window).on('scroll', function (e) {
            e.preventDefault();
            _winScrollTop = window.scrollY;
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(lazyLoadPic, 150);
        });
        // 懒加载图片

        function lazyLoadPic() {
            clearTimeout(timer);
            $this.each(function () {


                
                var $self = $(this);
                if($self.is('img')){
                    if($self.attr('data-original')){
                        var _offsetTop = $self.offset().top;
                        if((_offsetTop - settings.threshold) <= (_winHeight + _winScrollTop)){
                            $self.attr('src',$self.attr('data-original'));
                            $self.removeAttr('data-original');
                        }else{
                            $self.attr('src', settings.placeholder);
                        }
                    }
                    // 如果是背景图
                }else{
                    if($self.attr('data-original')){
                        // 默认占位图片
                        var _offsetTop = $self.offset().top;
                        if((_offsetTop - settings.threshold) <= (_winHeight + _winScrollTop)){
                            $self.css('background-image','url('+$self.attr('data-original')+')');
                            $self.removeAttr('data-original');
                        }else{
                            $self.attr('background-image', 'url('+settings.placeholder+')');
                        }
                    }
                }
                settings.cb&&settings.cb();
            });
        }
    }
})(Zepto);