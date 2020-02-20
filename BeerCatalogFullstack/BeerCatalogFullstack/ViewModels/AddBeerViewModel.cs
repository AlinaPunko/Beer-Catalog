using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BeerCatalogFullstack.ViewModels
{
    public class AddBeerViewModel
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Tagline { get; set; }

        [Required]
        public string ImageUrl { get; set; }
    }
}
