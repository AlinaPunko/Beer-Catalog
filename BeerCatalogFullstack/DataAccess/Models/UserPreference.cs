using System.ComponentModel.DataAnnotations.Schema;

namespace DataAccess.Models
{
    [Table("UserPreference")]
    public class UserPreference
    {
        public string UserId { get; set; }
        public string PreferencedBeerType { get; set; }

        public virtual User User { get; set; }
    }
}
