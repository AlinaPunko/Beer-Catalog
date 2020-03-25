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
            Yeast yeast = yeastRepository.GetByBeerId(viewModel.BeerId);
            if (yeast != null)
            {
                return;
            }

            yeast = new Yeast
            {
                BeerId = viewModel.Fermentation.BeerId,
                Name = viewModel.Yeast.Name,
            };

            yeastRepository.Add(yeast);
        }
    }
}
