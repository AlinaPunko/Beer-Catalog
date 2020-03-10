function isFavorite(beer, favoriteBeers) {
    const isInFavoriteBeers = (element) => element === beer.id;
    return favoriteBeers.some(isInFavoriteBeers);
}

export default { isFavorite };
