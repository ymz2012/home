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
    },2000);
})()
