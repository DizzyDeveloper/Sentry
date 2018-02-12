using System.IdentityModel.Tokens.Jwt;

namespace Sentry.Server.Services
{
    public interface IAccountService
    {
        JwtSecurityToken Authenticate(string email, string password);
    }
}
