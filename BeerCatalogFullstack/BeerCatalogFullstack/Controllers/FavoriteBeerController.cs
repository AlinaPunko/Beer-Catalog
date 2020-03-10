using System.Collections.Generic;
using BeerCatalogFullstack.Managers;
using BeerCatalogFullstack.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace BeerCatalogFullstack.Controllers
{
    public class FavoriteBeerController : Controller
    {
        private readonly FavoriteBeerManager manager;

        public FavoriteBeerController(FavoriteBeerManager manager)
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

        public IActionResult Get(string id)
        {
            IReadOnlyList<int> userFavoriteBeersIds = manager.GetUserFavoriteBeersIds(id);
            return Json(userFavoriteBeersIds);
        }
    }
}