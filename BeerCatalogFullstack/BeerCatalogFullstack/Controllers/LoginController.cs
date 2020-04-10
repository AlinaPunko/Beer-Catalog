using System.Threading.Tasks;
using BeerCatalogFullstack.Managers;
using BeerCatalogFullstack.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace BeerCatalogFullstack.Controllers
{
    public class LoginController : Controller
    {
        private readonly LoginManager manager;

        public LoginController(LoginManager loginManager)
        {
            manager = loginManager;
        }

        [HttpPost]
        public async Task<IActionResult> Register([FromBody]RegisterViewModel model)
        {
            string userId = await manager.Register(model);
            return Json(userId);
        }


        [HttpPost]
        public async Task<IActionResult> Login([FromBody]LoginViewModel model)
        {
            string userId = await manager.Login(model);
            return Json(userId);
        }

        public IActionResult Logout()
        {
            manager.SignOut();
            return Ok();
        }
    }
}