using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace DataAccess.Models
{
    public class User : IdentityUser
    {
        [Required]
        public string Name { get; set; }
        public DateTime? Birthdate { get; set; }
        public string Photo { get; set; }

        public List<FavouriteBeer> FavouriteBeers { get; set; }
    }
}
