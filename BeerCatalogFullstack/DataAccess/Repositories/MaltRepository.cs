using System.Collections.Generic;
using System.Linq;
using DataAccess.Core;
using DataAccess.Models;

namespace DataAccess.Repositories
{
    public class MaltRepository : GenericRepository<Malt>
    {
        public MaltRepository(ApplicationContext context) : base(context) { }

        public IReadOnlyList<Malt> GetAll()
        {
            return Get()
                .ToList();
        }

        public IReadOnlyList<Malt> GetByBeerId(int id)
        {
            return Get(m => m.BeerId == id)
                .ToList();
        }
    }
}
