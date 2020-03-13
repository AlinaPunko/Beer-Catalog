﻿namespace DataAccess.Models
{
    public class BrewHops
    {
        public int BrewId { get; set; }
        public int HopsId { get; set; }

        public virtual Brew Brew { get; set; }
        public virtual Hops Hops { get; set; }
    }
}