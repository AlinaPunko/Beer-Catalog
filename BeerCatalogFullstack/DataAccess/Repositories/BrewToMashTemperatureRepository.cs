using DataAccess.Core;
using DataAccess.Models;

namespace DataAccess.Repositories
{
    public class BrewToMashTemperatureRepository : GenericRepository<BrewToMashTemperature>
    {
        public BrewToMashTemperatureRepository(ApplicationContext context) : base(context) { }
    }
}