using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using BeerCatalogFullstack.Managers;
using BeerCatalogFullstack.ViewModels;
using DataAccess.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace BeerCatalogFullstack.Controllers
{
    public class UserController : Controller
    {
        private readonly UserManager manager;

        public UserController(UserManager userManager)
        {
            manager = userManager;
        }

        public JsonResult Get(string userId)
        {
            UserViewModel user = manager.GetUserById(userId);

            return user == null ? Json(new ArgumentException("Incorrect user")) : Json(user);
        }

        [HttpPut]
        public async Task<IActionResult> Update([FromBody]UpdateUserViewModel model)
        {
            await manager.UpdateUserAsync(model);
            return Ok();
        }

        public IActionResult GetPreferedBrews(string userId)
        {
            IReadOnlyList<BrewViewModel> brews = manager.GetPreferedBrews(userId);
            return Json(brews);
        }
    }
}