const displayTime = document.querySelector("#time");
function showTime() {
  let time = new Date();
  displayTime.innerText = time.toLocaleTimeString("en-US", { hour12: false });
  setTimeout(showTime, 1000);
}
showTime();

const Elem = document.querySelector("#resultCon");
const degree = document.querySelector("#temp");
const convertBtn = document.querySelector("#btn");
const tempType1 = document.querySelector("#temptypes1");
const tempType2 = document.querySelector("#temptypes2");

window.addEventListener("load", () => {
  degree.value = "";
  Elem.innerHTML = "";
});

convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  convertToCelsius();
});

function convertToCelsius() {
  let inputValue = degree.value;

if (tempType1.value === "fah" && tempType2.value === "cel") {
    const FahrenheitToCelsius = (inputValue - 32) * (5 / 9);
    Elem.innerHTML = `${FahrenheitToCelsius.toFixed(3)} `;
  } 
  
  else if (tempType1.value === "cel" && tempType2.value === "fah") {
    const CelToFah = ((inputValue* 9)/5 ) + 32;
    Elem.innerHTML = `${CelToFah.toFixed(3)} `;
  } 
  
  else if (tempType1.value === "cel" && tempType2.value === "kel") {
    const CelToKel = (inputValue - 0) + 273.15;
    Elem.innerHTML = `${CelToKel.toFixed(3)} `;
  } 
  
  else if (tempType1.value === "kel" && tempType2.value === "cel") {
    const KelToCel = (inputValue - 273.15) ;
    Elem.innerHTML = `${KelToCel.toFixed(3)} `;
  } 
  
  else if (tempType1.value === "kel" && tempType2.value === "fah") {
    const KelToFah = (((inputValue - 273.15)* 9)/5 ) + 32;
    Elem.innerHTML = `${KelToFah.toFixed(3)} `;
  }

  else if (tempType1.value === "fah" && tempType2.value === "kel") {
    const FahToKel = (((inputValue - 32)* 5)/9 ) + 273.15;
    Elem.innerHTML = `${FahToKel.toFixed(3)} `;
  }

  else {
    const Equal = (inputValue - 0);
    Elem.innerHTML = `${Equal.toFixed(3)} `;
  }
}
