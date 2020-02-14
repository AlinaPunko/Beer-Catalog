using System;
using Microsoft.AspNetCore.Identity;

namespace DataAccess.Models
{
    public class User : IdentityUser
    {
        private string Name { get; set; }
        private DateTime Birthdate { get; set; }
        private byte[] Photo { get; set; }
    }
}
