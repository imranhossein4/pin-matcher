// get pin function
function getPin() {
    const getPin = Math.round(Math.random() * 10000);
    const pinString = getPin + '';
    if (pinString.length == 4) {
        return getPin;
    }
    else {
        return getPin();
    }
}
// generate pin function
function generatePin() {
    const pin = getPin();
    const inputTag = document.getElementById('pin-input').value;
    document.getElementById('pin-input').value = pin;
}
// calculator body function
document.getElementById('calculator-body').addEventListener('click', function (event) {
    const calcBtnValue = event.target.innerText;
    if (isNaN(calcBtnValue)) {
        if (calcBtnValue == 'C') {
            document.getElementById('calculate-input').value = '';
        }
    }
    else {
        const calculateInput = document.getElementById('calculate-input');
        const number = calculateInput.value;
        const newNumber = number + calcBtnValue;
        calculateInput.value = newNumber;
    }
    return newNumber;
})
// submit button & error handling
document.getElementById('submit-button').addEventListener('click', function () {
    const pin = document.getElementById('pin-input').value;
    const number = document.getElementById('calculate-input').value;
    if (pin == number) {
        const success = document.getElementById('success');
        success.style.display = 'block';
        const fail = document.getElementById('fail');
        fail.style.display = 'none';
    }
    else {
        const fail = document.getElementById('fail');
        fail.style.display = 'block';
        const success = document.getElementById('success');
        success.style.display = 'none';
    }
})