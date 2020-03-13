using System.Collections.Generic;
using System.Linq;
using DataAccess.Core;
using DataAccess.Models;

namespace DataAccess.Repositories
{
    public class BrewHopsRepository : GenericRepository<BrewHops>
    {
        public BrewHopsRepository(ApplicationContext context) : base(context) { }

        public IReadOnlyList<BrewHops> GetAll()
        {
            return Get()
                .ToList();
        }
    }
}