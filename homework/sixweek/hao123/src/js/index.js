/**
 * Created by ymz on 17/2/15.
 */
(function(){
    var red = document.getElementById('red');
    var yellow = document.getElementById('yellow');
    var abtn = document.getElementsByClassName('abtn');
    var allLetter = document.getElementsByClassName('layout-container-inner');
    console.log(allLetter);
    console.log(abtn);


        for(var i = 0;i<abtn.length;i++){
            console.log(abtn[i].value);
            function clickA(c){
                allLetter.bgColor = c;
            }
            abtn[i].addEventListener("click",clickA(abtn[i].value));
        }

})()