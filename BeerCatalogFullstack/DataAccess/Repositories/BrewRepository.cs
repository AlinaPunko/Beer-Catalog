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
    }
}
