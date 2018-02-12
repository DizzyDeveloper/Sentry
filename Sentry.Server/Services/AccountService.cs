using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Sentry.Server.Domain;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;

namespace Sentry.Server.Services
{
    public class AccountService : IAccountService
    {
        private readonly SentryContext mSentryContext;
        private readonly IConfiguration mConfiguration;

        public AccountService(SentryContext sentryContext, IConfiguration configuration)
        {
            mSentryContext = sentryContext;
            mConfiguration = configuration;
        }

        public JwtSecurityToken Authenticate(string email, string password)
        {
            if (string.IsNullOrWhiteSpace(email) || string.IsNullOrWhiteSpace(password))
                return null;

            var user = mSentryContext
                .Users
                .FirstOrDefault(p => p.Email == email);

            if (user == null)
                return null;
                      
            var claims = new[]
            {
                new Claim("uid", "500FC7B0-D6A5-44DF-83BD-BC2B42A3FCC1")
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(mConfiguration["Authentication:SecurityKey"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            return new JwtSecurityToken(
                issuer: "yourdomain.com",
                audience: "yourdomain.com",
                claims: claims,
                expires: DateTime.Now.AddMinutes(30),
                signingCredentials: creds);               
        }                
    }
}
