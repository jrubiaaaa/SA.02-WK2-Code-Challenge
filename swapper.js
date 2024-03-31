// entering of the text that will be converted
var swapper=prompt("Enter the string: ")

//funtion that will  be swapping the cases
function caseSwapper(swapper){
    let finalSwap= "";
    for(i=0;i<swapper.length;i++){
        var letter=swapper[i];
        if(letter === letter.toLowerCase()){
            finalSwap += letter.toUpperCase();
        }
        else{
            finalSwap += letter.toLowerCase();
        }
    }
return finalSwap;
}
var finalSwap=caseSwapper(swapper)
//displays the converted string that was entered
alert(finalSwap)

