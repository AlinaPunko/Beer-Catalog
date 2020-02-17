using DataAccess.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Core
{
    public sealed class ApplicationContext : IdentityDbContext<User>
    {
        public DbSet<Beer> Beers { get; set; }
        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
        {
            //if (!Database.CanConnect())
            //{
            //    Database.Migrate();
            //}
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<FavouriteBeer>()
                .HasKey(t => new {t.UserId, t.BeerId});

            builder.Entity<FavouriteBeer>()
                .HasOne(b => b.Beer)
                .WithMany(f => f.FavouriteBeers)
                .HasForeignKey(b => b.BeerId);

            builder.Entity<FavouriteBeer>()
                .HasOne(u => u.User)
                .WithMany(f => f.FavouriteBeers)
                .HasForeignKey(u => u.UserId);
        }
    }
}
