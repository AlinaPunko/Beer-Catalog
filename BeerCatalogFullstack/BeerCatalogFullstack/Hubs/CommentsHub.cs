using DataAccess.Models;
using DataAccess.Repositories;
using Microsoft.AspNetCore.SignalR;

namespace BeerCatalogFullstack.Hubs
{
    public class CommentsHub : Hub
    {
        private readonly CommentRepository repository;
        private readonly UserRepository userRepository;
        public CommentsHub(CommentRepository repository, UserRepository userRepository)
        {
            this.repository = repository;
            this.userRepository = userRepository;
        }

        public void AddComment(int brewId, string userId, string text)
        {
            var comment = new Comment
            {
                BrewId = brewId,
                UserId = userId,
                Text = text
            };

            repository.Add(comment);
            Comment newComment = repository.GetCommentByUserBrewText(comment.BrewId, comment.UserId, comment.Text);

            Clients.All.SendAsync("addComment",newComment.Id, brewId, newComment.User.Name, newComment.User.Photo, text);
        }
    }
}
