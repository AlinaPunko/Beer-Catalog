using System;
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
        [Route("account/profile")]
        public JsonResult GetUser(string id)
        {
            User user = manager.GetUserById(id);

            return user == null ? Json(new ArgumentException("Incorrect user")) : Json(user);
        }

        [HttpPut]
        [Route("account/profile")]
        public IActionResult UpdateUser([FromBody]UpdateUserViewModel model)
        {
           manager.UpdateUserAsync(model);
           return Ok();
        }
    }
}