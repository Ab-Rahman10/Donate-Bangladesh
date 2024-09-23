// Noakhali card
document
  .getElementById("donate-btn-for-noakhali")
  .addEventListener("click", function () {
    // input value of noakhali -----------
    const inputNoakhali = document.getElementById("input-noakhali");
    const inputNoakhaliValue = parseFloat(inputNoakhali.value);

    // my balance
    const myBalance = document.getElementById("my-balance");
    const myBalanceNumber = parseFloat(myBalance.innerText);

    // validation
    if (isNaN(inputNoakhaliValue) || inputNoakhaliValue <= 0) {
      alert("Invalid Input");
      return;
    }

    if (inputNoakhaliValue >= myBalanceNumber) {
      alert("Invalid Input");
      return;
    }

    // donated money
    const donatedNoakhaliMoney = document.getElementById(
      "donated-noakhali-money"
    );
    const noakhaliMoney = parseFloat(donatedNoakhaliMoney.innerText);

    // calculation
    const myNewBalance = myBalanceNumber - inputNoakhaliValue;
    myBalance.innerText = myNewBalance;

    donatedNoakhaliMoney.innerText = inputNoakhaliValue + noakhaliMoney;

    // show the history of donation
    const headingNoakhali =
      document.getElementById("heading-noakhali").innerText;

    const historyContainer = document.getElementById("history-container");
    const div = document.createElement("div");
    div.className = "border rounded-lg p-8";
    div.innerHTML = `
        <h4 class= "font-semibold lg:font-bold  lg:text-xl">${inputNoakhaliValue} Taka is donated for ${headingNoakhali}</h4>
        <p class = "p-1 bg-gray-100 rounded-md">Date: ${new Date().toLocaleDateString()} Time: ${new Date().toLocaleTimeString()}</p>
    `;

    historyContainer.insertBefore(div, historyContainer.firstChild);
  });

// Feni card
document
  .getElementById("donate-btn-for-feni")
  .addEventListener("click", function () {
    // input value of feni----------
    const inputFeni = document.getElementById("input-feni");
    const inputFeniValue = parseFloat(inputFeni.value);

    // my balance
    const myBalance = document.getElementById("my-balance");
    const myBalanceNumber = parseFloat(myBalance.innerText);

    // validation
    if (isNaN(inputFeniValue) || inputFeniValue <= 0) {
      alert("Invalid Input");
      return;
    }

    if (inputFeniValue >= myBalanceNumber) {
      alert("Invalid Input");
      return;
    }

    // donated money
    const donatedFeniMoney = document.getElementById("donated-feni-money");
    const feniMoney = parseFloat(donatedFeniMoney.innerText);

    // calculation
    const myNewBalance = myBalanceNumber - inputFeniValue;
    myBalance.innerText = myNewBalance;

    donatedFeniMoney.innerText = inputFeniValue + feniMoney;

    // show the history of donation
    const headingFeni = document.getElementById("heading-feni").innerText;

    const historyContainer = document.getElementById("history-container");
    const div = document.createElement("div");
    div.className = "border rounded-lg p-8";
    div.innerHTML = `
        <h4 class= "font-semibold lg:font-bold  lg:text-xl">${inputFeniValue} Taka is donated for ${headingFeni}</h4>
        <p class = "p-1 bg-gray-100 rounded-md">Date: ${new Date().toLocaleDateString()} Time: ${new Date().toLocaleTimeString()}</p>
    `;

    historyContainer.insertBefore(div, historyContainer.firstChild);
  });

//   Injured card
document
  .getElementById("donate-btn-for-injured")
  .addEventListener("click", function () {
    // input value of feni----------
    const inputInjured = document.getElementById("input-injured");
    const inputInjuredValue = parseFloat(inputInjured.value);

    // my balance
    const myBalance = document.getElementById("my-balance");
    const myBalanceNumber = parseFloat(myBalance.innerText);

    // validation
    if (isNaN(inputInjuredValue) || inputInjuredValue <= 0) {
      alert("Invalid Input");
      return;
    }

    if (inputInjuredValue >= myBalanceNumber) {
      alert("Invalid Input");
      return;
    }

    // donated money
    const donatedInjuredMoney = document.getElementById(
      "donated-injured-money"
    );
    const injuredMoney = parseFloat(donatedInjuredMoney.innerText);

    // calculation
    const myNewBalance = myBalanceNumber - inputInjuredValue;
    myBalance.innerText = myNewBalance;

    donatedInjuredMoney.innerText = inputInjuredValue + injuredMoney;

    // show the history of donation
    const headingInjured = document.getElementById("heading-injured").innerText;

    const historyContainer = document.getElementById("history-container");
    const div = document.createElement("div");
    div.className = "border rounded-lg p-8";
    div.innerHTML = `
        <h4 class= "font-semibold lg:font-bold  lg:text-xl">${inputInjuredValue} Taka is donated for ${headingInjured}</h4>
        <p class = "p-1 bg-gray-100 rounded-md">Date: ${new Date().toLocaleDateString()} Time: ${new Date().toLocaleTimeString()}</p>
    `;

    historyContainer.insertBefore(div, historyContainer.firstChild);
  });
