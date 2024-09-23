// Noakhali card
document
  .getElementById("donate-btn-for-noakhali")
  .addEventListener("click", function () {
    // input value of noakhali -----------
    const inputNoakhali = document.getElementById("input-noakhali");
    const inputNoakhaliValue = parseFloat(inputNoakhali.value);

    // donated money
    const donatedNoakhaliMoney = document.getElementById(
      "donated-noakhali-money"
    );
    const noakhaliMoney = parseFloat(donatedNoakhaliMoney.innerText);

    // my balance
    const myBalance = document.getElementById("my-balance");
    const myBalanceNumber = parseFloat(myBalance.innerText);

    // calculation
    const myNewBalance = myBalanceNumber - inputNoakhaliValue;
    myBalance.innerText = myNewBalance;

    donatedNoakhaliMoney.innerText = inputNoakhaliValue + noakhaliMoney;

    // show the history of donation
  });

//   Feni card
document
  .getElementById("donate-btn-for-feni")
  .addEventListener("click", function () {
    // input value of feni----------
    const inputFeni = document.getElementById("input-feni");
    const inputFeniValue = parseFloat(inputFeni.value);

    // donated money
    const donatedFeniMoney = document.getElementById("donated-feni-money");
    const feniMoney = parseFloat(donatedFeniMoney.innerText);

    // my balance
    const myBalance = document.getElementById("my-balance");
    const myBalanceNumber = parseFloat(myBalance.innerText);

    // calculation
    const myNewBalance = myBalanceNumber - inputFeniValue;
    myBalance.innerText = myNewBalance;
    console.log(myNewBalance);

    donatedFeniMoney.innerText = inputFeniValue + feniMoney;
  });

//   Injured card
document
  .getElementById("donate-btn-for-injured")
  .addEventListener("click", function () {
    // input value of feni----------
    const inputInjured = document.getElementById("input-injured");
    const inputInjuredValue = parseFloat(inputInjured.value);

    // donated money
    const donatedInjuredMoney = document.getElementById(
      "donated-injured-money"
    );
    const injuredMoney = parseFloat(donatedInjuredMoney.innerText);

    // my balance
    const myBalance = document.getElementById("my-balance");
    const myBalanceNumber = parseFloat(myBalance.innerText);

    // calculation
    const myNewBalance = myBalanceNumber - inputInjuredValue;
    myBalance.innerText = myNewBalance;

    donatedInjuredMoney.innerText = inputInjuredValue + injuredMoney;
  });
