namespace DataAccess.Models
{
    public class BrewMashTemperature
    {
        public int BrewId { get; set; }
        public int MashTemperatureId { get; set; }

        public virtual Brew Brew { get; set; }
        public virtual MashTemperature MashTemperature { get; set; }
    }
}