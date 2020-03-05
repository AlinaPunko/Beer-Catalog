namespace DataAccess.Core
{
    public interface IDataContext
    {
        void BeginTransaction();
        void Commit();
        void Rollback();
    }
}