using System.Collections.Generic;
using System.Linq;
using DataAccess.Core;
using DataAccess.Models;

namespace DataAccess.Repositories
{
    class FermentationRepository : GenericRepository<Fermentation>
    {
        public FermentationRepository(ApplicationContext context) : base(context) { }
    }
}
