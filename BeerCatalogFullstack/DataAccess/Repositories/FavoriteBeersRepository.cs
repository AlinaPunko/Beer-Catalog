using System.Collections.Generic;
using System.Linq;
using DataAccess.Core;
using DataAccess.Models;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Repositories
{
    public class FavoriteBeersRepository : GenericRepository<FavoriteBeer>
    {
        public FavoriteBeersRepository(DbContext context) : base(context) { }

        public IReadOnlyList<FavoriteBeer> GetAll()
        {
            return Get()
                .ToList();
        }
    }
}
