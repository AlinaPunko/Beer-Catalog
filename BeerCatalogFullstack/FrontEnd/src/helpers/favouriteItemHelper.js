function isFavourite(beer, favouriteBeers) {
    if (favouriteBeers.length == 0)
    {
        return false;
    }
    debugger;
    return !! favouriteBeers.find(
        (element) => element === beer.id
    );
}

export default { isFavourite };
