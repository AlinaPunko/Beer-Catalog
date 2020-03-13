using System.Collections.Generic;
using System.Linq;
using DataAccess.Core;
using DataAccess.Models;

namespace DataAccess.Repositories
{
    public class BrewMaltRepository : GenericRepository<BrewMalt>
    {
        public BrewMaltRepository(ApplicationContext context) : base(context) { }

        public IReadOnlyList<BrewMalt> GetAll()
        {
            return Get()
                .ToList();
        }
    }
}
