using System;
using System.Linq;
using System.Threading.Tasks;
using BeerCatalogFullstack.ViewModels;
using DataAccess.Models;
using Microsoft.AspNetCore.Identity;
using BeerCatalogFullstack.Exceptions;

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

        public async Task<string> Register(RegisterViewModel model)
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

            return userManager.Users
                .FirstOrDefault(u => u.Email == model.Email)?
                .Id;
        }

        public async Task<string> Login(LoginViewModel model)
        {
            SignInResult result = await signInManager.PasswordSignInAsync(model.Email, model.Password, true, false);

            if (!result.Succeeded)
            {
                throw new ArgumentException("Incorrect email or password");
            }

            return userManager.Users.
                FirstOrDefault(u => u.Email == model.Email)?
                .Id;
        }

        public async void SignOut()
        {
            await signInManager.SignOutAsync();
        }
    }
}
