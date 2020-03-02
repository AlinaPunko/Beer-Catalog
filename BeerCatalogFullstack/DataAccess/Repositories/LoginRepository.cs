using System;
using System.Linq;
using System.Threading.Tasks;
using DataAccess.Models;
using Microsoft.AspNetCore.Identity;

namespace DataAccess.Repositories
{
    public class LoginRepository
    {
        private readonly UserManager<User> userManager;
        private readonly SignInManager<User> signInManager;

        public LoginRepository(UserManager<User> userManager, SignInManager<User> signInManager)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
        }

        public async Task<string> Login(User model, string password)
        {
            try
            {

                SignInResult result = await signInManager.PasswordSignInAsync(model.Email, password, true, false);

                if (!result.Succeeded)
                {
                    throw new ArgumentException("Incorrect email or password");
                }

                return userManager.Users.FirstOrDefault(u => u.Email == model.Email)?.Id;
            }
            catch (Exception)
            {
                throw new ArgumentException("Incorrect email or password");
            }
        }

        public async void SignOut()
        {
            await signInManager.SignOutAsync();
        }
    }
}
