window.addEventListener("DOMContentLoaded", domLoaded);
         
function domLoaded() {
   const cInput = document.getElementById("cInput");
   const fInput = document.getElementById("fInput");
   const convertButton = document.getElementById("convertButton");
   const errorMessage = document.getElementById("errorMessage");
   const weatherImage = document.getElementById("weatherImage");
   
   cInput.addEventListener("input", clearFInput);
   fInput.addEventListener("input", clearCInput);
   
   convertButton.addEventListener("click", convertTemperature);
   
}

function clearFInput() {
   fInput.value = "";
}

function clearCInput() {
   cInput.value = "";
}

function convertCtoF(degreesCelsius) {
   return (degreesCelsius * 9 / 5 + 32);
}

function convertFtoC(degreesFahrenheit) {
   return ((degreesFahrenheit - 32) * 5 / 9);
}

function convertTemperature() {
   const cValue = parseFloat(cInput.value);
   const fValue = parseFloat(fInput.value);
   let convertedValue;
   if (!isNaN(cValue)) {
      convertedValue = Math.trunc(convertCtoF(cValue));
      fInput.value = Math.trunc(convertedValue.toFixed(2));
   } else if (!isNaN(fValue)) {
      convertedValue = Math.trunc(convertFtoC(fValue));
      cInput.value = Math.trunc(convertedValue.toFixed(2));
   } else {
      errorMessage.innerHTML = `${cInput.value} is not a number`;
      return;
   }
   errorMessage.innerHTML = "";
   if (convertedValue < 32) {
      weatherImage.src = "./cold.png";
      weatherImage.alt = "Cold";
   } else if (convertedValue >= 32 && convertedValue <= 50) {
      weatherImage.src = "./cool.png";
      weatherImage.alt = "Cool";
   } else {
      weatherImage.src = "./warm.png";
      weatherImage.alt = "Warm";
   }
}