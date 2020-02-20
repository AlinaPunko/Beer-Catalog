using System.Linq;
using BeerCatalogFullstack.ViewModels;
using DataAccess.Models;
using DataAccess.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BeerCatalogFullstack.Controllers.FavoriteBeers
{
    public class FavoriteBeersController : Controller
    {

        private readonly FavoriteBeersRepository repository;

        public FavoriteBeersController(DbContext context)
        {
            repository = new FavoriteBeersRepository(context);
        }

        [HttpPost]
        [Route("favorites/add")]
        public IActionResult AddFavoriteBeer([FromBody]FavoriteBeerViewModel model)
        {
            FavoriteBeer favoriteBeer = new FavoriteBeer
            {
                BeerId = model.Id,
                UserId = model.UserId
            };

            repository.Add(favoriteBeer);
            return Ok();
        }

        [HttpPost]
        [Route("favorites/delete")]
        public IActionResult DeleteFavoriteBeer([FromBody]FavoriteBeerViewModel model)
        {
            FavoriteBeer favoriteBeer = new FavoriteBeer
            {
                BeerId = model.Id,
                UserId = model.UserId
            };

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