using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace DataAccess.Models
{
    [Table("Yeast")]
    public class Yeast
    {
        public int Id { get; set; }
        public int BrewId { get; set; }
        public int BeerId { get; set; }
        public string Name { get; set; }

        public virtual Brew Brew { get; set; }
    }
}
