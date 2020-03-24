using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;

namespace DataAccess.Models
{
    [Table(nameof(User))]
    public class User : IdentityUser
    {
        public string Name { get; set; }
        public DateTime? Birthdate { get; set; }
        public string Photo { get; set; }

        public virtual ICollection<FavoriteBeer> FavoriteBeers { get; set; }

        public virtual ICollection<Brew> Brews { get; set; }

        public virtual ICollection<Rate> Rates { get; set; }

        public virtual ICollection<Comment> Comments { get; set; }

        public virtual ICollection<UserPreference> Preferences { get; set; }

        public User() { }
    }
}
