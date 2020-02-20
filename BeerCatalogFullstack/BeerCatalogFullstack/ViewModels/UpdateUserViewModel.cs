using System;
using System.ComponentModel.DataAnnotations;

namespace BeerCatalogFullstack.ViewModels
{
    public class UpdateUserViewModel
    {
        [Required]
        [Display(Name = "Id")]
        public string Id { get; set; }

        [Required]
        [Display(Name = "Email")]
        public string Email { get; set; }

        [Required]
        [Display(Name = "Name")]
        public string Name { get; set; }

        public string PasswordConfirm { get; set; }

        [Display(Name = "Photo")]
        public string Photo { get; set; }

        [Display(Name = "Birthdate")]
        public DateTime? Birthdate { get; set; }
    }
}
