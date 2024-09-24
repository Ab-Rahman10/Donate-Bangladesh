// my balance function
function getMyBalanceById(id) {
  const myBalanceNumber = parseFloat(document.getElementById(id).innerText);
  return myBalanceNumber;
}

// show the modal function
function getModal(id) {
  const modalShow = document.getElementById(id);
  modalShow.showModal();
}

// history item function
function createHistoryItem(id1, id2) {
  const inputInjuredValue = parseFloat(document.getElementById(id1).value);
  const headingInjured = document.getElementById(id2).innerText;

  const historyContainer = document.getElementById("history-container");
  const div = document.createElement("div");
  div.className = "border rounded-lg p-8";
  div.innerHTML = `
        <h4 class= "font-semibold lg:font-bold  lg:text-xl">${inputInjuredValue} Taka is donated for ${headingInjured}</h4>
        <p class = "p-1 bg-gray-100 rounded-md">Date: ${new Date().toLocaleDateString()} Time: ${new Date().toLocaleTimeString()}</p>
    `;

  historyContainer.insertBefore(div, historyContainer.firstChild);
}
