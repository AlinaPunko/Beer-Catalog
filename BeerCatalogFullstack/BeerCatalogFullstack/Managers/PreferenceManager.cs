using System.Collections.Generic;
using BeerCatalogFullstack.ViewModels;
using DataAccess.Models;
using DataAccess.Repositories;

namespace BeerCatalogFullstack.Managers
{
    public class PreferenceManager
    {
        private readonly PreferenceRepository repository;

        public PreferenceManager(PreferenceRepository repository)
        {
            this.repository = repository;
        }

        public void Add(PreferenceViewModel model)
        {
            var userPreference = new UserPreference()
            {
                UserId = model.UserId,
                PreferencedBeerType = model.PreferencedBeerType
            };

            repository.Add(userPreference);
        }

        public void Delete(PreferenceViewModel model)
        {
            var userPreference = new UserPreference()
            {
                UserId = model.UserId,
                PreferencedBeerType = model.PreferencedBeerType
            };

            repository.Remove(userPreference);
        }

        public IReadOnlyList<string> GetUserPreferences(string userId)
        {
            return repository.GetPreferencesByUserId(userId);
        }

        public IReadOnlyList<string> GetSuitablePreferences(string input)
        {
            return repository.GetPreferencesByInput(input);
        }
    }
}
