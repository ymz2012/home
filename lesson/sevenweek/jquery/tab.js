/**
 * Created by ymz on 17-2-20.
 */
var timeoutid;
$(document).ready(function () {
    $("#tabfirst li").each(function (index) {
        var linode = $(this);
        $(this).mouseover(function () {
            timeoutid = setTimeout(function () {
                $("div.content").removeClass("content");
                $("#tabfirst li.tabin").removeClass("tabin");
                $("div").eq(index).addClass("content");
                linode.addClass("tabin")
            },300);

        }).mouseout(function () {
            clearTimeout(timeoutid);
        })
    })
})
