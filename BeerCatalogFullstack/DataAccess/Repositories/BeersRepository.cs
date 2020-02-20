using System.Collections.Generic;
using System.Linq;
using DataAccess.Core;
using DataAccess.Models;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Repositories
{
    public class BeersRepository : GenericRepository<Beer>
    {
        public BeersRepository(DbContext context) : base(context) { }

        public IReadOnlyList<Beer> GetAll()
        {
            return Get()
                .ToList();
        }
    }
}
