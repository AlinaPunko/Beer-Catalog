using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BeerCatalogFullstack.ViewModels
{
    public class CommentViewModel
    {
        public int? Id { get; set; }
        public string UserName { get; set; }
        public string UserPhoto { get; set; }
        public string Text { get; set; }
        public string UserId { get; set; }
        public int BrewId { get; set; }
    }
}
