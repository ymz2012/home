/**
 * Created by ymz on 16-12-14.
 */
(function mou() {
console.log(document.getElementsByClassName("moreProduct")[0]);
document.getElementsByClassName("moreProduct")[0].onmouseenter = function(){
    document.getElementsByClassName("hover")[0].style.display = "block";
}
document.getElementsByClassName("hover")[0].onmouseleave = function(){
     this.style.display = "none";
}
})()