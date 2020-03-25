using DataAccess.Core;
using DataAccess.Models;
using System.Linq;

namespace DataAccess.Repositories
{
    public class FermentationRepository : GenericRepository<Fermentation>
    {
        public FermentationRepository(ApplicationContext context) : base(context) { }

        public Fermentation GetByBeerId(int beerId)
        {
            return Get(f => f.BeerId == beerId)
                .FirstOrDefault();
        }
    }
}
