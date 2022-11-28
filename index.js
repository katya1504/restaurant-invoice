const button = document.querySelector('#price3');
button.addEventListener('click', calculateAmount);
console.log(button)

const buttonTip = document.querySelector('#addTip');
buttonTip.addEventListener('click', showTip);
console.log(tip)

function showTip(e){
    e.preventDefault();
}

function calculateAmount(e){
    e.preventDefault();

const price = document.querySelector('#price').value;
const price2 = document.querySelector('#price2').value;
const tip = document.querySelector('#tip').value;
console.log(tip)

if(price ==="" || price2 ==="" || price2<1){
    Swal.fire({                                           
        icon: 'error',
        title: 'Error',
        text: 'Please enter your internation',
      })
}

let amountPerPerson = price/price2;
console.log(amountPerPerson)
let tipPerPerson = (price*tip)/price2;
console.log(tipPerPerson)
let totalSum = amountPerPerson+tipPerPerson;

amountPerPerson = amountPerPerson.toFixed(2);
tipPerPerson = tipPerPerson.toFixed(2);
totalSum = totalSum.toFixed(2);

document.querySelector('#divadedBill').textContent = amountPerPerson;
document.querySelector('#divadedTip').textContent = tipPerPerson;
document.querySelector('#BillAndTip').textContent = totalSum;
}