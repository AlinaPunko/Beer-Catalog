using System.Collections.Generic;
using System.Linq;
using BeerCatalogFullstack.ViewModels;
using DataAccess.Models;
using DataAccess.Repositories;

namespace BeerCatalogFullstack.Managers
{
    public class MashTemperatureManager
    {
        private readonly MashTemperatureRepository mashTemperatureRepository;
        private readonly BrewToMashTemperatureRepository brewToMashTemperatureRepository;

        public MashTemperatureManager(MashTemperatureRepository mashTemperatureRepository,
            BrewToMashTemperatureRepository brewToMashTemperatureRepository)
        {
            this.mashTemperatureRepository = mashTemperatureRepository;
            this.brewToMashTemperatureRepository = brewToMashTemperatureRepository;
        }

        public void AddMashTemperature(BrewViewModel viewModel, int brewId)
        {
            IReadOnlyList<MashTemperature> mashTemperatures = mashTemperatureRepository.GetByBeerId(viewModel.BeerId);
            if (mashTemperatures.Any())
            {
                return;
            }

            foreach (MashTemperatureViewModel mashTemperatureViewModel in viewModel.MashTemperatures)
            {
                var mashTemperatureModel = new MashTemperature
                {
                    TemperatureValue = mashTemperatureViewModel.TemperatureValue,
                    TemperatureUnit = mashTemperatureViewModel.TemperatureUnit,
                    Duration = mashTemperatureViewModel.Duration,
                    BeerId = mashTemperatureViewModel.BeerId,
                };
                
                mashTemperatureRepository.Add(mashTemperatureModel);

                BrewToMashTemperature brewMashTemperature = new BrewToMashTemperature
                {
                    BrewId = brewId,
                    MashTemperatureId = mashTemperatureModel.Id
                };
                brewToMashTemperatureRepository.Add(brewMashTemperature);
            }
        }
    }
}
