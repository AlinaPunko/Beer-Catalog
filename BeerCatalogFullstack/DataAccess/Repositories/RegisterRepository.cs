﻿using System.Linq;
using System.Threading.Tasks;
using DataAccess.Exceptions;
using DataAccess.Models;
using DataAccess.ViewModels;
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

        public async Task<string> Register(UserViewModel viewModel, string password)
        {
            var user = new User()
            {
                Email = viewModel.Email,
                Name = viewModel.Name,
                UserName = viewModel.Email,
                Birthdate = viewModel.Birthdate,
                Photo = viewModel.Photo
            };

            IdentityResult result = await userManager.CreateAsync(user, password);
            if (!result.Succeeded)
            {
                throw new SignUpException(result.Errors.ToList());
            }

            await signInManager.SignInAsync(user, false);

            return userManager.Users
                .FirstOrDefault(u => u.Email == viewModel.Email)?
                .Id;
        }
    }
}
