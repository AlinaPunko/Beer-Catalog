using BeerCatalogFullstack.ViewModels;
using DataAccess.Models;
using DataAccess.Repositories;

namespace BeerCatalogFullstack.Managers
{
    public class FermentationManager
    {
        private readonly FermentationRepository fermentationRepository;

        public FermentationManager(FermentationRepository fermentationRepository)
        {
            this.fermentationRepository = fermentationRepository;
        }

        public void AddBrewFermentation(BrewViewModel viewModel)
        {
            if (fermentationRepository.GetByBeerId(viewModel.BeerId) != null)
            {
                return;
            }

            var fermentationModel = new Fermentation
            {
                BeerId = viewModel.Fermentation.BeerId,
                TemperatureUnit = viewModel.Fermentation.TemperatureUnit,
                TemperatureValue = viewModel.Fermentation.TemperatureValue
            };

            fermentationRepository.Add(fermentationModel);
        }

        public int GetFermentationIdByBeerId(int beerId)
        {
            return fermentationRepository.GetByBeerId(beerId).Id;
        }
    }
}
