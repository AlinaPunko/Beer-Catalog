namespace BeerCatalogFullstack.ViewModels
{
    public class MashTemperatureViewModel
    {
        public int? Id { get; set; }
        public int BeerId { get; set; }
        public int TemperatureValue { get; set; }
        public string TemperatureUnit { get; set; }
        public int Duration { get; set; }
    }
}
