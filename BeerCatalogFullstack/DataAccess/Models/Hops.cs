using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace DataAccess.Models
{
    [Table(nameof(Hops))]
    public class Hops
    {
        public int Id { get; set; }
        public int BeerId { get; set; }
        public string Name { get; set; }
        public double AmountValue { get; set; }
        public string AmountUnit { get; set; }
        public string Add { get; set; }
        public string Attribute { get; set; }

        public virtual ICollection<BrewToHops> BrewToHops { get; set; }
    }
}
