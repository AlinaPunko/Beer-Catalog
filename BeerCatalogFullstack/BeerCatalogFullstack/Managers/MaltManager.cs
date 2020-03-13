using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BeerCatalogFullstack.ViewModels;
using DataAccess.Models;
using DataAccess.Repositories;

namespace BeerCatalogFullstack.Managers
{
    public class MaltManager
    {
        private readonly MaltRepository maltRepository;
        private readonly BrewMaltRepository brewMaltRepository;

        public MaltManager(MaltRepository maltRepository, BrewMaltRepository brewMaltRepository)
        {
            this.maltRepository = maltRepository;
            this.brewMaltRepository = brewMaltRepository;
        }

        public void AddBrewMalt(BrewViewModel viewModel, int brewId)
        {
            if (maltRepository.GetByBeerId(viewModel.BeerId).Count != 0)
            {
                return;
            }

            foreach (Malt maltModel in viewModel.Malt.Select(malt => new Malt
                    {
                        AmountUnit = malt.AmountUnit,
                        AmountValue = malt.AmountValue,
                        BeerId = malt.BeerId,
                        Name = malt.Name
                    }
                )
            )
            {
                maltRepository.Add(maltModel);

                BrewMalt brewMalt = new BrewMalt
                {
                    BrewId = brewId,
                    MaltId = maltRepository
                        .Get(m => m == maltModel)
                        .FirstOrDefault()
                        .Id
                };
                brewMaltRepository.Add(brewMalt);
            }
        }

        public void DeleteBrewMalt(int brewId)
        {

        }
    }
}
