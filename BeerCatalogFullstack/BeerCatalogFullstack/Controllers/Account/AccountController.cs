using System;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using BeerCatalogFullstack.ViewModels;
using DataAccess.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SignInResult = Microsoft.AspNetCore.Identity.SignInResult;

namespace BeerCatalogFullstack.Controllers.Account
{
    public class AccountController : Controller
    {
        private readonly UserManager<User> userManager;
        private readonly SignInManager<User> signInManager;

        public AccountController(UserManager<User> userManager, SignInManager<User> signInManager)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
        }

        [HttpPost]
        [Route("account/join")]
        public async Task<IActionResult> Register([FromBody]RegisterViewModel model)
        {
            User user = new User {UserName =model.Email, Email = model.Email, Name = model.Name, Birthdate = model.Birthdate};

            if (model.Photo != null)
            {
                byte[] imageData;
                using (BinaryReader binaryReader = new BinaryReader(model.Photo.OpenReadStream()))
                {
                    imageData = binaryReader.ReadBytes((int) model.Photo.Length);
                }
                user.Photo = imageData;
            }

            IdentityResult result = await userManager.CreateAsync(user, model.Password);
            if (result.Succeeded)
            {
                await signInManager.SignInAsync(user, false);
                string userId = userManager.Users.FirstOrDefault(u => u.Email == model.Email)?.Id;
                return Json(userId);
            }

            foreach (IdentityError error in result.Errors)
            {
                ModelState.AddModelError(string.Empty, error.Description);
            }

            return Ok();
        }


        [HttpPost]
        [Route("account/login")]
        public async Task<IActionResult> Login([FromBody]LoginViewModel model)
        {
            SignInResult result = await signInManager.PasswordSignInAsync(model.Email, model.Password, true, false);

            if (result.Succeeded)
            {
                string userId = userManager.Users.FirstOrDefault(u => u.Email == model.Email)?.Id;
                return Json(userId);
            }

            ModelState.AddModelError("", "Неправильный логин и (или) пароль");
            return BadRequest();
        }
        
        [HttpPost]
        public async Task<IActionResult> Logout()
        {
            await signInManager.SignOutAsync();
            return RedirectToAction("Index", "Home");
        }
    }
}