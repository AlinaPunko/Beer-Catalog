using DataAccess.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;

namespace DataAccess.Core
{
    public sealed class ApplicationContext : IdentityDbContext<User>
    {
        public DbSet<Beer> Beers { get; set; }
        public DbSet<Brew> Brews { get; set; }
        public DbSet<Fermentation> Fermentations { get; set; }
        public DbSet<Yeast> Yeasts { get; set; }
        public DbSet<Hops> Hops { get; set; }
        public DbSet<Malt> Malts { get; set; }
        public DbSet<MashTemperature> MashTemperatures { get; set; }
        public  DbSet<Comment> Comments { get; set; }
        public DbSet<Photo> Photos { get; set; }

        public ApplicationContext(DbContextOptions options) : base(options)
        {
            //if (!Database.CanConnect())
            //{
            //    Database.Migrate();
            //}
        }

        private IDbContextTransaction transaction;

        public void BeginTransaction()
        {
            transaction = Database.BeginTransaction();
        }

        public void Commit()
        {
            try
            {
                SaveChanges();
                transaction.Commit();
            }
            finally
            {
                transaction.Dispose();
            }
        }

        public void Rollback()
        {
            transaction.Rollback();
            transaction.Dispose();
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<FavoriteBeer>()
                .HasKey(t => new {t.UserId, t.BeerId});

            builder.Entity<UserPreference>()
                .HasKey(p => new {p.UserId, p.PreferencedBeerType});

            builder.Entity<FavoriteBeer>()
                .HasOne(b => b.Beer)
                .WithMany(f => f.FavoriteBeers)
                .HasForeignKey(b => b.BeerId);

            builder.Entity<FavoriteBeer>()
                .HasOne(u => u.User)
                .WithMany(f => f.FavoriteBeers)
                .HasForeignKey(u => u.UserId);

            builder.Entity<Yeast>()
                .HasMany(a => a.Brews)
                .WithOne(b => b.Yeast);

            builder.Entity<Fermentation>()
                .HasMany(a => a.Brews)
                .WithOne(b => b.Fermentation);

            builder.Entity<BrewMalt>()
                .HasKey(b => new { b.BrewId, b.MaltId });

            builder.Entity<BrewMalt>()
                .HasOne(b => b.Malt)
                .WithMany(b => b.BrewMalts)
                .HasForeignKey(b => b.MaltId);

            builder.Entity<BrewMalt>()
                .HasOne(b => b.Brew)
                .WithMany(b => b.BrewMalts)
                .HasForeignKey(u => u.BrewId);

            builder.Entity<BrewHops>()
                .HasKey(b => new { b.BrewId, b.HopsId });

            builder.Entity<BrewHops>()
                .HasOne(b => b.Hops)
                .WithMany(b => b.BrewHops)
                .HasForeignKey(b => b.HopsId);

            builder.Entity<BrewHops>()
                .HasOne(b => b.Brew)
                .WithMany(b => b.BrewHops)
                .HasForeignKey(u => u.BrewId);

            builder.Entity<BrewMashTemperature>()
                .HasKey(b => new { b.BrewId, b.MashTemperatureId });

            builder.Entity<BrewMashTemperature>()
                .HasOne(b => b.MashTemperature)
                .WithMany(b => b.BrewMashTemperatures)
                .HasForeignKey(b => b.MashTemperatureId);

            builder.Entity<BrewMashTemperature>()
                .HasOne(b => b.Brew)
                .WithMany(b => b.BrewMashTemperatures)
                .HasForeignKey(u => u.BrewId);
        }
    }
}
