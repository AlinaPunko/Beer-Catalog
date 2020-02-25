using System.Collections.Generic;
using System.Linq;
using DataAccess.Core;
using DataAccess.Models;

namespace DataAccess.Repositories
{
    public class BeersRepository : GenericRepository<Beer>
    {
        public BeersRepository(ApplicationContext context) : base(context) { }

        public IReadOnlyList<Beer> GetAll()
        {
            return Get()
                .ToList();
        }
    }
}
