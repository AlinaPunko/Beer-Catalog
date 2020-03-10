using System;
using System.Threading.Tasks;
using BeerCatalogFullstack.Managers;
using BeerCatalogFullstack.ViewModels;
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
    }
}