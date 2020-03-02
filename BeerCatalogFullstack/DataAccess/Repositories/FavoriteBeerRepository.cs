using System;
using System.Collections.Generic;
using System.Linq;
using DataAccess.Core;
using DataAccess.Models;

namespace DataAccess.Repositories
{
    public class FavoriteBeerRepository : GenericRepository<FavoriteBeer>
    {
        private BeersRepository beersRepository;

        public FavoriteBeerRepository(ApplicationContext context) : base(context) { }

        public void Add(FavoriteBeer favoriteBeer, Beer beer)
        {
            try
            {
                Context.BeginTransaction();
                beersRepository = new BeersRepository(Context);

                IReadOnlyList<Beer> existingBeers = beersRepository.GetAll();

                if (existingBeers == null || existingBeers.Count(b => b.Id == beer.Id) == 0)
                {
                    beersRepository.Add(beer);
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
