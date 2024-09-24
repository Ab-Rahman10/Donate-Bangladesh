// Noakhali card
document
  .getElementById("donate-btn-for-noakhali")
  .addEventListener("click", function () {
    // input value of noakhali -----------
    const inputNoakhaliValue = parseFloat(
      document.getElementById("input-noakhali").value
    );

    // my balance
    getMyBalanceById("my-balance");

    // validation
    if (isNaN(inputNoakhaliValue) || inputNoakhaliValue <= 0) {
      alert("Please input a valid number");
      return;
    }

    if (inputNoakhaliValue > getMyBalanceById("my-balance")) {
      alert("Error! You can't donate more than your available funds.");
      return;
    }

    // donated money
    const donatedNoakhaliMoney = document.getElementById(
      "donated-noakhali-money"
    );
    const noakhaliMoney = parseFloat(donatedNoakhaliMoney.innerText);

    // calculation
    const myNewBalance = getMyBalanceById("my-balance") - inputNoakhaliValue;
    document.getElementById("my-balance").innerText = myNewBalance;

    donatedNoakhaliMoney.innerText = inputNoakhaliValue + noakhaliMoney;

    // show the history of donation
    createHistoryItem("input-noakhali", "heading-noakhali");

    // show the modal
    getModal("my_modal_1");

    // Clear the form input after submission.
    document.getElementById("input-noakhali").value = "";
  });

// Feni card
document
  .getElementById("donate-btn-for-feni")
  .addEventListener("click", function () {
    // input value of feni----------
    const inputFeniValue = parseFloat(
      document.getElementById("input-feni").value
    );

    // my balance
    getMyBalanceById("my-balance");

    // validation
    if (isNaN(inputFeniValue) || inputFeniValue <= 0) {
      alert("Please input a valid number");
      return;
    }

    if (inputFeniValue > getMyBalanceById("my-balance")) {
      alert("Error! You can't donate more than your available funds.");
      return;
    }

    // donated money
    const donatedFeniMoney = document.getElementById("donated-feni-money");
    const feniMoney = parseFloat(donatedFeniMoney.innerText);

    // calculation
    const myNewBalance = getMyBalanceById("my-balance") - inputFeniValue;
    document.getElementById("my-balance").innerText = myNewBalance;

    donatedFeniMoney.innerText = inputFeniValue + feniMoney;

    // show the history of donation
    createHistoryItem("input-feni", "heading-feni");

    // show the modal
    getModal("my_modal_1");

    // Clear the form input after submission.
    document.getElementById("input-feni").value = "";
  });

//   Injured card
document
  .getElementById("donate-btn-for-injured")
  .addEventListener("click", function () {
    // input value of feni----------
    const inputInjuredValue = parseFloat(
      document.getElementById("input-injured").value
    );

    // // my balance
    getMyBalanceById("my-balance");

    // validation
    if (isNaN(inputInjuredValue) || inputInjuredValue <= 0) {
      alert("Please input a valid number");
      return;
    }

    if (inputInjuredValue > getMyBalanceById("my-balance")) {
      alert("Error! You can't donate more than your available funds.");
      return;
    }

    // donated money
    const donatedInjuredMoney = document.getElementById(
      "donated-injured-money"
    );
    const injuredMoney = parseFloat(donatedInjuredMoney.innerText);

    // calculation
    const myNewBalance = getMyBalanceById("my-balance") - inputInjuredValue;
    document.getElementById("my-balance").innerText = myNewBalance;

    donatedInjuredMoney.innerText = inputInjuredValue + injuredMoney;

    // show the history of donation
    createHistoryItem("input-injured", "heading-injured");

    // show the modal
    getModal("my_modal_1");

    // Clear the form input after submission.
    document.getElementById("input-injured").value = "";
  });
