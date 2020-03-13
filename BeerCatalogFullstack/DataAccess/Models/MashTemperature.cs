using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace DataAccess.Models
{
    [Table("MashTemperature")]
    public class MashTemperature
    {
        public int Id { get; set; }
        public int BeerId { get; set; }
        public int TemperatureValue { get; set; }
        public string TemperatureUnit { get; set; }
        public int Duration { get; set; }

        public virtual ICollection<BrewMashTemperature> BrewMashTemperatures { get; set; }
    }
}
