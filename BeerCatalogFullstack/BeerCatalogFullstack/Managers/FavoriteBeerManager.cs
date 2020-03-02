using System.Collections.Generic;
using System.Linq;
using DataAccess.Models;
using BeerCatalogFullstack.ViewModels;
using DataAccess.Repositories;

namespace BeerCatalogFullstack.Managers
{
    public class FavoriteBeerManager
    {
        private readonly FavoriteBeerRepository favoriteBeerRepository;

        public FavoriteBeerManager(FavoriteBeerRepository repository)
        {
            favoriteBeerRepository = repository;
        }

        public IReadOnlyList<int> GetUserFavoriteBeersIds(string userId)
        {
            return favoriteBeerRepository
                .GetUserFavoriteBeers(userId)
                .Select(b => b.BeerId)
                .ToList();
        }

        public void AddFavoriteBeer(FavoriteBeerViewModel model)
        {
            FavoriteBeer favoriteBeer = GetFavoriteBeerModel(model);
            Beer beer = GetBeerModel(model);
            favoriteBeerRepository.Add(favoriteBeer, beer);
        }

        public void RemoveFavoriteBeer(FavoriteBeerViewModel model)
        {
            FavoriteBeer favoriteBeer = GetFavoriteBeerModel(model);
            favoriteBeerRepository.Remove(favoriteBeer);
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
