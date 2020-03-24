using System.Linq;
using DataAccess.Core;
using DataAccess.Models;

namespace DataAccess.Repositories
{
    public class YeastRepository : GenericRepository<Yeast>
    {
        public YeastRepository(ApplicationContext context) : base(context) { }

        public Yeast GetByBeerId(int id)
        {
            return Get(y => y.BeerId == id)
                .FirstOrDefault();
        }
    }
}
