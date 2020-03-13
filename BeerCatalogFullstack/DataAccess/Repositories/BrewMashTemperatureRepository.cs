using System.Collections.Generic;
using System.Linq;
using DataAccess.Core;
using DataAccess.Models;

namespace DataAccess.Repositories
{
    public class BrewMashTemperatureRepository : GenericRepository<BrewMashTemperature>
    {
        public BrewMashTemperatureRepository(ApplicationContext context) : base(context) { }

        public IReadOnlyList<BrewMashTemperature> GetAll()
        {
            return Get()
                .ToList();
        }
    }
}