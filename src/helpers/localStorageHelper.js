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

function isFavourite(beer, favouriteBeers) {
  let i = favouriteBeers.length;
  while (i--) {
    if (favouriteBeers[i].id === beer.id) {
      return true;
    }
  }
  return false;
}

function deleteItemFromLocalStorage(item) {
  let existingEntries = JSON.parse(localStorage.getItem('favouriteBeers'));
  if (existingEntries == null) { existingEntries = []; }
  existingEntries.pop(item);
  localStorage.setItem('favouriteBeers', JSON.stringify(existingEntries));
}

export default {
  addItemToLocalStorage, isFavourite, deleteItemFromLocalStorage, getItemsFromLocalStorage,
};
