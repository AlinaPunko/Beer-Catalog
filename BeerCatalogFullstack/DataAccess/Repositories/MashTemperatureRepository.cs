using System.Collections.Generic;
using System.Linq;
using DataAccess.Core;
using DataAccess.Models;

namespace DataAccess.Repositories
{
    public class MashTemperatureRepository : GenericRepository<MashTemperature>
    {
        public MashTemperatureRepository(ApplicationContext context) : base(context) { }

        public IReadOnlyList<MashTemperature> GetAll()
        {
            return Get()
                .ToList();
        }

        public IReadOnlyList<MashTemperature> GetByBeerId(int id)
        {
            return Get(m => m.BeerId == id)
                .ToList();
        }
    }
}
