using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace DataAccess.Models
{
    public class User : IdentityUser
    {
        [Required]
        public string Name { get; set; }
        public DateTime? Birthdate { get; set; }
        public byte[] Photo { get; set; }
    }
}
