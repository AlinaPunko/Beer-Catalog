using System.Threading.Tasks;
using BeerCatalogFullstack.ViewModels;
using DataAccess.Models;
using DataAccess.Repositories;

namespace BeerCatalogFullstack.Managers
{
    public class LoginManager
    {
        private readonly LoginRepository loginRepository;
        private readonly RegisterRepository registerRepository;

        public LoginManager(RegisterRepository registerRepository, LoginRepository loginRepository)
        {
            this.registerRepository = registerRepository;
            this.loginRepository = loginRepository;
        }

        public async Task<string> Register(RegisterViewModel model)
        {
            var user = new User()
            {
                Email = model.Email,
                Name = model.Name,
                UserName = model.Email,
                Birthdate = model.Birthdate,
                Photo = model.Photo
            };

            return await registerRepository.Register(user, model.Password);
        }

        public async Task<string> Login(LoginViewModel model)
        {
            var user = new User()
            {
                Email = model.Email
            };

            return await loginRepository.Login(user, model.Password);
        }

        public void SignOut()
        {
            loginRepository.SignOut();
        }
    }
}
