using System.Linq;
using System.Threading.Tasks;
using BeerCatalogFullstack.Exceptions;
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
                throw new SignUpException(result.Errors.ToList());
            }

            await signInManager.SignInAsync(user, false);
            string userId = userManager.Users
                .FirstOrDefault(u => u.Email == model.Email)?
                .Id;

            return Json(userId);
        }


        [HttpPost]
        [Route("account/login")]
        public async Task<IActionResult> Login([FromBody]LoginViewModel model)
        {
            SignInResult result = await signInManager.PasswordSignInAsync(model.Email, model.Password, true, false);

            if (!result.Succeeded)
            {
                throw  new SignInException("Incorrect email or password");
            }

            User user = userManager.Users.FirstOrDefault(u => u.Email == model.Email);

            return Json(user.Id);
        }

        [HttpGet]
        public async Task<IActionResult> Logout()
        {
            await signInManager.SignOutAsync();
            return RedirectToAction("Index", "Home");
        }
    }
}