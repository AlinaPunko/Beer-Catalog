using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using DataAccess.Core;
using DataAccess.Models;

namespace DataAccess.Repositories
{
    class CommentsRepository : GenericRepository<Comment>
    {
        public CommentsRepository(ApplicationContext context) : base(context) { }

        public IReadOnlyList<Comment> GetAll()
        {
            return Get()
                .ToList();
        }
    }
}
