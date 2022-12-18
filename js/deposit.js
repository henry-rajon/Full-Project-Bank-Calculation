document.getElementById('deposit-btn').addEventListener('click', function () {
    const depostiFild = document.getElementById('deposit-input');
    const depositAmountString = depostiFild.value;
    const newDepositAmount = parseFloat(depositAmountString);

    depostiFild.value = "";
    
    if (isNaN(newDepositAmount)) {
        alert('Please Porvide a Number!!');
        return;
    }

    const depositAmoutFild = document.getElementById('deposit-amount');
    const previousDepositAmoutString = depositAmoutFild.innerText;
    const previousDepositAmout = parseFloat(previousDepositAmoutString);
    
    const depositTotalAmount = previousDepositAmout + newDepositAmount;
    depositAmoutFild.innerText = depositTotalAmount;

    const balanceAmountFild = document.getElementById('balance-amount');
    const balanceAmountString = balanceAmountFild.innerText;
    const previousBalanceAmount = parseFloat(balanceAmountString);

    const newBalanceAmount = previousBalanceAmount + newDepositAmount;
    balanceAmountFild.innerText = newBalanceAmount;
})