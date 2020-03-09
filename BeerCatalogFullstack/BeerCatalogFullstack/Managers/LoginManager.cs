using System.Threading.Tasks;
using BeerCatalogFullstack.ViewModels;
using DataAccess.Models;
using DataAccess.Repositories;
using DataAccess.ViewModels;

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

        public async Task<string> Register(RegisterViewModel viewModel)
        {
            UserViewModel model = new UserViewModel
            {
                Email = viewModel.Email,
                Name = viewModel.Name,
                Birthdate = viewModel.Birthdate,
                Photo = viewModel.Photo
            };

            return await registerRepository.Register(model, viewModel.Password);
        }

        public async Task<string> Login(LoginViewModel model)
        {
            return await loginRepository.Login(model.Email, model.Password);
        }

        public void SignOut()
        {
            loginRepository.SignOut();
        }
    }
}
