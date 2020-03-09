function isFavorite(beer, favoriteBeers) {
    if (favoriteBeers.length === 0) {
        return false;
    }
    return !!favoriteBeers.find(
        (element) => element === beer.id
    );
}

export default { isFavorite };
