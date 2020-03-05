using BeerCatalogFullstack.Managers;
using BeerCatalogFullstack.ViewModels;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

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

        [HttpGet]
        public IActionResult Get(string userId)
        {
            return Json(manager.GetUserPreferences(userId));
        }

        [HttpPost]
        public IActionResult Delete([FromBody]PreferenceViewModel model)
        {
            manager.Delete(model);
            return Ok();
        }

        public IActionResult GetAutocompletionValues(string input)
        {
            return Json(manager.GetSuitablePreferences(input));
        }
    }
}
