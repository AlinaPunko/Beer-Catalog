using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;

namespace BeerCatalogFullstack.ViewModels
{
    public class RegisterViewModel
    {
        [Required]
        [Display(Name = "Email")]
        public string Email { get; set; }

        [Required]
        [Display(Name = "Name")]
        public string Name { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password { get; set; }

        [Required]
        [Compare("Password", ErrorMessage = "Пароли не совпадают")]
        [DataType(DataType.Password)]
        [Display(Name = "Repeat password")]
        public string PasswordConfirm { get; set; }

        [Display(Name = "Photo")]
        public IFormFile Photo { get; set; }

        [Display(Name = "Birthdate")]
        public DateTime? Birthdate { get; set; }
    }
}
