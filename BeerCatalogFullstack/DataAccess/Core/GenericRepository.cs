using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;

namespace DataAccess.Core
{
    public class GenericRepository<TEntity> : IGenericRepository<TEntity> where TEntity : class
    {
        protected ApplicationContext Context;
        protected DbSet<TEntity> DbSet;

        public GenericRepository(ApplicationContext context)
        {
            Context = context;
            DbSet = context.Set<TEntity>();
        }

        protected IQueryable<TEntity> Get(Func<TEntity, bool> predicate = null)
        {
            return predicate == null ? DbSet.AsQueryable() : DbSet.Where(predicate).AsQueryable();
        }

        public TEntity GetById(int id)
        {
            return DbSet.Find(id);
        }

        public void Add(TEntity item)
        {
            try
            {
                Context.BeginTransaction();
                DbSet.Add(item);
                Context.Commit();
            }
            catch (Exception)
            {
                Context.Rollback();
            }
        }

        public void Update(TEntity item)
        {
            try
            {
                Context.BeginTransaction();
                Context.Entry(item).State = EntityState.Modified;
                Context.Commit();
            }
            catch (Exception)
            {
                Context.Rollback();
            }
        }

        public void Remove(TEntity item)
        {
            try
            {
                Context.BeginTransaction();
                DbSet.Remove(item);
                Context.Commit();
            }
            catch (Exception)
            {
                Context.Rollback();
            }
        }
    }
}
