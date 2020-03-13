using System.Collections.Generic;
using BeerCatalogFullstack.Managers;
using BeerCatalogFullstack.ViewModels;
using DataAccess.Models;
using Microsoft.AspNetCore.Mvc;

namespace BeerCatalogFullstack.Controllers
{
    public class BrewController : Controller
    {
        private readonly BrewManager manager;

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

        [HttpDelete]
        public IActionResult Delete([FromBody]BrewViewModel model)
        {
            manager.RemoveBrew(model);
            return Ok();
        }

        [HttpPut]
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
            IReadOnlyList<BrewViewModel> userBrews = manager.GetBrewsByUserId(userId);
            return Json(userBrews);
        }

        public IActionResult GetByBeerId(int beerId)
        {
            IReadOnlyList<BrewViewModel> brews = manager.GetBrewsByBeerId(beerId);
            return Json(brews);
        }

        public IActionResult GetById(int id)
        {
            BrewViewModel brew = manager.GetBrewById(id);
            return Json(brew);
        }
    }
}