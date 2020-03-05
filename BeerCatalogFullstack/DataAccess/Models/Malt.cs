using System.ComponentModel.DataAnnotations.Schema;

namespace DataAccess.Models
{
    [Table("Malt")]
    public class Malt
    {
        public int Id { get; set; }
        public int BeerId { get; set; }
        public string Name { get; set; }
        public double AmountValue { get; set; }
        public string AmountUnit { get; set; }

        public virtual Brew Brew { get; set; }
    }
}
