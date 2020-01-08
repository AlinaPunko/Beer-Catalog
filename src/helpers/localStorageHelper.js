function addItemToLocalStorage(item) {
    let existingEntries = JSON.parse(localStorage.getItem('favouriteBeers'));
    if (existingEntries == null) {
        existingEntries = [];
    }
    existingEntries.unshift(item);
    localStorage.setItem('favouriteBeers', JSON.stringify(existingEntries));
}

function getItemsFromLocalStorage() {
    let existingEntries = JSON.parse(localStorage.getItem('favouriteBeers'));
    if (existingEntries == null) {
        existingEntries = [];
    }
    return existingEntries;
}

function deleteItemFromLocalStorage(item) {
    let existingEntries = JSON.parse(localStorage.getItem('favouriteBeers'));
    if (existingEntries == null) {
        existingEntries = [];
    }
    const theelem = existingEntries.find(
        (element) => element.id === item.id,
    );
    existingEntries.splice(existingEntries.indexOf(theelem), 1);
    localStorage.setItem('favouriteBeers', JSON.stringify(existingEntries));
}

export default {
    addItemToLocalStorage, deleteItemFromLocalStorage, getItemsFromLocalStorage,
};
