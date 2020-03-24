using DataAccess.Core;
using DataAccess.Models;
using System.Collections.Generic;
using System.Linq;

namespace DataAccess.Repositories
{
    public class PreferenceRepository : GenericRepository<UserPreference>
    {
        public PreferenceRepository(ApplicationContext context) : base(context) { }

        public IReadOnlyList<string> GetPreferencesByUserId(string userId)
        {
            return Get(p => p.UserId==userId)
                .Select(p => p.PreferencedBeerType)
                .ToList();
        }
    }
}
