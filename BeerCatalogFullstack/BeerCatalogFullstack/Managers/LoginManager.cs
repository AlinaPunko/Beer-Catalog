using System.Linq;
using BeerCatalogFullstack.ViewModels;
using DataAccess.Models;
using Microsoft.AspNetCore.Identity;
using System.Web.WebPages.Html;

namespace BeerCatalogFullstack.Managers
{
    public class LoginManager
    {
        private readonly UserManager<User> userManager;
        private readonly SignInManager<User> signInManager;

        public LoginManager(UserManager<User> userManager, SignInManager<User> signInManager)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
        }

        public async void Register(RegisterViewModel model)
        {
            //User user = new User { UserName = model.Email, Email = model.Email, Name = model.Name, Birthdate = model.Birthdate, Photo = model.Photo };

            //IdentityResult result = await userManager.CreateAsync(user, model.Password);
            //if (result.Succeeded)
            //{
            //    await signInManager.SignInAsync(user, false);
            //    string userId = userManager.Users
            //        .FirstOrDefault(u => u.Email == model.Email)?
            //        .Id;

            //    return (new { UserID = userId });
            //}

            //foreach (IdentityError error in result.Errors)
            //{
            //    ModelState.AddModelError(string.Empty, error.Description);
            //}

            //return new { error = result.Errors };
        }
    }
}
