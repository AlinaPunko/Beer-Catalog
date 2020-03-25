using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BeerCatalogFullstack.ViewModels;
using DataAccess.Models;
using DataAccess.Repositories;

namespace BeerCatalogFullstack.Managers
{
    public class UserManager
    {
        private readonly UserRepository userRepository;
        private readonly PreferenceRepository preferenceRepository;
        private readonly BrewRepository brewRepository;

        public UserManager(UserRepository userRepository, PreferenceRepository preferenceRepository, BrewRepository brewRepository)
        {
            this.userRepository = userRepository;
            this.preferenceRepository = preferenceRepository;
            this.brewRepository = brewRepository;
        }

        public UserViewModel GetUserById(string userId)
        {
            User user = userRepository.GetUserById(userId);

            return new UserViewModel
            {
                Id = user.Id,
                Email = user.Email,
                Name = user.Name,
                Birthdate = user.Birthdate,
                Photo = user.Photo
            };
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

            await userRepository.UpdateUserAsync(user);
        }

        public IReadOnlyList<BrewViewModel> GetPreferedBrews(string userId)
        {
            IReadOnlyList<string> preferences = preferenceRepository.GetPreferencesByUserId(userId);
            IReadOnlyList<Brew> brews = brewRepository.GetPreferedBrews(preferences);

            IReadOnlyList<BrewViewModel> viewModels = brews.Select(b => new BrewViewModel
            {
                Id = b.Id,
                Name = b.Name,
                UserId = b.UserId,
                BeerId = b.BeerId,
                Rating = b.Rating,
                Impression = b.Impression,
                Location = b.Location,
                DateTime = b.DateTime,
                BeerType = b.BeerType,
                Photos = b.Photos.Select(p => p.EncodedPhoto).ToArray() 
            }).ToList();

            return viewModels;
        }
    }
}
