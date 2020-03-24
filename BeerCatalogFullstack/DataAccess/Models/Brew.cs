using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace DataAccess.Models
{
    [Table(nameof(Brew))]
    public class Brew
    {
        public int Id { get; set; }
        public int BeerId { get; set; }
        public string UserId { get; set; }
        public DateTime DateTime { get; set; }
        public string Location { get; set; }
        public string Name { get; set; }
        public int FermentationId { get; set; }
        public int YeastId { get; set; }
        public string Impression { get; set; }
        public int Rating { get; set; }
        public string BeerType { get; set; }

        public virtual ICollection<Photo> Photos { get; set; }
        public virtual ICollection<Comment> Comments { get; set; }
        public virtual ICollection<BrewToHops> BrewToHops { get; set; }
        public virtual ICollection<BrewToMalt> BrewToMalts { get; set; }
        public virtual ICollection<Rate> Rates { get; set; }
        public virtual ICollection<BrewToMashTemperature> BrewToMashTemperatures { get; set; }
        public virtual Fermentation Fermentation { get; set; }
        public virtual Yeast Yeast { get; set; }
        public virtual Beer Beer { get; set; }
    }
}
