using BeerCatalogFullstack.ViewModels;
using DataAccess.Models;
using DataAccess.Repositories;

namespace BeerCatalogFullstack.Managers
{
    public class YeastManager
    {
        private readonly YeastRepository yeastRepository;

        public YeastManager(YeastRepository yeastRepository)
        {
            this.yeastRepository = yeastRepository;
        }

        public void AddBrewYeast(BrewViewModel viewModel)
        {
            if (yeastRepository.GetByBeerId(viewModel.BeerId) != null)
            {
                return;
            }

            var yeastModel = new Yeast
            {
                BeerId = viewModel.Fermentation.BeerId,
                Name = viewModel.Yeast.Name
            };

            yeastRepository.Add(yeastModel);
        }

        public int GetYeastIdByBeerId(int beerId)
        {
            return yeastRepository.GetByBeerId(beerId).Id;
        }
    }
}
