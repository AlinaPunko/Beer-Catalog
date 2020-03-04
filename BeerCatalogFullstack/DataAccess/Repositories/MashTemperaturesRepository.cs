using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using DataAccess.Core;
using DataAccess.Models;

namespace DataAccess.Repositories
{
    class MashTemperaturesRepository : GenericRepository<MashTemperature>
    {
        public MashTemperaturesRepository(ApplicationContext context) : base(context) { }

        public IReadOnlyList<MashTemperature> GetAll()
        {
            return Get()
                .ToList();
        }
    }
}
