using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using DataAccess.Core;
using DataAccess.Models;

namespace DataAccess.Repositories
{
    class FermentationsRepository : GenericRepository<Fermentation>
    {
        public FermentationsRepository(ApplicationContext context) : base(context) { }

        public IReadOnlyList<Fermentation> GetAll()
        {
            return Get()
                .ToList();
        }
    }
}
