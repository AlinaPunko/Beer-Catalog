namespace BeerCatalogFullstack.ViewModels
{
    public class RateViewModel
    {
        public int? Id { get; set; }
        public int BrewId { get; set; }
        public string UserId { get; set; }
        public int Value { get; set; }
    }
}
