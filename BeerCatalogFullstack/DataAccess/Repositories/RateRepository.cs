using System;
using System.Collections.Generic;
using System.Linq;
using DataAccess.Core;
using DataAccess.Models;

namespace DataAccess.Repositories
{
    public class RateRepository : GenericRepository<Rate>
    {
        public RateRepository(ApplicationContext context) : base(context) { }
        public IReadOnlyList<Rate> GetAll()
        {
            return Get()
                .ToList();
        }

        public int GetSumUserBrewRates(string userId, int brewId)
        {
            return Get(r => r.UserId == userId && r.BrewId == brewId).Sum(r => r.Value);
        }
    }
}