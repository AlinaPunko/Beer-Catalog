using System;
using System.Linq;
using System.Threading.Tasks;
using DataAccess.Models;
using Microsoft.AspNetCore.Identity;

namespace DataAccess.Repositories
{
    public class UserRepository
    {
        private readonly UserManager<User> userManager;

        public UserRepository(UserManager<User> userManager)
        {
            this.userManager = userManager;
        }

        public User GetUserById(string id)
        {
            User user = userManager.Users.FirstOrDefault(u => u.Id == id);

            if (user == null)
            {
                throw new ArgumentException("No such user");
            }

            return user;
        }

        public async Task UpdateUserAsync(User model)
        {
            User user = userManager
                .Users
                .FirstOrDefault(u => u.Email == model.Email);

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
