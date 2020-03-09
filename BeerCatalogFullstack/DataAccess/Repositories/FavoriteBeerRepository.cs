using System;
using System.Collections.Generic;
using System.Linq;
using DataAccess.Core;
using DataAccess.Models;

namespace DataAccess.Repositories
{
    public class FavoriteBeerRepository : GenericRepository<FavoriteBeer>
    {

        public FavoriteBeerRepository(ApplicationContext context) : base(context) { }

        public IReadOnlyList<int> GetUserFavoriteBeerIds(string userId)
        {
            return Get(b => b.UserId == userId)
                .Select(b => b.BeerId)
                .ToList();
        }
    }
}
