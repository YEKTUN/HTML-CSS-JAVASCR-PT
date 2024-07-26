const result = document.getElementById("result");
const input = document.getElementById("input");
const convert = document.getElementById("convert");
const toFahrenheit = document.getElementById("ToFahrenheit");
const toCelsius = document.getElementById("ToCelsius");


convert.addEventListener("click", () => {

    if (toFahrenheit.click) {

        result.textContent= (input.value * 9 / 5) + 32;
        
    }
    else if (toCelsius.click) {
        result.textContent=(input.value - 32) * 5 / 9;
       
    }else{
        result.textContent = "Choose Temperature Method"
    }
    
})