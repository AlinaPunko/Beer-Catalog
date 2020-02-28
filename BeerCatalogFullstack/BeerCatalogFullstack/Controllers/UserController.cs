using System;
using System.Threading.Tasks;
using BeerCatalogFullstack.Managers;
using BeerCatalogFullstack.ViewModels;
using DataAccess.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace BeerCatalogFullstack.Controllers
{
    public class UserController : Controller
    {
        private readonly UserManager manager;

        public UserController(UserManager<User> userManager)
        {
            manager = new UserManager(userManager);
        }

        [HttpGet]
        public JsonResult Get(string id)
        {
            User user = manager.GetUserById(id);

            return user == null ? Json(new ArgumentException("Incorrect user")) : Json(user);
        }

        [HttpPut]
        public async Task<IActionResult> Update([FromBody]UpdateUserViewModel model)
        {
            await manager.UpdateUserAsync(model);
            return Ok();
        }
    }
}