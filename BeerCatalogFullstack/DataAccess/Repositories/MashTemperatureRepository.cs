using System.Collections.Generic;
using System.Linq;
using DataAccess.Core;
using DataAccess.Models;

namespace DataAccess.Repositories
{
    class MashTemperatureRepository : GenericRepository<MashTemperature>
    {
        public MashTemperatureRepository(ApplicationContext context) : base(context) { }
    }
}
