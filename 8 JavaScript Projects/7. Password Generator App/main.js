//DOM elements:
const passwordOutput = document.getElementById("pw");
const generateBtn = document.querySelector(".generate");
const lengthInput = document.getElementById("len");
const upperInput = document.getElementById("upper");
const lowerInput = document.getElementById("lower");
const numberInput = document.getElementById("number");
const symbolInput = document.getElementById("symbol");
const copyBtn = document.getElementById("copy");

//constants:
const upperLetters = "ABCDEFGHIJKLMOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

//getter functions:
const getUppercase = () => {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

const getLowercase = () => {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

const getNumber = () => {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

const getSymbol = () => {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

//getting another random char/number because of the length:
const generateX = () => {
    const xs = [];

    if (upperInput.checked) {
        xs.push(getUppercase());
    }

    if (lowerInput.checked) {
        xs.push(getLowercase());
    }

    if (numberInput.checked) {
        xs.push(getNumber());
    }

    if (symbolInput.checked) {
        xs.push(getSymbol());
    }

    if (xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)];
}

//generate password function:
const generatePassword = () => {
    const length = lengthInput.value;
    let password = "";

    if(upperInput.checked) {
        password += getUppercase();
    }

    if(lowerInput.checked) {
        password += getLowercase();
    }

    if(numberInput.checked) {
        password += getNumber();
    }

    if(symbolInput.checked) {
        password += getSymbol();
    }

    for(let i = 0; i < length; i++) {
        const x = generateX();
        password+= x;
    }

    passwordOutput.innerText = password;
}

generateBtn.addEventListener("click", generatePassword);

//function for copying password

copyBtn.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = passwordOutput.innerText;

    if(!password) return;

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");//should not be used in serious projects!
    textarea.remove();
    alert("Copied!");
});