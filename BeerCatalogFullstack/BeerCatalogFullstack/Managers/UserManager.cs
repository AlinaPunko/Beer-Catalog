using System.Linq;
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

        public string UpdateUser(UpdateUserViewModel model)
        {
            User user = userManager.Users
                .FirstOrDefault(u => u.Id == model.Id);

            if (user == null)
            {
                return "Incorrect data";
            }
            user.Birthdate = model.Birthdate;
            user.Name = model.Name;
            user.Photo = model.Photo;
            user.Email = user.UserName = model.Email;

            userManager.UpdateAsync(user);
            return "Success";
        }
    }
}
