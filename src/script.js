// global vars for form data retrieval

const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const listClear = document.getElementById('clear');
const itemFilter = document.getElementById('filter');

function addItem(e) {
  e.preventDefault();

  const newItem = itemInput.value;
  
  // Validate input
  if (newItem === '') {
    alert('Please add an item');
    return;
  }

  // Create List Item
  const li =  document.createElement('li');
  li.appendChild(document.createTextNode(newItem));

  const button = createButton('delete-item btn-link text-red');
  li.appendChild(button);

  // Add li to the DOM
  itemList.appendChild(li);
  
  checkUI();
  
  itemInput.value = '';
}


function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;
  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  return button;
}

function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}

function filterItems() {
  console.log('Filter works');
}

function deleteItem(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    e.target.parentElement.parentElement.remove();
  };
  checkUI();
}

function clearList() {
  if (confirm('Are You Sure?')) {
    while (itemList.firstChild) {
      itemList.removeChild(itemList.firstChild);
    }
  }
  checkUI();
}

// check state of appliation to remove Filter and Clear All elements from the page when list is not present
function checkUI() {
  const items = itemList.querySelectorAll('li');

  if (items.length === 0 ) {
    listClear.style.display = 'none';
    itemFilter.style.display = 'none';
  } else {
    listClear.style.display = 'block';
    itemFilter.style.display = 'block';
  }
}

//  Event Listeners, to be added to an initializer function
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', deleteItem);
listClear.addEventListener('click', clearList);
listClear.addEventListener('click', filterItems);

checkUI();
filterItems();