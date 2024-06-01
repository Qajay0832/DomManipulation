let currentValue=document.getElementById("currentValue");
const error=document.getElementById("error");
const dec=document.getElementById("decrement");
const inc=document.getElementById("increment");
const clear=document.getElementById("clear");

const body=document.getElementsByTagName("body")[0];
body.style.backgroundColor="black";
body.style.color="white";
dec.addEventListener("click",decrementValue)
function decrementValue(){
    if (parseInt(currentValue.innerText)===0){
        error.style.display="block";
    }
    else{
        currentValue.innerText=parseInt(currentValue.innerText)-1;
    }
}
inc.addEventListener("click",incrementValue)
function incrementValue(){
        currentValue.innerText=parseInt(currentValue.innerText)+1;
        error.style.display="none";
    
}
clear.addEventListener("click",onClear)
function onClear(){
    currentValue.innerText=0;
    error.style.display="none";
}