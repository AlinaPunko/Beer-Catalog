using DataAccess.Core;
using DataAccess.Models;
using System.Collections.Generic;
using System.Linq;

namespace DataAccess.Repositories
{
    public class MashTemperatureRepository : GenericRepository<MashTemperature>
    {
        public MashTemperatureRepository(ApplicationContext context) : base(context) { }

        public IReadOnlyList<MashTemperature> GetByBeerId(int beerId)
        {
            return Get(m => m.BeerId == beerId)
                .ToList();
        }
    }
}
