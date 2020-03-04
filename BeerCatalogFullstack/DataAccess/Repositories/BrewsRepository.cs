using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using DataAccess.Core;
using DataAccess.Models;

namespace DataAccess.Repositories
{
    class BrewsRepository : GenericRepository<Brew>
    {
        public BrewsRepository(ApplicationContext context) : base(context) { }

        public IReadOnlyList<Brew> GetAll()
        {
            return Get()
                .ToList();
        }
    }
}
