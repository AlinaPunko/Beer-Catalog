using System.Linq;
using BeerCatalogFullstack.Managers;
using BeerCatalogFullstack.ViewModels;
using DataAccess.Core;
using DataAccess.Models;
using DataAccess.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BeerCatalogFullstack.Controllers.FavoriteBeers
{
    public class FavoriteBeersController : Controller
    {
        private readonly FavoriteBeersRepository repository;

        public FavoriteBeersController(ApplicationContext context)
        {
            repository = new FavoriteBeersRepository(context);
        }

        [HttpPost]
        [Route("favorites/add")]
        public IActionResult AddFavoriteBeer([FromBody]FavoriteBeerViewModel model)
        {
            FavoriteBeer favoriteBeer = FavoriteBeerManager.GetFavoriteBeerModel(model);
            Beer beer = FavoriteBeerManager.GetBeerModel(model);
            repository.Add(favoriteBeer, beer);
            return Ok();
        }

        [HttpPost]
        [Route("favorites/delete")]
        public IActionResult DeleteFavoriteBeer([FromBody]FavoriteBeerViewModel model)
        {
            FavoriteBeer favoriteBeer = FavoriteBeerManager.GetFavoriteBeerModel(model);
            repository.Remove(favoriteBeer);
            return Ok();
        }

        [HttpGet]
        [Route("favorites/get")]
        public IActionResult GetFavoriteBeers(string userId)
        {
            return Json(repository.GetAll().Where( b => b.UserId == userId).Select(b => b.BeerId));
        }
    }
}