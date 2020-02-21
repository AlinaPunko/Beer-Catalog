using System;
using System.Collections.Generic;
using System.Linq;
using DataAccess.Core;
using DataAccess.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Migrations.Operations;

namespace DataAccess.Repositories
{
    public class FavoriteBeersRepository : GenericRepository<FavoriteBeer>
    {
        private BeersRepository beersRepository;

        public FavoriteBeersRepository(ApplicationContext context) : base(context) { }

        public void Add(FavoriteBeer favoriteBeer, Beer beer)
        {
            try
            {
                Context.BeginTransaction();
                beersRepository = new BeersRepository(Context);

                IReadOnlyList<Beer> existingBeers = beersRepository.GetAll();

                if (existingBeers == null || !existingBeers.Contains(beer))
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

        public IReadOnlyList<FavoriteBeer> GetAll()
        {
            return Get()
                .ToList();
        }
    }
}
