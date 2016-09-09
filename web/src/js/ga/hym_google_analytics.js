(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','js/ga/analytics.js','ga');

var uid = $("meta[name=hym_uid]").attr("content") || "";
var path=window.location.pathname;

console.log(uid);
ga('create', 'UA-18257864-5', 'auto', {
    userId: uid
});
ga('send', 'screenview', {
    'appName': 'haoyunma',
    'screenName': path,
    'dimension1': uid,
    'dimension6': "1"
});


$.Event('ga:click', {bubbles: false});
$("body").on("ga:click",function(e,ops){
    e.preventDefault();
    ga("create", "UA-18257864-5");
    ga('send', {
        hitType: 'event',
        eventCategory: ops.tag,
        eventAction: 'click'
    });
});
