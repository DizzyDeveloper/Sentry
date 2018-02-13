using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Sentry.Server.Domain;
using Sentry.Server.Domain.Entities;
using Sentry.Server.Models.User;
using Sodium;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace Sentry.Server.Services
{
    public class AccountService : IAccountService
    {
        private static readonly RandomNumberGenerator Rng = RandomNumberGenerator.Create();
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

            if (PasswordHash.ArgonHashStringVerify(user.PasswordHash, password))
            {
                var claims = new[]
                {
                    new Claim("uid", user.UserIdentifier.ToString())
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

            return null;
        }

        public bool Register(RegistrationModel registrationModel)
        {
            try
            {
                if (mSentryContext.Users.Any(p => p.Email == registrationModel.Email))
                    return false;

                var passwordHash = PasswordHash.ArgonHashString(registrationModel.Password);

                var user = new User
                {
                    FirstName = registrationModel.FirstName.Trim(),
                    MiddleName = (registrationModel.MiddleName ?? string.Empty).Trim(),
                    LastName = registrationModel.LastName.Trim(),
                    Email = registrationModel.Email.Trim(),
                    PasswordHash = passwordHash,
                    DateOfBirth = registrationModel.DateOfBirth
                };

                return true;

            }
            catch (Exception)
            {
                return false;
            }
        }
    }
}
