using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using DataAccess.Core;
using DataAccess.Models;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Repositories
{
    public class FavouriteBeersRepository : GenericRepository<FavouriteBeer>
    {
        public FavouriteBeersRepository(DbContext context) : base(context) { }

        public IReadOnlyList<FavouriteBeer> GetAll()
        {
            return Get()
                .ToList();
        }
    }
}
