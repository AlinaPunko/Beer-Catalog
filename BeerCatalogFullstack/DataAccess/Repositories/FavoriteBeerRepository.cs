using System;
using System.Collections.Generic;
using System.Linq;
using DataAccess.Core;
using DataAccess.Models;

namespace DataAccess.Repositories
{
    public class FavoriteBeerRepository : GenericRepository<FavoriteBeer>
    {
        private BeerRepository beerRepository;

        public FavoriteBeerRepository(ApplicationContext context) : base(context) { }

        public void Add(FavoriteBeer favoriteBeer, Beer beer)
        {
            try
            {
                Context.BeginTransaction();
                beerRepository = new BeerRepository(Context);

                IReadOnlyList<Beer> existingBeers = beerRepository.GetAll();

                if (existingBeers == null || existingBeers.Count(b => b.Id == beer.Id) == 0)
                {
                    beerRepository.Add(beer);
                }

                Add(favoriteBeer);
                Context.Commit();
            }
            catch (Exception)
            {
                Context.Rollback();
            }
        }

        public IReadOnlyList<FavoriteBeer> GetUserFavoriteBeers(string userId)
        {
            return Get(b => b.UserId == userId)
                .ToList();
        }
    }
}
