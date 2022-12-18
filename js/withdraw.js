document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawFild = document.getElementById('withdraw-input');
    const withdrawAmountString = withdrawFild.value;
    const newWithdrawAmount = parseFloat(withdrawAmountString);

    withdrawFild.value = "";

    if (isNaN(newWithdrawAmount)) {
        alert('Plaese Provide a Number!!');
        return;
    }

    const withdrawAmountFild = document.getElementById('withdraw-amount');
    const previousWithdrawAmountString = withdrawAmountFild.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);

    const balanceAmountFild = document.getElementById('balance-amount');
    const balanceAmountString = balanceAmountFild.innerText;
    const previousBalanceAmount = parseFloat(balanceAmountString);

    if (newWithdrawAmount > previousBalanceAmount) {
        alert('ব্যাংকে এত টাকা নাই!!')
        return;
    }

    const withdrawTotalAmount = previousWithdrawAmount + newWithdrawAmount;
    withdrawAmountFild.innerText = withdrawTotalAmount;

    const newBalanceAmount = previousBalanceAmount - newWithdrawAmount;
    balanceAmountFild.innerText = newBalanceAmount;
})