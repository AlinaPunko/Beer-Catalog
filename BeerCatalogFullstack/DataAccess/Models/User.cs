using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;

namespace DataAccess.Models
{
    [Table("User")]
    public class User : IdentityUser
    {
        public string Name { get; set; }
        public DateTime? Birthdate { get; set; }
        public string Photo { get; set; }

        [JsonIgnore]
        public virtual List<FavoriteBeer> FavoriteBeers { get; set; }

        [JsonIgnore]
        public virtual List<Comment> Comments { get; set; }

        public User() { }
    }
}
