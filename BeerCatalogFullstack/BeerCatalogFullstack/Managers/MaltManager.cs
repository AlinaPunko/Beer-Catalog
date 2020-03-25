using System.Collections.Generic;
using System.Linq;
using BeerCatalogFullstack.ViewModels;
using DataAccess.Models;
using DataAccess.Repositories;

namespace BeerCatalogFullstack.Managers
{
    public class MaltManager
    {
        private readonly MaltRepository maltRepository;
        private readonly BrewToMaltRepository brewToMaltRepository;

        public MaltManager(MaltRepository maltRepository, BrewToMaltRepository brewToMaltRepository)
        {
            this.maltRepository = maltRepository;
            this.brewToMaltRepository = brewToMaltRepository;
        }

        public void AddBrewMalt(BrewViewModel viewModel, int brewId)
        {
            IReadOnlyList<Malt> malts = maltRepository.GetByBeerId(viewModel.BeerId);
            if (malts.Any())
            {
                return;
            }

            foreach (MaltViewModel maltViewModel in viewModel.Malt)
            {
                Malt maltModel = new Malt
                {
                    AmountUnit = maltViewModel.AmountUnit,
                    AmountValue = maltViewModel.AmountValue,
                    BeerId = maltViewModel.BeerId,
                    Name = maltViewModel.Name
                };
                
                maltRepository.Add(maltModel);

                BrewToMalt brewToMalt = new BrewToMalt
                {
                    BrewId = brewId,
                    MaltId = maltModel.Id
                };

                brewToMaltRepository.Add(brewToMalt);
            }
        }
    }
}
