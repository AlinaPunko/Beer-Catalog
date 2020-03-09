using System;

namespace BeerCatalogFullstack.ViewModels
{
    public class UserViewModel
    {
        public string Id { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public string Photo { get; set; }
        public DateTime? Birthdate { get; set; }
    }
}
