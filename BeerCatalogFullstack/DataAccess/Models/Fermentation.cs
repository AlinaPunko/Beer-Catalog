using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

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
