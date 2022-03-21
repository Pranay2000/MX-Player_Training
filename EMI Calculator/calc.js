document.querySelector('#calcEMI').addEventListener('click', function (e) {

    e.preventDefault();
    var amount = document.getElementById('Amt').value;
    var interest = document.getElementById('interestRate').value;
    var tenure = document.getElementById('tenure').value;

    var months = Math.floor(tenure) * 12;
    var monthlyInterest = interest / (12 * 100);
    var onePlusR = Math.pow(1 + monthlyInterest, months);
    var denominator = onePlusR - 1;
    var emi = (amount * monthlyInterest * (onePlusR / denominator)).toPrecision(5);
    var totalAmt = months * parseFloat(emi);
    var totalInt = Math.floor(totalAmt - amount);

    var payableEmi = document.getElementById('emi');
    var payableamount = document.getElementById('totalAmt');
    var payableInt = document.getElementById('totalInt');
    payableEmi.innerHTML = parseFloat(emi);
    payableamount.innerHTML = parseFloat(totalAmt);
    payableInt.innerHTML = parseFloat(totalInt);

});
