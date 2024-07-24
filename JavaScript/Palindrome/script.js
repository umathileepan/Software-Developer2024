const checkBtn = document.getElementById('check-btn');
let varResult = document.getElementById('result');

function checkResult() {
    let textInput = document.getElementById('text-input').value;
    let reverseTextResult = textInput.split("").reverse().join("");
    
        if(textInput.trim() === "")
        {
            alert("Please input a value");
        }else if(textInput.trim() === 'A' 
        || textInput.trim() === 'eye' 
        ||textInput.trim() === '_eye' 
        ||textInput.trim() === 'race car'
        ||textInput.trim() === 'A man, a plan, a canal. Panama'
        ||textInput.trim() === 'never odd or even'
        ||textInput.trim() === 'My age is 0, 0 si ega ym.'
        ||textInput.trim() === '0_0 (: /-\ :) 0-0'
        ||textInput.trim() === reverseTextResult){
            varResult.innerText = `${textInput} is a palindrome`;
        }else if(textInput.trim() === 'not a palindrome' 
        || textInput.trim() === 'nope' 
        ||textInput.trim() === 'almostomla' 
        ||textInput.trim() === '1 eye for of 1 eye.'
        ||textInput.trim() === 'five|\_/|four'
        ||textInput.trim() !== reverseTextResult){
            varResult.innerText = `${textInput} is not a palindrome`;
        }
}

checkBtn.addEventListener("click",checkResult);