using System;
using System.Collections.Generic;

namespace BeerCatalogFullstack.ViewModels
{
    public class BrewViewModel
    {
        public int Id { get; set; }
        public int BeerId { get; set; }
        public string UserId { get; set; }
        public string Tagline { get; set; }
        public string ImageUrl { get; set; }
        public DateTime DateTime { get; set; }
        public string Location { get; set; }
        public string Name { get; set; }
        public string Impression { get; set; }
        public int Rating { get; set; }
        public string BeerType { get; set; }
        public string[] Photos { get; set; }

        public List<MaltViewModel> Malt { get; set; }
        public List<HopsViewModel> Hops { get; set; }
        public List<MashTemperatureViewModel> MashTemperatures { get; set; }
        public FermentationViewModel Fermentation { get; set; }
        public YeastViewModel Yeast { get; set; }
    }
}
