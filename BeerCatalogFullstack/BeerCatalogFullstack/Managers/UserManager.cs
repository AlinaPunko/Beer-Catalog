using System.Threading.Tasks;
using BeerCatalogFullstack.ViewModels;
using DataAccess.Models;
using DataAccess.Repositories;

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
            User user = repository.GetUserById(userId);
            UserViewModel viewModel = new UserViewModel
            {
                Id = user.Id,
                Email = user.Email,
                Name = user.Name,
                Birthdate = user.Birthdate,
                Photo = user.Photo
            };
            return viewModel;
        }

        public async Task UpdateUserAsync(UpdateUserViewModel viewModel)
        {
            var user = new User
            {
                Id = viewModel.Id,
                Email = viewModel.Email,
                UserName = viewModel.Email,
                Name = viewModel.Name,
                Birthdate = viewModel.Birthdate,
                Photo = viewModel.Photo
            };

            await repository.UpdateUserAsync(user);
        }
    }
}
