const resultElement = document.querySelector("#result");
const lengthElement = document.querySelector("#length");
const capitalElement = document.querySelector("#capital");
const smallElement = document.querySelector("#small");
const numberElement = document.querySelector("#number");
const specialElement = document.querySelector("#symbol");
const submitButton = document.querySelector('button[type="submit"]');
const form = document.querySelector("form");
const clipBoard = document.querySelector(".clipboard");
const alp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";
const specialChar = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~'";

const passwordElement = {
  capital: getCapitalLetter,
  small: getSmallLetter,
  number: getNumber,
  specialChar: getSpecialChar
};
// EventListener
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const length = lengthElement.value;
  const capital = capitalElement.checked;
  const small = smallElement.checked;
  const number = numberElement.checked;
  const specialChar = specialElement.checked;
  let generatePassword = "";
  
const status = [
    { capital: capital },
    { small: small },
    { number: number },
    { specialChar: specialChar }
  ];
  const passwordStatus = status.filter((el) => Object.values(el)[0] === true);
  for (i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * passwordStatus.length);
    const letterType = passwordStatus[index];
    const letter = passwordElement[Object.keys(letterType)]();
    generatePassword += letter;
    console.log(letter);
  }
  resultElement.value = generatePassword;
});

function getLength() {
  return lengthElement.value;
}

function getCapitalLetter() {
  return alp[Math.floor(Math.random() * alp.length)].toUpperCase();
}
function getSmallLetter() {
  return alp[Math.floor(Math.random() * alp.length)].toLowerCase();
}
function getNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}
function getSpecialChar() {
  return specialChar[Math.floor(Math.random() * specialChar.length)];
}

clipBoard.addEventListener("click", () => {
  clipBoard.innerHTML = `<ion-icon name="clipboard"></ion-icon>`;
  const textArea = document.createElement("textArea");
  textArea.value = result.value;

  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  setTimeout(() => {
    clipBoard.innerHTML = `<ion-icon name="clipboard-outline"></ion-icon>`;
  }, 1000);
});
