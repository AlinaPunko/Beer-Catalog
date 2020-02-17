namespace DataAccess.Models
{
    public class FavouriteBeer
    {
        public int BeerId { get; set; }
        public Beer Beer { get; set; }

        public string UserId { get; set; } 
        public User User { get; set; }
    }
}
