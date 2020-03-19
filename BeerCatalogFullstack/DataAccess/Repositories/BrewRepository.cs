using System;
using System.Collections.Generic;
using System.Linq;
using DataAccess.Core;
using DataAccess.Models;

namespace DataAccess.Repositories
{
    public class BrewRepository : GenericRepository<Brew>
    {
        public BrewRepository(ApplicationContext context) : base(context) { }

        public IReadOnlyList<Brew> GetAll()
        {
            return Get()
                .ToList();
        }

        public IReadOnlyList<Brew> GetUserBrews(string userId)
        {
            return Get(b => b.UserId == userId)
                .ToList();
        }

        public IReadOnlyList<Brew> GetPreferedBrews(IReadOnlyList<string> preferences)
        {
            return Get(b => preferences.Contains(b.BeerType))
                .OrderBy(b => b.DateTime)
                .ThenBy(b => b.Rating)
                .ToList();
        }

        public IReadOnlyList<Brew> GetBrewsByBeerId(int beerId)
        {
            return Get(b => b.BeerId == beerId)
                .ToList();
        }

        public int GetBrewRating(int brewId)
        {
            return Get(b => b.Id == brewId)
                .Select(b => b.Rating)
                .FirstOrDefault();
        }
    }
}
