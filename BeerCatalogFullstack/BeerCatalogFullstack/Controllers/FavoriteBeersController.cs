using BeerCatalogFullstack.Managers;
using BeerCatalogFullstack.ViewModels;
using DataAccess.Core;
using Microsoft.AspNetCore.Mvc;

namespace BeerCatalogFullstack.Controllers
{
    public class FavoriteBeersController : Controller
    {
        private readonly FavoriteBeerManager manager;

        public FavoriteBeersController(ApplicationContext context)
        {
            manager = new FavoriteBeerManager(context);
        }

        [HttpPost]
        [Route("favorites/add")]
        public IActionResult AddFavoriteBeer([FromBody]FavoriteBeerViewModel model)
        {
            manager.AddFavoriteBeer(model);
            return Ok();
        }

        [HttpPost]
        [Route("favorites/delete")]
        public IActionResult DeleteFavoriteBeer([FromBody]FavoriteBeerViewModel model)
        {
            manager.RemoveFavoriteBeer(model);
            return Ok();
        }

        [HttpGet]
        [Route("favorites/get")]
        public IActionResult GetFavoriteBeers(string userId)
        {
            return Json(manager.GetUsersFavoriteBeers(userId));
        }
    }
}