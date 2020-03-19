using BeerCatalogFullstack.Managers;
using BeerCatalogFullstack.Middleware;
using DataAccess.Core;
using DataAccess.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Configuration;
using DataAccess.Repositories;
using Newtonsoft.Json;
using System;
using System.Net.WebSockets;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using System.Threading;
using BeerCatalogFullstack.Hubs;

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
            services.AddCors(o => o.AddPolicy("CorsPolicy", builder =>
            {
                builder
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .WithOrigins("http://localhost:44376");
            }));
            services.AddSignalR();
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
            services.AddTransient<BrewManager>();
            services.AddTransient<UserManager>();
            services.AddTransient<YeastManager>();
            services.AddTransient<FermentationManager>();
            services.AddTransient<MaltManager>();
            services.AddTransient<MashTemperatureManager>();
            services.AddTransient<HopsManager>();

            services.AddTransient<RegisterRepository>();
            services.AddTransient<BeerRepository>();
            services.AddTransient<BrewRepository>();
            services.AddTransient<FavoriteBeerRepository>();
            services.AddTransient<LoginRepository>();
            services.AddTransient<UserRepository>();
            services.AddTransient<RateRepository>();
            services.AddTransient<PreferenceRepository>();
            services.AddTransient<MaltRepository>();
            services.AddTransient<HopsRepository>();
            services.AddTransient<MashTemperatureRepository>();
            services.AddTransient<YeastRepository>();
            services.AddTransient<FermentationRepository>();
            services.AddTransient<PhotoRepository>();
            services.AddTransient<BrewHopsRepository>();
            services.AddTransient<CommentsHub>();
            services.AddTransient<CommentRepository>();
            services.AddTransient<BrewMashTemperatureRepository>();
            services.AddTransient<BrewMaltRepository>();

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

            app.UseCors("CorsPolicy");
            app.UseSignalR(routes =>
            {
                routes.MapHub<CommentsHub>("/commentsHub");
            });

            app.UseMvc(routes =>
            {
                routes.MapRoute("default", "{controller=Home}/{action=Index}/{id?}");
                routes.MapSpaFallbackRoute("spa-fallback", new { controller = "Home", action = "Index" });
            });
        }     
    }
    
}
