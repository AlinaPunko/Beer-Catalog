using Microsoft.AspNetCore.Mvc;

namespace BeerCatalogFullstack.Controllers.Home
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}