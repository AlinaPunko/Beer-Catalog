using System.Collections.Generic;
using System.Linq;
using DataAccess.Core;
using DataAccess.Models;

namespace DataAccess.Repositories
{
    public class FermentationRepository : GenericRepository<Fermentation>
    {
        public FermentationRepository(ApplicationContext context) : base(context) { }

        public IReadOnlyList<Fermentation> GetAll()
        {
            return Get()
                .ToList();
        }

        public Fermentation GetByBeerId(int id)
        {
            return Get(b => b.BeerId == id)
                .FirstOrDefault();
        }
    }
}
