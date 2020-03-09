using System.Collections.Generic;
using BeerCatalogFullstack.Managers;
using BeerCatalogFullstack.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace BeerCatalogFullstack.Controllers
{
    public class FavoriteBeersController : Controller
    {
        private readonly FavoriteBeerManager manager;

        public FavoriteBeersController(FavoriteBeerManager manager)
        {
            this.manager = manager;
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
            IReadOnlyList<int> userFavoriteBeersIds = manager.GetUserFavoriteBeersIds(userId);
            return Json(userFavoriteBeersIds);
        }
    }
}