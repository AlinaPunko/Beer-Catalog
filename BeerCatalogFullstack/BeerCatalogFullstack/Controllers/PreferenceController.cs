using System.Collections.Generic;
using BeerCatalogFullstack.Managers;
using BeerCatalogFullstack.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace BeerCatalogFullstack.Controllers
{
    public class PreferenceController : Controller
    {
        private readonly PreferenceManager manager;

        public PreferenceController(PreferenceManager manager)
        {
            this.manager = manager;
        }

        [HttpPost]
        public IActionResult Add([FromBody]PreferenceViewModel model)
        {
            manager.Add(model);
            return Ok();
        }

        public IActionResult Get(string userId)
        {
            IReadOnlyList<string> userPreferences = manager.GetUserPreferences(userId);
            return Json(userPreferences);
        }

        [HttpPost]
        public IActionResult Delete([FromBody]PreferenceViewModel model)
        {
            manager.Delete(model);
            return Ok();
        }

        public IActionResult FindByQuery(string input)
        {
            IReadOnlyList<string> preferences = manager.FindByQuery(input);
            return Json(preferences);
        }
    }
}
