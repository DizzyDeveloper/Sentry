namespace Sentry.Server.Services
{
    public interface IAccountService
    {
        string Authenticate(string email, string password);
    }
}
