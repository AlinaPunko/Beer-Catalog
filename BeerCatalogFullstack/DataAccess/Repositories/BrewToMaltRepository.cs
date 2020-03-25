using DataAccess.Core;
using DataAccess.Models;

namespace DataAccess.Repositories
{
    public class BrewToMaltRepository : GenericRepository<BrewToMalt>
    {
        public BrewToMaltRepository(ApplicationContext context) : base(context) { }
    }
}
