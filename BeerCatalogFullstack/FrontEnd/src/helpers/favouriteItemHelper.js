import localStorageHelper from 'helpers/localStorageHelper';

function isFavourite(beer) {
    return !!localStorageHelper.getItems().find(
        (element) => element.id === beer.id
    );
}

export default { isFavourite };
