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

        public IReadOnlyList<Brew> GetPreferedBrews(List<string> preferences, string userId)
        {
            return Get(b => b.UserId == userId)
                .Where(b => preferences.Contains(b.BeerType))
                .OrderBy(b => b.DateTime)
                .ThenBy(b => b.Rating)
                .ToList();
        }
    }
}
