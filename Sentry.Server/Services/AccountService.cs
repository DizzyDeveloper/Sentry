using Sentry.Server.Domain;
using System.Linq;

namespace Sentry.Server.Services
{
    public class AccountService : IAccountService
    {
        private readonly SentryContext mSentryContext;

        public AccountService(SentryContext sentryContext)
        {
            mSentryContext = sentryContext;
        }

        public string Authenticate(string email, string password)
        {
            var user = mSentryContext
                .Users
                .FirstOrDefault(p => p.Email == email);

            return "token";
        }
    }
}
