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

        public IReadOnlyList<Comment> GetBrewComments(int brewId)
        {
            return Get(b => b.BrewId == brewId)
                .ToList();
        }

        public Comment GetCommentByUserBrewText(int brewId, string userId, string text)
        {
            return Get(c => c.Text == text && c.BrewId == brewId && c.UserId == userId)
                .First();
        }
    }
}
