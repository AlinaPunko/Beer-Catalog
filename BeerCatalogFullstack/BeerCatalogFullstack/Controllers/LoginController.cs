using System.Threading.Tasks;
using BeerCatalogFullstack.Managers;
using BeerCatalogFullstack.ViewModels;
using DataAccess.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace BeerCatalogFullstack.Controllers
{
    public class LoginController : Controller
    {
        private readonly LoginManager manager;

        public LoginController(UserManager<User> userManager, SignInManager<User> signInManager)
        {
            manager = new LoginManager(userManager, signInManager);
        }

        [HttpPost]
        [Route("account/join")]
        public async Task<IActionResult> Register([FromBody]RegisterViewModel model)
        {
            return Json(await manager.Register(model));
        }


        [HttpPost]
        [Route("account/login")]
        public async Task<IActionResult> Login([FromBody]LoginViewModel model)
        {
            return Json(await manager.Login(model));
        }

        [HttpGet]
        [Route("account/logout")]
        public IActionResult Logout()
        {
            manager.SignOut();
            return RedirectToAction("Index", "Home");
        }
    }
}