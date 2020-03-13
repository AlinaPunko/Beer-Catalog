using BeerCatalogFullstack.ViewModels;
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

        }

        public void DeleteBrewHops(int brewId)
        {

        }
    }
}
