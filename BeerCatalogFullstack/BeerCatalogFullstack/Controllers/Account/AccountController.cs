using System;
using System.Linq;
using System.Threading.Tasks;
using BeerCatalogFullstack.ViewModels;
using DataAccess.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Nancy.Json;
using Newtonsoft.Json;
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
            User user = new User {UserName = model.Email, Email = model.Email, Name = model.Name, Birthdate = model.Birthdate, Photo = model.Photo };

            IdentityResult result = await userManager.CreateAsync(user, model.Password);
            if (result.Succeeded)
            {
                await signInManager.SignInAsync(user, false);
                string userId = userManager.Users.
                                FirstOrDefault(u => u.Email == model.Email)?
                                .Id;
                return Json(new { UserID = userId } );
            }

            foreach (IdentityError error in result.Errors)
            {
                ModelState.AddModelError(string.Empty, error.Description);
            }

            return Json(new { error = result.Errors });
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
        [Route("account/profile")]
        public IActionResult GetUser(string id)
        {
            User user = userManager.Users
                .FirstOrDefault(u => u.Id == id);

            if (user == null)
            {
                return Json(new { error = "Incorrect id" });
            }

            return Json(new
            {
                user.Name,
                user.Birthdate,
                user.Photo,
                user.Email,
            });
        }

        [HttpPut]
        [Route("account/profile")]
        public IActionResult UpdateUser([FromBody]UpdateUserViewModel model)
        {
            try
            {
                User user = userManager.Users
                    .FirstOrDefault(u => u.Id == model.Id);

                if (user == null)
                {
                    return Json("Incorrect data");
                }
                user.Birthdate = model.Birthdate;
                user.Name = model.Name;
                user.Photo = model.Photo;
                user.Email = user.UserName = model.Email;

                IdentityResult result = userManager.UpdateAsync(user).Result;

                return Json("Success");

            }
            catch (Exception e)
            {
                return Json(e);
            }
        }

        [HttpGet]
        public async Task<IActionResult> Logout()
        {
            await signInManager.SignOutAsync();
            return RedirectToAction("Index", "Home");
        }
    }
}