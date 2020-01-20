import localStorageHelper from 'helpers/localStorageHelper';

function isFavourite(beer) {
    const favouriteBeer = localStorageHelper.getItems().find(
        (element) => element.id === beer.id
    );
    if (favouriteBeer) {
        return true;
    }
    return false;
}

export default { isFavourite };
