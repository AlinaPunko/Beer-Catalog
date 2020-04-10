using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DataAccess.Models
{
    [Table("Beer")]
    public class Beer
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.None)]
        [Required]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Tagline { get; set; }
        public string ImageUrl { get; set; }

        public virtual List<FavoriteBeer> FavoriteBeers { get; set; }
        public virtual List<Brew> Brews { get; set; }
    }
}
