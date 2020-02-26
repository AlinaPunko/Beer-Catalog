using System;
using System.Linq;
using System.Threading.Tasks;
using BeerCatalogFullstack.ViewModels;
using DataAccess.Models;
using Microsoft.AspNetCore.Identity;

namespace BeerCatalogFullstack.Managers
{
    public class UserManager
    {

        private readonly UserManager<User> userManager;

        public UserManager(UserManager<User> userManager)
        {
            this.userManager = userManager;
        }

        public User GetUserById(string userId)
        {
            return userManager.Users.FirstOrDefault(u => u.Id == userId);
        }

        public async Task UpdateUserAsync(UpdateUserViewModel model)
        {
            User user = userManager.Users
                .FirstOrDefault(u => u.Id == model.Id);

            if (user == null)
            {
                throw new ArgumentException("Incorrect data");
            }

            user.Birthdate = model.Birthdate;
            user.Name = model.Name;
            user.Photo = model.Photo;
            user.Email = user.UserName = model.Email;

            IdentityResult result = await userManager.UpdateAsync(user);
            if (result.Succeeded)
            {
                return;
            }

            throw new ArgumentException("Incorrect data");
        }
    }
}
