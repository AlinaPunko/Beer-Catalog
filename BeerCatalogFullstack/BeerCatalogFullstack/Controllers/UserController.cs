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
        public IActionResult GetUser(string id)
        {
            User user = manager.GetUserById(id);

            return user == null ? Json(new { error = "Incorrect id" }) : Json(user);
        }

        [HttpPut]
        [Route("account/profile")]
        public IActionResult UpdateUser([FromBody]UpdateUserViewModel model)
        {
            return Json(manager.UpdateUser(model));
        }
    }
}