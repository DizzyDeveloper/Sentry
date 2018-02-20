namespace Sentry.Server.Domain.Entities
{
    public class ProjectUser
    {
        public Project Project { get; set; }

        public long ProjectId { get; set; }

        public User User { get; set; }

        public long UserId { get; set; }
    }
}
