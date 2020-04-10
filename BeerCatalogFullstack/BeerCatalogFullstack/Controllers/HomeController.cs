using Microsoft.AspNetCore.Mvc;

namespace BeerCatalogFullstack.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}