import localStorageHelper from 'helpers/localStorageHelper';

function isFavourite(beer) {
    const favouriteBeer = localStorageHelper.getItems().find(
        (element) => element.id === beer.id
    );
    return !!(favouriteBeer);
}

export default { isFavourite };
