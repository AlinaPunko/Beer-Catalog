using BeerCatalogFullstack.Managers;
using DataAccess.Core;
using DataAccess.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Configuration;
using BeerCatalogFullstack.Middleware;
using DataAccess.Repositories;
using Newtonsoft.Json;

namespace BeerCatalogFullstack
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<ApplicationContext>(options =>
                options.UseLazyLoadingProxies()
                    .UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

            services.AddIdentity<User, IdentityRole>()
                .AddEntityFrameworkStores<ApplicationContext>();

            AddDependencies(services);

            services.AddMvc(option => option.EnableEndpointRouting = false)
                .AddNewtonsoftJson(options =>
                {
                    options.SerializerSettings.ReferenceLoopHandling =
                        ReferenceLoopHandling.Ignore;
                });
        }

        private static void AddDependencies(IServiceCollection services)
        {
            services.AddTransient<LoginManager>();
            services.AddTransient<FavoriteBeerManager>();
            services.AddTransient<PreferenceManager>();
            services.AddTransient<UserManager>();
            services.AddTransient<RegisterRepository>();
            services.AddTransient<BeerRepository>();
            services.AddTransient<FavoriteBeerRepository>();
            services.AddTransient<LoginRepository>();
            services.AddTransient<UserRepository>();
            services.AddTransient<PreferenceRepository>();

            services.AddScoped<UserManager<User>>();
            services.AddScoped<SignInManager<User>>();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        { 
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseCustomExceptionMiddleware();
            }

            app.UseCustomExceptionMiddleware();
            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();
            app.UseAuthentication();

            app.UseMvc(routes =>
            {
                routes.MapRoute("default", "{controller=Home}/{action=Index}/{id?}");
                routes.MapSpaFallbackRoute("spa-fallback", new { controller = "Home", action = "Index" });
            });
        }
    }
}
