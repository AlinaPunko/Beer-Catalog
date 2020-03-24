using System.ComponentModel.DataAnnotations.Schema;

namespace DataAccess.Models
{
    [Table(nameof(Comment))]
    public class Comment
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public string UserId { get; set; }
        public int BrewId { get; set; }

        public virtual Brew Brew { get; set; }
        public virtual User User { get; set; }
    }
}
