using System;
using System.Collections.Generic;
using System.Linq;
using BeerCatalogFullstack.ViewModels;
using DataAccess.Models;
using DataAccess.Repositories;

namespace BeerCatalogFullstack.Managers
{
    public class PreferenceManager
    {
        private readonly PreferenceRepository repository;

        private string[] BeerTypes = new[]
        {
            "Ale",
            "Lager",
            "Stout",
            "Porter",
            "Lambic",
            "Pilsner",
            "Pale Ale",
            "Weissber",
            "Belgian Ale"
        };

        public PreferenceManager(PreferenceRepository repository)
        {
            this.repository = repository;
        }

        public void Add(PreferenceViewModel model)
        {
            var userPreference = new UserPreference
            {
                UserId = model.UserId,
                PreferencedBeerType = model.PreferencedBeerType
            };

            repository.Add(userPreference);
        }

        public void Delete(PreferenceViewModel model)
        {
            var userPreference = new UserPreference
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

        public IReadOnlyList<string> FindByQuery(string input)
        {
            return BeerTypes
                .Where(s => s.Contains(input, StringComparison.OrdinalIgnoreCase))
                .Take(5)
                .ToList();
        }
    }
}
