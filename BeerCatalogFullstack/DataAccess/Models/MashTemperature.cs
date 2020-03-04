using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

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

        public virtual Brew Brew { get; set; }
    }
}
