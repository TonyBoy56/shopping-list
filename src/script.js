// global vars for form data retrieval

const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

// Event Listeners, to be added to an initializer function
itemForm.addEventListener('submit', addItem);