﻿using System;

namespace BeerCatalogFullstack.ViewModels
{
    public class RegisterViewModel
    {
        public string Email { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public string Photo { get; set; }
        public DateTime? Birthdate { get; set; }
    }
}
