using System.Collections.Generic;
using System.Linq;
using DataAccess.Core;
using DataAccess.Models;

namespace DataAccess.Repositories
{
    public class RateRepository : GenericRepository<Rate>
    {
        public RateRepository(ApplicationContext context) : base(context) { }
        public IReadOnlyList<Rate> GetAll()
        {
            return Get()
                .ToList();
        }
    }
}