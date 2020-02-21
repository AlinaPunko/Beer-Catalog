using DataAccess.Models;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Core
{
    public interface IDataContext
    {
        DbSet<Beer> Beers { get; set; }

        void BeginTransaction();
        void Commit();
        void Rollback();
    }
}