using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

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
