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
        public IActionResult Add([FromBody]FavoriteBeerViewModel model)
        {
            manager.AddFavoriteBeer(model);
            return Ok();
        }

        [HttpPost]
        public IActionResult Delete([FromBody]FavoriteBeerViewModel model)
        {
            manager.RemoveFavoriteBeer(model);
            return Ok();
        }

        [HttpGet]
        public IActionResult Get(string userId)
        {
            return Json(manager.GetUsersFavoriteBeers(userId));
        }
    }
}