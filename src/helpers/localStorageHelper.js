function addItemToLocalStorage(item) {
    let existingEntries = JSON.parse(localStorage.getItem('favouriteBeers'));
    if (existingEntries == null) { existingEntries = []; }
    existingEntries.push(item);
    localStorage.setItem('favouriteBeers', JSON.stringify(existingEntries));
}

function getItemsFromLocalStorage() {
    let existingEntries = JSON.parse(localStorage.getItem('favouriteBeers'));
    if (existingEntries == null) { existingEntries = []; }
    return existingEntries;
}

function deleteItemFromLocalStorage(item) {
    let existingEntries = JSON.parse(localStorage.getItem('favouriteBeers'));
    if (existingEntries == null) { existingEntries = []; }
    existingEntries.pop(item);
    localStorage.setItem('favouriteBeers', JSON.stringify(existingEntries));
}

export default {
    addItemToLocalStorage, deleteItemFromLocalStorage, getItemsFromLocalStorage,
};
