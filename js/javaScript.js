// Load items from LocalStorage when page loads
document.addEventListener('DOMContentLoaded', loadItems);

// Function to load items
function loadItems() {
    let items = JSON.parse(localStorage.getItem('items')) || [];
    const itemList = document.getElementById('items');
    itemList.innerHTML = '';

    items.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;
        li.innerHTML += ` <button onclick="editItem(${index})">Edit</button>`;
        li.innerHTML += ` <button onclick="deleteItem(${index})">Delete</button>`;
        itemList.appendChild(li);
    });
}

// Function to add a new item
function addItem() {
    const itemInput = document.getElementById('itemInput');
    const newItem = itemInput.value.trim();

    if (newItem !== '') {
        let items = JSON.parse(localStorage.getItem('items')) || [];
        items.push(newItem);
        localStorage.setItem('items', JSON.stringify(items));
        itemInput.value = '';
        loadItems();
    }
}

// Function to edit an item
function editItem(index) {
    let items = JSON.parse(localStorage.getItem('items')) || [];
    const newItem = prompt('Edit item:', items[index]);

    if (newItem !== null && newItem.trim() !== '') {
        items[index] = newItem.trim();
        localStorage.setItem('items', JSON.stringify(items));
        loadItems();
    }
}

// Function to delete an item
function deleteItem(index) {
    let items = JSON.parse(localStorage.getItem('items')) || [];
    items.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(items));
    loadItems();
}