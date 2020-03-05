using System.ComponentModel.DataAnnotations.Schema;

namespace DataAccess.Models
{
    [Table("Photo")]
    public class Photo
    {
        public int Id { get; set; }
        public int BrewId { get; set; }
        public string EncodedPhoto { get; set; }

        public virtual Brew Brew { get; set; }
    }
}
