using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccess.Models
{
    public class Beer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Tagline { get; set; }
        public string ImageUrl { get; set; }

        public List<FavouriteBeer> FavouriteBeers { get; set; }
    }
}
