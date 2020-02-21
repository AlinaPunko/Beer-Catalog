using DataAccess.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BeerCatalogFullstack.ViewModels;

namespace BeerCatalogFullstack.Managers
{
    public static class FavoriteBeerManager
    {
        public static FavoriteBeer GetFavoriteBeerModel(FavoriteBeerViewModel model)
        {
            return new FavoriteBeer
            {
                BeerId = model.Id,
                UserId = model.UserId
            };
        }

        public static Beer GetBeerModel(FavoriteBeerViewModel model)
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
