using System.Collections.Generic;
using System.Linq;
using DataAccess.Core;
using DataAccess.Models;

namespace DataAccess.Repositories
{
    public class BeerRepository : GenericRepository<Beer>
    {
        public BeerRepository(ApplicationContext context) : base(context) { }

        public IReadOnlyList<Beer> GetAll()
        {
            return Get()
                .ToList();
        }

        public bool IsBeerExists(int id)
        {
            return Get().Any(b => b.Id == id);
        }
    }
}
