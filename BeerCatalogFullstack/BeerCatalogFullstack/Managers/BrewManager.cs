﻿using System;
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
        private readonly HopsManager hopsManager;
        private readonly MaltManager maltManager;
        private readonly FermentationManager fermentationManager;
        private readonly MashTemperatureManager mashTemperatureManager;
        private readonly YeastManager yeastManager;
        private readonly BeerRepository beerRepository;
        private readonly PhotoRepository photoRepository;
        private readonly RateRepository rateRepository;

        public BrewManager(
            BrewRepository brewRepository,
            MaltManager maltManager,
            HopsManager hopsManager,
            FermentationManager fermentationManager,
            MashTemperatureManager mashTemperatureManager,
            YeastManager yeastRepository,
            BeerRepository beerRepository,
            PhotoRepository photoRepository,
            RateRepository rateRepository)
        {
            this.brewRepository = brewRepository;
            this.maltManager = maltManager;
            this.hopsManager = hopsManager;
            this.fermentationManager = fermentationManager;
            this.mashTemperatureManager = mashTemperatureManager;
            this.yeastManager = yeastRepository;
            this.beerRepository = beerRepository;
            this.photoRepository = photoRepository;
            this.rateRepository = rateRepository;
        }

        public IReadOnlyList<Brew> GetAll()
        {
            return brewRepository
                .GetAll()
                .ToList();
        }

        public IReadOnlyList<BrewViewModel> GetBrewsByUserId(string userId)
        {
            return brewRepository
                .GetUserBrews(userId)
                .Select(b =>
                    new BrewViewModel
                    {
                        Id = b.Id,
                        UserId = b.UserId,
                        BeerId = b.BeerId,
                        Rating = b.Rating,
                        Impression = b.Impression,
                        Location = b.Location,
                        DateTime = b.DateTime,
                        BeerType = b.BeerType
                    }
                )
                .ToList();
        }

        public  int GetBrewRating(int brewId)
        {
            int rating = brewRepository.GetBrewRating(brewId);
            return rating;
        }

        public int GetUserRatesSum(string userId, int brewId)
        {
            int rating = rateRepository.GetSumUserBrewRates(userId, brewId);
            return rating;
        }

        public void RateBrew(RateViewModel viewmodel)
        {
            var rate = new Rate
            {
                BrewId = viewmodel.BrewId,
                UserId = viewmodel.UserId,
                Value = viewmodel.Value
            };

            rateRepository.Add(rate);

            Brew brew = brewRepository.GetById(viewmodel.BrewId);
            brew.Rating += viewmodel.Value;
            brewRepository.Update(brew);
        }

        public BrewViewModel GetBrewById(int id)
        {
            Brew brew = brewRepository
                .Get(b => b.Id == id)
                .FirstOrDefault();

            if (brew == null)
            {
                return null;
            }

            var brewViewModel = new BrewViewModel
            {
                Id = brew.Id,
                UserId = brew.UserId,
                BeerId = brew.BeerId,
                Rating = brew.Rating,
                Impression = brew.Impression,
                Location = brew.Location,
                DateTime = brew.DateTime,
                BeerType = brew.BeerType,
                Photos = brew.Photos.Select(p => p.EncodedPhoto).ToArray()
            };

            return brewViewModel;

        }

        public IReadOnlyList<BrewViewModel> GetBrewsByBeerId(int beerId)
        {
            return brewRepository
                .GetBrewsByBeerId(beerId)
                .Select(b =>
                    new BrewViewModel
                    {
                        Id = b.Id,
                        UserId = b.UserId,
                        BeerId = b.BeerId,
                        Rating = b.Rating,
                        Impression = b.Impression,
                        Location = b.Location,
                        DateTime = b.DateTime,
                        BeerType = b.BeerType
                    }
                )
                .ToList();
        }

        public void UpdateBrew(BrewViewModel viewModel)
        {
            var brew = brewRepository.GetById(viewModel.Id);
            brew.Id = viewModel.Id;
            brew.BeerId = viewModel.BeerId;
            brew.Name = viewModel.Name;
            brew.BeerType = viewModel.BeerType;
            brew.Rating = viewModel.Rating;
            brew.Location = viewModel.Location;
            brew.DateTime = viewModel.DateTime;
            brew.Impression = viewModel.Impression;
            brew.UserId = viewModel.UserId;

            brewRepository.Update(brew);
        }

        public void RemoveBrew(BrewViewModel viewModel)
        {
            var brew = new Brew
            {
                Id = viewModel.Id,
                BeerId = viewModel.BeerId,
                Name = viewModel.Name,
                BeerType = viewModel.BeerType,
                Location = viewModel.Location,
                DateTime = viewModel.DateTime,
                Impression = viewModel.Impression,
                UserId = viewModel.UserId
            };

            brewRepository.Remove(brew);
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
            
            fermentationManager.AddBrewFermentation(viewModel);
            int fermentationId = fermentationManager.GetFermentationIdByBeerId(viewModel.BeerId);

            yeastManager.AddBrewYeast(viewModel);
            int yeastId = yeastManager.GetYeastIdByBeerId(viewModel.BeerId);

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

            mashTemperatureManager.AddMashTemperature(viewModel, brewId);
            maltManager.AddBrewMalt(viewModel, brewId);
            hopsManager.AddBrewHops(viewModel, brewId);
            AddBrewPhotos(viewModel, brewId);
        }
    }
}
