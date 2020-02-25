using System.Collections.Generic;
using System.Linq;
using DataAccess.Models;
using BeerCatalogFullstack.ViewModels;
using DataAccess.Core;
using DataAccess.Repositories;

namespace BeerCatalogFullstack.Managers
{
    public class FavoriteBeerManager
    {
        private readonly FavoriteBeersRepository favoriteBeersRepository;

        public FavoriteBeerManager(ApplicationContext context)
        {
            favoriteBeersRepository = new FavoriteBeersRepository(context);
        }

        public IReadOnlyList<int> GetUsersFavoriteBeers(string userId)
        {
            return favoriteBeersRepository.GetAll()
                .Where(b => b.UserId == userId)
                .Select(b => b.BeerId).ToList();
        }

        public void AddFavoriteBeer(FavoriteBeerViewModel model)
        {
            FavoriteBeer favoriteBeer = GetFavoriteBeerModel(model);
            Beer beer = GetBeerModel(model);
            favoriteBeersRepository.Add(favoriteBeer, beer);
        }

        public void RemoveFavoriteBeer(FavoriteBeerViewModel model)
        {
            favoriteBeersRepository.Remove(GetFavoriteBeerModel(model));
        }

        private static FavoriteBeer GetFavoriteBeerModel(FavoriteBeerViewModel model)
        {
            return new FavoriteBeer
            {
                BeerId = model.Id,
                UserId = model.UserId
            };
        }

        private static Beer GetBeerModel(FavoriteBeerViewModel model)
        {
            return new Beer
            {
                Id = model.Id,
                Name = model.Name,
                ImageUrl = model.ImageUrl,
                Tagline = model.Tagline
            };
        }
    }
}
