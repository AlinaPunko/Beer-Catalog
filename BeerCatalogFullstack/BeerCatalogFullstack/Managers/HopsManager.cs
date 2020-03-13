using System.Linq;
using BeerCatalogFullstack.ViewModels;
using DataAccess.Models;
using DataAccess.Repositories;

namespace BeerCatalogFullstack.Managers
{
    public class HopsManager
    {
        private readonly HopsRepository hopsRepository;
        private readonly BrewHopsRepository brewHopsRepository;

        public HopsManager(HopsRepository hopsRepository, BrewHopsRepository brewHopsRepository)
        {
            this.hopsRepository = hopsRepository;
            this.brewHopsRepository = brewHopsRepository;
        }

        public void AddBrewHops(BrewViewModel viewModel, int brewId)
        {
            if (hopsRepository.GetByBeerId(viewModel.BeerId).Count != 0)
            {
                return;
            }

            foreach (Hops hopsModel in viewModel.Hops.Select(hops => new Hops
                    {
                        Add = hops.Add,
                        AmountUnit = hops.AmountUnit,
                        AmountValue = hops.AmountValue,
                        BeerId = hops.BeerId,
                        Name = hops.Name,
                        Attribute = hops.Attribute
                    }
                )
            )
            {
                hopsRepository.Add(hopsModel);

                BrewHops brewHops = new BrewHops
                {
                    BrewId = brewId,
                    HopsId = hopsRepository
                        .Get(m => m == hopsModel)
                        .FirstOrDefault()
                        .Id
                };
                brewHopsRepository.Add(brewHops);
            }
        }

    }
}
