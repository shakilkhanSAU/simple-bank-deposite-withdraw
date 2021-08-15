// eventhandler for deposit button 
document.getElementById('deposit-button').addEventListener('click', function () {
    // deposit input 
    const depositHolder = document.getElementById('deposit-holder');
    const depositHolderText = depositHolder.value;
    const depostiHolderAmmount = parseFloat(depositHolderText);
    // deposit current 
    const depositCurrent = document.getElementById('deposit-total');
    const depositCurrentText = depositCurrent.innerText;
    const depositCurrentAmmount = parseFloat(depositCurrentText);
    // deposit total
    depositCurrent.innerText = depostiHolderAmmount + depositCurrentAmmount;
    depositHolder.value = '';

    // Balance update
    const balanceCurrent = document.getElementById('balance-total');
    const balanceCurrentText = balanceCurrent.innerText;
    const balanceCurrentAmmount = parseFloat(balanceCurrentText);
    balanceCurrent.innerText = depostiHolderAmmount + balanceCurrentAmmount;
});

// eventhandler for withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    // finding input of withdraw
    const withdrawHolder = document.getElementById('withdraw-holder');
    const withdrawHolderText = withdrawHolder.value;
    const withdrawHolderAmmount = parseFloat(withdrawHolderText);
    // adding with withdraw current total
    const withdrawCurrent = document.getElementById('withdraw-total');
    const withdrawCurrentText = withdrawCurrent.innerText;
    const withdrawCurrentAmmount = parseFloat(withdrawCurrentText);
    withdrawCurrent.innerText = withdrawCurrentAmmount + withdrawHolderAmmount;
    // substraction of current balance
    const balanceCurrent = document.getElementById('balance-total');
    const balanceCurrentText = balanceCurrent.innerText;
    const balanceCurrentAmmount = parseFloat(balanceCurrentText);
    balanceCurrent.innerText = balanceCurrentAmmount - withdrawHolderAmmount;
    withdrawHolder.value = '';
});


