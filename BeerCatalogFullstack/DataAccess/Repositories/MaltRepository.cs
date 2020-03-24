using DataAccess.Core;
using DataAccess.Models;
using System.Collections.Generic;
using System.Linq;

namespace DataAccess.Repositories
{
    public class MaltRepository : GenericRepository<Malt>
    {
        public MaltRepository(ApplicationContext context) : base(context) { }

        public IReadOnlyList<Malt> GetByBeerId(int beerId)
        {
            return Get(f => f.BeerId == beerId)
                .ToList();
        }
    }
}
