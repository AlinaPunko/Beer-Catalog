using DataAccess.Core;
using DataAccess.Models;

namespace DataAccess.Repositories
{
    public class BrewToHopsRepository : GenericRepository<BrewToHops>
    {
        public BrewToHopsRepository(ApplicationContext context) : base(context) { }
    }
}