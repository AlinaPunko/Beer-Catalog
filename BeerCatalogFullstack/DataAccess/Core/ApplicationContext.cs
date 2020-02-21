﻿using DataAccess.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System.Configuration;
using System.Linq;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;

namespace DataAccess.Core
{
    public sealed class ApplicationContext : IdentityDbContext<User>, IDataContext
    {
        public DbSet<Beer> Beers { get; set; }
        public DbSet<Beer> FavoriteBeers { get; set; }

        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
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

            builder.Entity<FavoriteBeer>()
                .HasOne(b => b.Beer)
                .WithMany(f => f.FavoriteBeers)
                .HasForeignKey(b => b.BeerId);

            builder.Entity<FavoriteBeer>()
                .HasOne(u => u.User)
                .WithMany(f => f.FavoriteBeers)
                .HasForeignKey(u => u.UserId);
        }
    }
}
