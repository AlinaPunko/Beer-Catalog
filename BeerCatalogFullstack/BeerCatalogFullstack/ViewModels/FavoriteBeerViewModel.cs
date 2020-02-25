using System.ComponentModel.DataAnnotations;

namespace BeerCatalogFullstack.ViewModels
{
    public class FavoriteBeerViewModel
    {
        [Required]
        public string UserId { get; set; }

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
