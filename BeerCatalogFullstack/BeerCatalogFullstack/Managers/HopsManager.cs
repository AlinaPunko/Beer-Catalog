using System.Collections.Generic;
using System.Linq;
using BeerCatalogFullstack.ViewModels;
using DataAccess.Models;
using DataAccess.Repositories;

namespace BeerCatalogFullstack.Managers
{
    public class HopsManager
    {
        private readonly HopsRepository hopsRepository;
        private readonly BrewToHopsRepository brewToHopsRepository;

        public HopsManager(HopsRepository hopsRepository, BrewToHopsRepository brewToHopsRepository)
        {
            this.hopsRepository = hopsRepository;
            this.brewToHopsRepository = brewToHopsRepository;
        }

        public void AddBrewHops(BrewViewModel viewModel, int brewId)
        {
            IReadOnlyList<Hops> hops = hopsRepository.GetByBeerId(viewModel.BeerId);
            if (hops.Any())
            {
                return;
            }

            foreach (HopsViewModel hopsViewModel in viewModel.Hops)
            {
                var hopsModel = new Hops
                {
                    Add = hopsViewModel.Add,
                    AmountUnit = hopsViewModel.AmountUnit,
                    AmountValue = hopsViewModel.AmountValue,
                    BeerId = hopsViewModel.BeerId,
                    Name = hopsViewModel.Name,
                    Attribute = hopsViewModel.Attribute
                };
                
                hopsRepository.Add(hopsModel);

                var brewHops = new BrewToHops
                {
                    BrewId = brewId,
                    HopsId = hopsModel.Id
                };
                
                brewToHopsRepository.Add(brewHops);
            }
        }

    }
}
