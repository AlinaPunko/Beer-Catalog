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
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Photo> Photos { get; set; }
        public DbSet<Rate> Rates { get; set; }

        public ApplicationContext(DbContextOptions options) : base(options)
        {
            if (!Database.CanConnect())
            {
                Database.Migrate();
            }
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

            builder.Entity<BrewToMalt>()
                .HasKey(b => new { b.BrewId, b.MaltId });

            builder.Entity<BrewToMalt>()
                .HasOne(b => b.Malt)
                .WithMany(b => b.BrewToMalts)
                .HasForeignKey(b => b.MaltId);

            builder.Entity<BrewToMalt>()
                .HasOne(b => b.Brew)
                .WithMany(b => b.BrewToMalts)
                .HasForeignKey(u => u.BrewId);

            builder.Entity<BrewToHops>()
                .HasKey(b => new { b.BrewId, b.HopsId });

            builder.Entity<BrewToHops>()
                .HasOne(b => b.Hops)
                .WithMany(b => b.BrewToHops)
                .HasForeignKey(b => b.HopsId);

            builder.Entity<BrewToHops>()
                .HasOne(b => b.Brew)
                .WithMany(b => b.BrewToHops)
                .HasForeignKey(u => u.BrewId);

            builder.Entity<BrewToMashTemperature>()
                .HasKey(b => new { b.BrewId, b.MashTemperatureId });

            builder.Entity<BrewToMashTemperature>()
                .HasOne(b => b.MashTemperature)
                .WithMany(b => b.BrewToMashTemperatures)
                .HasForeignKey(b => b.MashTemperatureId);

            builder.Entity<BrewToMashTemperature>()
                .HasOne(b => b.Brew)
                .WithMany(b => b.BrewToMashTemperatures)
                .HasForeignKey(u => u.BrewId);
        }
    }
}
