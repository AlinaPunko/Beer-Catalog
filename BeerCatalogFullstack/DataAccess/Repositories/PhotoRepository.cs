using System.Collections.Generic;
using System.Linq;
using DataAccess.Core;
using DataAccess.Models;

namespace DataAccess.Repositories
{
    public class PhotoRepository : GenericRepository<Photo>
    {
        public PhotoRepository(ApplicationContext context) : base(context) { }

        public IReadOnlyList<Photo> GetAll()
        {
            return Get()
                .ToList();
        }
    }
}