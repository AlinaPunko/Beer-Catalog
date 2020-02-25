using System.Linq;
using System.Threading.Tasks;
using BeerCatalogFullstack.ViewModels;
using DataAccess.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using SignInResult = Microsoft.AspNetCore.Identity.SignInResult;

namespace BeerCatalogFullstack.Controllers
{
    public class LoginController : Controller
    {
        private readonly UserManager<User> userManager;
        private readonly SignInManager<User> signInManager;

        public LoginController(UserManager<User> userManager, SignInManager<User> signInManager)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
        }

        [HttpPost]
        [Route("account/join")]
        public async Task<IActionResult> Register([FromBody]RegisterViewModel model)
        {

            //TODO extract all
            User user = new User
            {
                UserName = model.Email,
                Email = model.Email,
                Name = model.Name,
                Birthdate = model.Birthdate,
                Photo = model.Photo
            };

            IdentityResult result = await userManager.CreateAsync(user, model.Password);
            if (!result.Succeeded)
            {
                return Json(new {error = result.Errors});
            }

            await signInManager.SignInAsync(user, false);
            string userId = userManager.Users
                .FirstOrDefault(u => u.Email == model.Email)?
                .Id;

            return Json(new { UserID = userId } );
        }


        [HttpPost]
        [Route("account/login")]
        public async Task<IActionResult> Login([FromBody]LoginViewModel model)
        {
            SignInResult result = await signInManager.PasswordSignInAsync(model.Email, model.Password, true, false);

            if (!result.Succeeded)
            {
                return Json(new {error = "Incorrect data"});
            }

            User user = userManager.Users.FirstOrDefault(u => u.Email == model.Email);

            return Json(new {userId = user.Id});
        }

        [HttpGet]
        public async Task<IActionResult> Logout()
        {
            await signInManager.SignOutAsync();
            return RedirectToAction("Index", "Home");
        }
    }
}