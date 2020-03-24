using System.Linq;
using DataAccess.Core;
using DataAccess.Models;

namespace DataAccess.Repositories
{
    public class PhotoRepository : GenericRepository<Photo>
    {
        public PhotoRepository(ApplicationContext context) : base(context) { }

        public Photo GetByEncodedPhotoAndBrewId(string photo, int brewId)
        {
            return Get(p => p.EncodedPhoto == photo && p.BrewId == brewId)
                .First();
        }
    }
}