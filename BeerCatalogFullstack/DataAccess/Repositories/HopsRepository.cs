using DataAccess.Core;
using DataAccess.Models;
using System.Collections.Generic;
using System.Linq;

namespace DataAccess.Repositories
{
    public class HopsRepository : GenericRepository<Hops>
    {
        public HopsRepository(ApplicationContext context) : base(context) { }

        public IReadOnlyList<Hops> GetByBeerId(int beerId)
        {
            return Get(f => f.BeerId == beerId)
                .ToList();
        }
    }
}
