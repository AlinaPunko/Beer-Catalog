using System;
using System.Linq;
using System.Threading.Tasks;
using BeerCatalogFullstack.ViewModels;
using DataAccess.Models;
using DataAccess.Repositories;
using DataAccess.ViewModels;
using Microsoft.AspNetCore.Identity;

namespace BeerCatalogFullstack.Managers
{
    public class UserManager
    {
        private readonly UserRepository repository;

        public UserManager(UserRepository userRepository)
        {
            repository = userRepository;
        }

        public UserViewModel GetUserById(string userId)
        {
            return repository.GetUserById(userId);
        }

        public async Task UpdateUserAsync(UpdateUserViewModel viewModel)
        {
            var userViewModel = new UserViewModel
            {
                Id = viewModel.Id,
                Email = viewModel.Email,
                Name = viewModel.Name,
                Birthdate = viewModel.Birthdate,
                Photo = viewModel.Photo
            };

            await repository.UpdateUserAsync(userViewModel);
        }
    }
}
