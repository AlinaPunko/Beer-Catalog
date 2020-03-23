using System.Collections.Generic;
using System.Linq;
using DataAccess.Core;
using DataAccess.Models;

namespace DataAccess.Repositories
{
    public class BeerRepository : GenericRepository<Beer>
    {
        public BeerRepository(ApplicationContext context) : base(context) { }

        public bool DoesBeerExist(int id)
        {
            return Get()
                .Any(b => b.Id == id);
        }
    }
}
