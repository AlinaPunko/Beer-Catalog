namespace DataAccess.Models
{
    public class Rate
    {
        public int Id { get; set; }
        public int BrewId { get; set; }
        public string UserId { get; set; }
        public int Value { get; set; }

        public virtual User User { get; set; }
        public virtual Beer Beer { get; set; }
    }
}
