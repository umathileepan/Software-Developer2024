let number1 = Math.floor(Math.random*100);
let number2 = Math.floor(Math.random*20);
const calculateOption = document.getElementById('calculateOption');
//const addition = calculateOption.value("addition");
const clickButton = document.getElementById('clickButton');

function displayNumbers(){
    alert("Hello");
}

let HTMLButtonLabel = alert(`${calculateOption.value}`);
clickButton.insertAdjacentText("afterbegin",HTMLButtonLabel);

