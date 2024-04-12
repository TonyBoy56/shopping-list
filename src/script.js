// global vars for form data retrieval

const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");

function addItem(e) {
  e.preventDefault();

  // Validate Input
  if (itemInput.value === "") {
    alert("Please add an item");
    return;
  }

  console.log("success");
}

// Event Listeners, to be added to an initializer function
itemForm.addEventListener("submit", addItem);
