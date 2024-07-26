const increase = document.getElementById("increase");
const reset= document.getElementById("reset");
const decrease = document.getElementById("decrease");
const count = document.getElementById("count");
let sayac = 0;
increase.addEventListener("click", () => {
    sayac++;
    count.innerHTML = sayac;
})
reset.addEventListener("click", () => {
    sayac = 0;
    count.innerHTML = sayac;
})
decrease.addEventListener("click", () => {
    sayac--;
    count.innerHTML = sayac;
    
})