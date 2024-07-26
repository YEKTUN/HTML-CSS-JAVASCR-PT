
const input = document.getElementById("input");
const roll = document.getElementById("roll");
const result = document.getElementById("result");
const images = document.getElementById("images");


roll.addEventListener("click", () => {
let results=[];
let imagess=[];


    for (let i = 0; i < input.value; i++) {
        const random=Math.floor((Math.random()*5)+1);
      
        results.push(random);
        imagess.push(`<img src="images/${random}.png" /> `);
        
    }
result.textContent = results.join(" -")
images.innerHTML = imagess.join(" ")
    
   

    
    
    
})
