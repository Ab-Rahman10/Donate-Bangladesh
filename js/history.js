// history btn
const historyBtn = document
  .getElementById("history-btn")
  .addEventListener("click", function () {
    // btn design transfer
    document.getElementById("history-btn").classList.add("bg-btn_primary");
    document.getElementById("donation-btn").classList.remove("bg-btn_primary");

    //show the history section
    document.getElementById("history-section").classList.remove("hidden");

    // hide the card section
    document.getElementById("card-section").classList.add("hidden");
  });

//   donation btn
const donationBtn = document
  .getElementById("donation-btn")
  .addEventListener("click", function () {
    // btn design transfer
    document.getElementById("donation-btn").classList.add("bg-btn_primary");
    document.getElementById("history-btn").classList.remove("bg-btn_primary");

    //hide the history section
    document.getElementById("history-section").classList.add("hidden");

    //show the card section
    document.getElementById("card-section").classList.remove("hidden");
  });
