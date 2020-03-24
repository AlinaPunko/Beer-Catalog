using System.Collections.Generic;
using System.Linq;
using BeerCatalogFullstack.ViewModels;
using DataAccess.Models;
using DataAccess.Repositories;

namespace BeerCatalogFullstack.Managers
{
    public class BrewManager
    {
        private readonly HopsManager hopsManager;
        private readonly MaltManager maltManager;
        private readonly FermentationManager fermentationManager;
        private readonly MashTemperatureManager mashTemperatureManager;
        private readonly YeastManager yeastManager;
        private readonly BeerRepository beerRepository;
        private readonly PhotoRepository photoRepository;
        private readonly RateRepository rateRepository;
        private readonly BrewRepository brewRepository;
        private readonly CommentRepository commentRepository;
        private readonly FermentationRepository fermentationRepository;
        private readonly YeastRepository yeastRepository;

        public BrewManager(
            BrewRepository brewRepository,
            MaltManager maltManager,
            HopsManager hopsManager,
            FermentationManager fermentationManager,
            MashTemperatureManager mashTemperatureManager,
            YeastManager yeastManager,
            BeerRepository beerRepository,
            PhotoRepository photoRepository,
            RateRepository rateRepository,
            CommentRepository commentRepository,
            FermentationRepository fermentationRepository,
            YeastRepository yeastRepository
            )
        {
            this.brewRepository = brewRepository;
            this.maltManager = maltManager;
            this.hopsManager = hopsManager;
            this.fermentationManager = fermentationManager;
            this.mashTemperatureManager = mashTemperatureManager;
            this.yeastManager = yeastManager;
            this.beerRepository = beerRepository;
            this.photoRepository = photoRepository;
            this.rateRepository = rateRepository;
            this.commentRepository = commentRepository;
            this.fermentationRepository = fermentationRepository;
            this.yeastRepository = yeastRepository;
        }

        public IReadOnlyList<Brew> GetAll()
        {
            return brewRepository
                .GetAll()
                .ToList();
        }

        public IReadOnlyList<BrewViewModel> GetBrewsByUserId(string userId)
        {
            IReadOnlyList<Brew> brews = brewRepository.GetUserBrews(userId);
            return brews
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

        public IReadOnlyList<CommentViewModel> GetComments(int brewId)
        {
            IReadOnlyList<Comment> comments = commentRepository.GetByBrew(brewId);
            return comments.Select(c =>
                new CommentViewModel
                {
                    Id = c.Id,
                    Text = c.Text,
                    BrewId = c.BrewId,
                    UserId = c.UserId,
                    UserName = c.User.Name,
                    UserPhoto = c.User.Photo
                }
            ).ToList();
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
            Brew brew = brewRepository.GetById(id);

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

        private void AddBeer(BrewViewModel viewModel)
        {
            Beer beer = beerRepository.GetById(viewModel.BeerId);
            if (beer != null)
            {
                return;
            }

            beer = new Beer
            {
                Id = viewModel.BeerId,
                Name = viewModel.Name,
                Tagline = viewModel.Tagline,
                ImageUrl = viewModel.ImageUrl
            };

            beerRepository.Add(beer);
        }

        private void AddBrewPhotos(BrewViewModel viewModel, int brewId)
        {
            if (!viewModel.Photos.Any())
            {
                return;
            }

            foreach (string photo in viewModel.Photos)
            {
                Photo photoModel = photoRepository.GetByEncodedPhotoAndBrewId(photo, brewId);
                if (photoModel != null)
                {
                    continue;
                }

                photoModel = new Photo
                {
                    EncodedPhoto = photo,
                    BrewId = brewId
                };

                photoRepository.Add(photoModel);
            }
        }

        private int GetYeastIdByBeerId(int beerId)
        {
            return yeastRepository
                .GetByBeerId(beerId)
                .Id;
        }

        private int GetFermentationIdByBeerId(int beerId)
        {
            return fermentationRepository
                .GetByBeerId(beerId)
                .Id;
        }

        public void AddBrew(BrewViewModel viewModel)
        {
            fermentationManager.AddBrewFermentation(viewModel);
            int fermentationId = GetFermentationIdByBeerId(viewModel.BeerId);

            yeastManager.AddBrewYeast(viewModel);
            int yeastId = GetYeastIdByBeerId(viewModel.BeerId);

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

            mashTemperatureManager.AddMashTemperature(viewModel, brew.Id);
            maltManager.AddBrewMalt(viewModel, brew.Id);
            hopsManager.AddBrewHops(viewModel, brew.Id);

            AddBrewPhotos(viewModel, brew.Id);
        }
    }
}
