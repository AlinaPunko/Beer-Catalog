using DataAccess.Models;
using DataAccess.Repositories;
using Microsoft.AspNetCore.SignalR;

namespace BeerCatalogFullstack.Hubs
{
    public class CommentsHub : Hub
    {
        private readonly CommentRepository repository;

        public CommentsHub(CommentRepository repository)
        {
            this.repository = repository;
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

            Clients.All.SendAsync("addComment", comment.Id, brewId, comment.User.Name, comment.User.Photo, text);
        }
    }
}
