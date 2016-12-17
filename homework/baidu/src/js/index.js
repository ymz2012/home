/**
 * Created by ymz on 16-12-14.
 */
(function mou() {
console.log(document.getElementsByClassName(".moreProduct"));
document.getElementsByClassName("moreProduct")[0].onmouseenter = function(){
    document.getElementsByTagName("ul")[0].style.display = "block";
}
document.getElementsByTagName("ul")[0].onmouseleave = function(){
     this.style.display = "none";
}
})()