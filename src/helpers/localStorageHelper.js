const FAVOURITE_BEERS = 'favouriteBeers';

function add(item) {
    let existingEntries = JSON.parse(localStorage.getItem(FAVOURITE_BEERS));
    if (existingEntries == null) {
        existingEntries = [];
    }
    existingEntries.unshift(item);
    localStorage.setItem(FAVOURITE_BEERS, JSON.stringify(existingEntries));
}

function getItems() {
    const existingEntries = JSON.parse(localStorage.getItem(FAVOURITE_BEERS));
    if (existingEntries == null) {
        return [];
    }
    return existingEntries;
}

function deleteItem(item) {
    const existingEntries = JSON.parse(localStorage.getItem(FAVOURITE_BEERS));
    if (existingEntries == null) {
        return;
    }
    const beerToDelete = existingEntries.find(
        (element) => element.id === item.id,
    );
    existingEntries.splice(existingEntries.indexOf(beerToDelete), 1);
    localStorage.setItem(FAVOURITE_BEERS, JSON.stringify(existingEntries));
}

export default {
    add, deleteItem, getItems
};
