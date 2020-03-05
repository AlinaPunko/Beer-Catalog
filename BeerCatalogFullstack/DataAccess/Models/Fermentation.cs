using System.ComponentModel.DataAnnotations.Schema;

namespace DataAccess.Models
{
    [Table("Fermentation")]
    public class Fermentation
    { 
        public int Id { get; set; }
        public int BrewId { get; set; }
        public int TemperatureValue { get; set; }
        public string TemperatureUnit { get; set; }

        public virtual Brew Brew { get; set; }
    }
}
