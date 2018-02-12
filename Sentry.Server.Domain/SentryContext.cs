using Microsoft.EntityFrameworkCore;
using Sentry.Server.Domain.Entities;

namespace Sentry.Server.Domain
{
    public class SentryContext : DbContext
    {
        public SentryContext(DbContextOptions<SentryContext> options)
            : base(options)
        { }

        public DbSet<User> Users { get; set; }
    }
}
