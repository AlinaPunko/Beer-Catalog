using System.Collections.Generic;
using System.Linq;
using DataAccess.Core;
using DataAccess.Models;

namespace DataAccess.Repositories
{
    public class CommentRepository : GenericRepository<Comment>
    {
        public CommentRepository(ApplicationContext context) : base(context) { }

        public IReadOnlyList<Comment> GetAll()
        {
            return Get()
                .ToList();
        }
    }
}
