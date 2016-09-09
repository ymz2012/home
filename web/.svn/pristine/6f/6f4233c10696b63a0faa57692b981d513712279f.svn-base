/**
 * Created by lvlq on 16/2/24.
 */
!function () {
    var doScale = function () {
        var width = $(window).width();
        var baseWidth = 1920;

        if (width <= baseWidth) {
            $("body").css({
                "transform": "scale(1)",
                "-webkit-transform": "scale(1)",
                "top": "0"
            });
            $("html").css({
                "overflow-x": "auto"
            });
            return;
        }

        var s = width / baseWidth;
        var mh = $("body").height() * (s - 1) / 2;
        $("body").css({
            "transform": "scale(" + s + ")",
            "-webkit-transform": "scale(" + s + ")",
            "top": mh + "px",
            "position": "relative"
        });
        $("html").css({
            "overflow-x": "hidden"
        })
    };


    var timer;
    if(window && window.addEventListener){
        window.addEventListener("resize", function () {
            clearTimeout(timer);
            timer = setTimeout(doScale, 300);
        });
    }

    clearTimeout(timer);
    timer = setTimeout(doScale, 300);
}();
