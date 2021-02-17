
let output = document.querySelector('.output');

// console.log(inputValues)

const button = document.getElementById('submitBtn')

button.addEventListener('click', function () {
const initials = document.querySelector('.initials').value
const mobileNumber = document.querySelector('.mobileNumber').value
const age = document.querySelector('.age').value
const city = document.querySelector('.city').value
const subscribe = document.querySelector('.subscribe').value
const inputValues = [initials, mobileNumber, age, city, subscribe ];
   const truthyValue = inputValues.every(Boolean);
   console.log(truthyValue)
    if(!truthyValue){
        alert('Заполните все поля')
        output.innerText = inputValues
    }else{
    alert('Дынные введены')
    output.innerHTML = inputValues
    }
});