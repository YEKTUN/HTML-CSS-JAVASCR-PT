function rastgele() {
    const min=100;
    const max=300;

let quess=Math.floor(Math.random()*(max-min+1)+min);
return quess
}



const tıkla=document.getElementById("quess");
const result=document.getElementById("result");
const write=document.getElementById("number");
const kontrol=document.getElementById("submit");
const zar=document.getElementById("zar");


tıkla.addEventListener("click",function(){
    
    rastgele()
    zar.textContent="Zar atıldı .Bir sayı girerek sayıyı tahmin edin.";


    

})

let attempts=0
const kontroletme=kontrol.addEventListener("click",function(){
    attempts++
    
    rastgele()
    const min=100;
    const max=300;
    

    

if (write.value<min||write.value>max) {
    result.textContent=`Please enter a number between ${min} and ${max}`;
    
   
}
else if (write.value>rastgele()) {
    result.textContent=`You guessed too high. `;
    
    
}
else if (write.value<rastgele()) {
    result.textContent=`You guessed too low. `;
    
    
}
else {
    result.textContent=`You guessed correct. I took you ${attempts} guesses. `;
    // running=false;
}



})
