using System.Collections.Generic;
using BeerCatalogFullstack.Managers;
using BeerCatalogFullstack.ViewModels;
using DataAccess.Models;
using Microsoft.AspNetCore.Mvc;

namespace BeerCatalogFullstack.Controllers
{
    public class BrewController : Controller
    {
        private BrewManager manager;

        public BrewController(BrewManager manager)
        {
            this.manager = manager;
        }

        [HttpPost]
        public IActionResult Add([FromBody]BrewViewModel model)
        {
            manager.AddBrew(model);
            return Ok();
        }

        [HttpPost]
        public IActionResult Delete([FromBody]BrewViewModel model)
        {
            manager.RemoveBrew(model);
            return Ok();
        }

        [HttpPost]
        public IActionResult Update([FromBody]BrewViewModel model)
        {
            manager.UpdateBrew(model);
            return Ok();
        }

        public IActionResult Get()
        {
            return Json(manager.GetAll());
        }

        public IActionResult GetByUserId(string userId)
        {
            IReadOnlyList<Brew> userBrews = manager.GetUserBrews(userId);
            return Json(userBrews);
        }
    }
}