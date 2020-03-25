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
            Fermentation fermentation = fermentationRepository.GetByBeerId(viewModel.BeerId);
            if (fermentation != null)
            {
                return;
            }

            fermentation = new Fermentation
            {
                BeerId = viewModel.Fermentation.BeerId,
                TemperatureUnit = viewModel.Fermentation.TemperatureUnit,
                TemperatureValue = viewModel.Fermentation.TemperatureValue,
            };

            fermentationRepository.Add(fermentation);
        }
    }
}
