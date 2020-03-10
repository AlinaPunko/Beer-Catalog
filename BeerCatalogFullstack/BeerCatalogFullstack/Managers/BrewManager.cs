using System;
using System.Collections.Generic;
using System.Linq;
using BeerCatalogFullstack.ViewModels;
using DataAccess.Models;
using DataAccess.Repositories;

namespace BeerCatalogFullstack.Managers
{
    public class BrewManager
    {
        private readonly BrewRepository repository;

        public BrewManager(BrewRepository brewRepository)
        {
            repository = brewRepository;
        }

        public IReadOnlyList<Brew> GetAll()
        {
            return repository
                .GetAll()
                .ToList();
        }

        public IReadOnlyList<Brew> GetUserBrews(string userId)
        {
            return repository
                .Get(b => b.UserId == userId)
                .ToList();
        }

        public void UpdateBrew(BrewViewModel model)
        {
            throw new NotImplementedException();
        }

        public void RemoveBrew(BrewViewModel model)
        {
            throw new NotImplementedException();
        }

        public void AddBrew(BrewViewModel model)
        {
            throw new NotImplementedException();
        }
    }
}
