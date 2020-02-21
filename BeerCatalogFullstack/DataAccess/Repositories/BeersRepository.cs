using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using DataAccess.Core;
using DataAccess.Models;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Repositories
{
    public class BeersRepository : GenericRepository<Beer>
    {
        public BeersRepository(ApplicationContext context) : base(context) { }

        public IReadOnlyList<Beer> GetAll()
        {
            return Get().Count() != 0 ? Get().ToList() : null;
        }
    }
}
