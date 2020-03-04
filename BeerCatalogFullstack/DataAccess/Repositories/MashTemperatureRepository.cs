using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using DataAccess.Core;
using DataAccess.Models;

namespace DataAccess.Repositories
{
    class MashTemperatureRepository : GenericRepository<MashTemperature>
    {
        public MashTemperatureRepository(ApplicationContext context) : base(context) { }

        public IReadOnlyList<MashTemperature> GetAll()
        {
            return Get()
                .ToList();
        }
    }
}
