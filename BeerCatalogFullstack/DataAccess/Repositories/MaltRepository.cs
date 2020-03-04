using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using DataAccess.Core;
using DataAccess.Models;

namespace DataAccess.Repositories
{
    class MaltRepository : GenericRepository<Malt>
    {
        public MaltRepository(ApplicationContext context) : base(context) { }

        public IReadOnlyList<Malt> GetAll()
        {
            return Get()
                .ToList();
        }
    }
}
