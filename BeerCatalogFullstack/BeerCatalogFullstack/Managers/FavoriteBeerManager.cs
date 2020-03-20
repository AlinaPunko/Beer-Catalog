using System.Collections.Generic;
using DataAccess.Models;
using BeerCatalogFullstack.ViewModels;
using DataAccess.Repositories;

namespace BeerCatalogFullstack.Managers
{
    public class FavoriteBeerManager
    {
        private readonly FavoriteBeerRepository favoriteBeerRepository;
        private readonly BeerRepository beerRepository;

        public FavoriteBeerManager(FavoriteBeerRepository favoriteBeerRepository, BeerRepository beerRepository)
        {
            this.favoriteBeerRepository = favoriteBeerRepository;
            this.beerRepository = beerRepository;
        }

        public IReadOnlyList<int> GetBeerIdsByUser(string userId)
        {
            return favoriteBeerRepository
                .GetUserFavoriteBeerIds(userId);
        }

        public void AddFavoriteBeer(FavoriteBeerViewModel model)
        {
            FavoriteBeer favoriteBeer = GetFavoriteBeerModel(model);
            Beer beer = GetBeerModel(model);
            bool isBeerExists = beerRepository.IsBeerExists(beer.Id);

            if (!isBeerExists)
            {
                beerRepository.Add(beer);
            }
            
            favoriteBeerRepository.Add(favoriteBeer);
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
