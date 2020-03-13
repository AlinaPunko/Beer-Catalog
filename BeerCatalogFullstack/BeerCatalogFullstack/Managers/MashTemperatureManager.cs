using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BeerCatalogFullstack.ViewModels;
using DataAccess.Models;
using DataAccess.Repositories;

namespace BeerCatalogFullstack.Managers
{
    public class MashTemperatureManager
    {
        private readonly MashTemperatureRepository mashTemperatureRepository;
        private readonly BrewMashTemperatureRepository brewMashTemperatureRepository;

        public MashTemperatureManager(MashTemperatureRepository mashTemperatureRepository, BrewMashTemperatureRepository brewMashTemperatureRepository)
        {
            this.mashTemperatureRepository = mashTemperatureRepository;
            this.brewMashTemperatureRepository = brewMashTemperatureRepository;
        }

        public void AddMashTemperature(BrewViewModel viewModel, int brewId)
        {
            if (mashTemperatureRepository.GetByBeerId(viewModel.BeerId).Count != 0)
            {
                return;
            }

            foreach (MashTemperature mashTemperatureModel in viewModel.MashTemperatures.Select(mash => new MashTemperature
                    {
                        TemperatureValue = mash.TemperatureValue,
                        TemperatureUnit = mash.TemperatureUnit,
                        Duration = mash.Duration,
                        BeerId = mash.BeerId,
                    }
                )
            )
            {
                mashTemperatureRepository.Add(mashTemperatureModel);

                BrewMashTemperature brewMashTemperature = new BrewMashTemperature
                {
                    BrewId = brewId,
                    MashTemperatureId = mashTemperatureRepository
                        .Get(m => m == mashTemperatureModel)
                        .FirstOrDefault()
                        .Id
                };
                brewMashTemperatureRepository.Add(brewMashTemperature);
            }
        }

        public void DeleteMathTemperature(int brewId)
        {

        }
    }
}
