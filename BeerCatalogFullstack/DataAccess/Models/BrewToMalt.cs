﻿namespace DataAccess.Models
{
    public class BrewToMalt
    {
        public int BrewId { get; set; }
        public int MaltId { get; set; }

        public virtual Brew Brew { get; set; }
        public virtual Malt Malt { get; set; }
    }
}