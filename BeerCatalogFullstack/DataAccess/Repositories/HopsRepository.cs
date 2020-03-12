using System.Collections.Generic;
using System.Linq;
using DataAccess.Core;
using DataAccess.Models;

namespace DataAccess.Repositories
{
    public class HopsRepository : GenericRepository<Hops>
    {
        public HopsRepository(ApplicationContext context) : base(context) { }

        public IReadOnlyList<Hops> GetAll()
        {
            return Get()
                .ToList();
        }

        public IReadOnlyList<Hops> GetByBeerId(int id)
        {
            return Get(b => b.BeerId == id)
                .ToList();
        }
    }
}
