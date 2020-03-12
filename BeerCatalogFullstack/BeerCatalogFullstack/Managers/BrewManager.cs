using System;
using System.Collections.Generic;
using System.Linq;
using BeerCatalogFullstack.ViewModels;
using DataAccess.Models;
using DataAccess.Repositories;

namespace BeerCatalogFullstack.Managers
{
    public class BrewManager
    {
        private readonly BrewRepository brewRepository;
        private readonly HopsRepository hopsRepository;
        private readonly MaltRepository maltRepository;
        private readonly FermentationRepository fermentationRepository;
        private readonly MashTemperatureRepository mashTemperatureRepository;
        private readonly YeastRepository yeastRepository;
        private readonly BeerRepository beerRepository;
        private readonly PhotoRepository photoRepository;

        public BrewManager(BrewRepository brewRepository,
            MaltRepository maltRepository,
            HopsRepository hopsRepository,
            FermentationRepository fermentationRepository,
            MashTemperatureRepository mashTemperatureRepository,
            YeastRepository yeastRepository,
            BeerRepository beerRepository,
            PhotoRepository photoRepository)
        {
            this.brewRepository = brewRepository;
            this.maltRepository = maltRepository;
            this.hopsRepository = hopsRepository;
            this.fermentationRepository = fermentationRepository;
            this.mashTemperatureRepository = mashTemperatureRepository;
            this.yeastRepository = yeastRepository;
            this.beerRepository = beerRepository;
            this.photoRepository = photoRepository;
        }

        public IReadOnlyList<Brew> GetAll()
        {
            return brewRepository
                .GetAll()
                .ToList();
        }

        public IReadOnlyList<Brew> GetBrewsByUserId(string userId)
        {
            return brewRepository
                .Get(b => b.UserId == userId)
                .ToList();
        }

        public Brew GetBrewById(int id)
        {
            return brewRepository
                .Get(b => b.Id == id)
                .FirstOrDefault();
        }

        public IReadOnlyList<Brew> GetBrewsByBeerId(int beerId)
        {
            return brewRepository
                .Get(b => b.BeerId == beerId)
                .ToList();
        }

        public void UpdateBrew(BrewViewModel model)
        {
            throw new NotImplementedException();
        }

        public void RemoveBrew(BrewViewModel model)
        {
            throw new NotImplementedException();
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

        public void AddBrewYeast(BrewViewModel viewModel)
        {
            if (yeastRepository.GetByBeerId(viewModel.BeerId) != null)
            {
                return;
            }

            var yeastModel = new Yeast
            {
                BeerId = viewModel.Fermentation.BeerId,
                Name = viewModel.Yeast.Name
            };

            yeastRepository.Add(yeastModel);
        }

        public void AddBrewMalt(BrewViewModel viewModel)
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
            }
        }

        public void AddMashTemperature(BrewViewModel viewModel)
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
            }
        }

        public void AddBeer(BrewViewModel viewModel)
        {
            if (beerRepository.GetById(viewModel.BeerId) != null)
            {
                return;
            }

            var beerModel = new Beer
            {
                Id = viewModel.BeerId,
                Name = viewModel.Name,
                Tagline = viewModel.Tagline,
                ImageUrl = viewModel.ImageUrl,
            };

            beerRepository.Add(beerModel);
        }

        public void AddBrewHops(BrewViewModel viewModel)
        {
            if (hopsRepository.GetByBeerId(viewModel.BeerId).Count != 0)
            {
                return;
            }

            foreach (Hops hopsModel in viewModel.Hops.Select(hops => new Hops
                    {
                        AmountUnit = hops.AmountUnit,
                        AmountValue = hops.AmountValue,
                        BeerId = hops.BeerId,
                        Name = hops.Name,
                        Add = hops.Add,
                        Attribute = hops.Attribute
                    }
                )
            )
            {
                hopsRepository.Add(hopsModel);
            }
        }

        public void AddBrewPhotos(BrewViewModel viewModel, int brewId)
        {
            if (viewModel.Photos.Length == 0)
            {
                return;
            }

            foreach (string photo in viewModel.Photos)
            { 
                if (photoRepository.GetByEncodedPhotoAndBrewId(photo, brewId).Count != 0) 
                { 
                    continue;
                }   

                Photo photoModel = new Photo
                {
                    EncodedPhoto = photo,
                    BrewId = brewId
                };

                photoRepository.Add(photoModel);
            }
        }

        public void AddBrew(BrewViewModel viewModel)
        {
            
            AddBrewFermentation(viewModel);
            int fermentationId = fermentationRepository.GetByBeerId(viewModel.BeerId).Id;

            AddBrewYeast(viewModel);
            int yeastId = yeastRepository.GetByBeerId(viewModel.BeerId).Id;

            AddBeer(viewModel);

            var brew = new Brew
            {
                BeerId = viewModel.BeerId,
                Name = viewModel.Name,
                BeerType = viewModel.BeerType,
                Location = viewModel.Location,
                FermentationId = fermentationId,
                YeastId = yeastId,
                DateTime = viewModel.DateTime,
                Impression = viewModel.Impression,
                UserId = viewModel.UserId
            };
            brewRepository.Add(brew);

            int brewId = brewRepository.Get(b =>
                    b.DateTime == viewModel.DateTime &&
                    b.Location == viewModel.Location &&
                    b.UserId == viewModel.UserId &&
                    b.BeerId == viewModel.BeerId)
                .Select(b => b.Id)
                .FirstOrDefault();

            AddMashTemperature(viewModel);
            AddBrewMalt(viewModel);
            AddBrewHops(viewModel);
            AddBrewPhotos(viewModel, brewId);
        }
    }
}
