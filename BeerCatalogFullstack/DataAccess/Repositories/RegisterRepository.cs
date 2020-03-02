using System.Linq;
using System.Threading.Tasks;
using BeerCatalogFullstack.Exceptions;
using DataAccess.Models;
using Microsoft.AspNetCore.Identity;

namespace DataAccess.Repositories
{
    public class RegisterRepository
    {
        private readonly UserManager<User> userManager;
        private readonly SignInManager<User> signInManager;

        public RegisterRepository(UserManager<User> userManager, SignInManager<User> signInManager)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
        }

        public async Task<string> Register(User model, string password)
        {
            IdentityResult result = await userManager.CreateAsync(model, password);
            if (!result.Succeeded)
            {
                throw new SignUpException(result.Errors.ToList());
            }

            await signInManager.SignInAsync(model, false);

            return userManager.Users
                .FirstOrDefault(u => u.Email == model.Email)?
                .Id;
        }
    }
}
