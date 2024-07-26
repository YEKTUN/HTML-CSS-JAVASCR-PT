const baslat = document.getElementById("baslat");
const durdur = document.getElementById("durdur");
const reset = document.getElementById("reset");
const goster = document.getElementById("göster");
let hours=0;
let minutes=0;
let seconds=0;
let miliseconds=0;
let running=false;
let intervalid;


baslat.addEventListener("click", () => {
    update();
    if(!running){
    intervalid=setInterval(update, 100);
    
    running=true;
   
  
    }
    
   

    });
durdur.addEventListener("click", () => {
    
    clearInterval(intervalid);
    running=false;

})
reset.addEventListener("click", () => {
    clearInterval(intervalid);
    hours=0;
    minutes=0;
    seconds=0;
    miliseconds=0;
    goster.textContent= `00:00:00:00`
    running=false;
    

})


function update() {
    
    

    
    miliseconds += 10;
    if(miliseconds == 100){
        seconds += 1;
        miliseconds = 0;
    }
    if(seconds == 60){
        minutes += 1;
        seconds = 0;
    }
    if(minutes == 60){
        hours += 1;
        minutes = 0;
    }
    
    let displayHours = String(hours).padStart(2, '0');
    let displayMinutes = String(minutes).padStart(2, '0');
    let displaySeconds = String(seconds).padStart(2, '0');
    let displayMilliseconds = String(miliseconds).padStart(2, '0'); 
    goster.textContent = `${displayHours}:${displayMinutes}:${displaySeconds}:${displayMilliseconds}`;
}






    

