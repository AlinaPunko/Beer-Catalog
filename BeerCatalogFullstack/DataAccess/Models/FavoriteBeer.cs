using System.ComponentModel.DataAnnotations.Schema;

namespace DataAccess.Models
{
    [Table(nameof(FavoriteBeer))]
    public class FavoriteBeer
    {
        public int BeerId { get; set; }
        public string UserId { get; set; }

        public virtual User User { get; set; }
        public virtual Beer Beer { get; set; }
    }
}
