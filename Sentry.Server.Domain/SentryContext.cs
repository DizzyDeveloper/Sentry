using Microsoft.EntityFrameworkCore;
using Sentry.Server.Domain.Entities;

namespace Sentry.Server.Domain
{
    public class SentryContext : DbContext
    {
        public SentryContext(DbContextOptions<SentryContext> options)
            : base(options)
        { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .HasAlternateKey(c => c.UserIdentifier);
        }

        public DbSet<User> Users { get; set; }
    }
}
