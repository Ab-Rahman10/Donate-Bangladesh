// history btn
const historyBtn = document
  .getElementById("history-btn")
  .addEventListener("click", function () {
    // btn design transfer
    document.getElementById("history-btn").classList.add("bg-btn_primary");
    document.getElementById("donation-btn").classList.remove("bg-btn_primary");

    // history section
    const historySection = document.getElementById("history-section");
    historySection.classList.remove("hidden");

    // card section
    const cardSection = document.getElementById("card-section");
    cardSection.classList.add("hidden");
  });

//   donation btn
const donationBtn = document
  .getElementById("donation-btn")
  .addEventListener("click", function () {
    // btn design transfer
    document.getElementById("donation-btn").classList.add("bg-btn_primary");
    document.getElementById("history-btn").classList.remove("bg-btn_primary");

    // history section
    const historySection = document.getElementById("history-section");
    historySection.classList.add("hidden");

    // card section
    const cardSection = document.getElementById("card-section");
    cardSection.classList.remove("hidden");
  });
