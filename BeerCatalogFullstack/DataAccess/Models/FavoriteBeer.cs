namespace DataAccess.Models
{
    public class FavoriteBeer
    {
        public int BeerId { get; set; }
        public string UserId { get; set; }

        public virtual User User { get; set; }
        public virtual Beer Beer { get; set; }
    }
}
