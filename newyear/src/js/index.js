/**
 * Created by ymz on 16-12-23.
 */
(function () {
/*    function switchImage() {
        $('#luck').removeClass("luckone").addClass("lucktwo");
    }*/
    setTimeout(function () {
        $('#luck').removeClass("luckone").addClass("lucktwo");
    },1000);
    setTimeout(function(){
        $('#luck').removeClass("lucktwo").addClass("luckone");
        $('#phone').addClass("phonemove");
    },1500);
    setTimeout(function(){
        $('#red_right').addClass("red_rightmove");
        $('#red_left').addClass("red_leftmove");
        $('#star').addClass("starmove");
        $('#colour_left').addClass("colour_leftmove");
        $('#colour_right').addClass("colour_rightmove");
        $('#gold_left').addClass("gold_leftmove");
        $('#gold_down').addClass("gold_downmove");
        $('#gold_top').addClass("gold_topmove");
    },2000);
})()
