using System.Collections.Generic;
using System.Linq;
using DataAccess.Core;
using DataAccess.Models;

namespace DataAccess.Repositories
{
    class HopsRepository : GenericRepository<Hops>
    {
        public HopsRepository(ApplicationContext context) : base(context) { }
    }
}
