using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Sentry.Server.Models;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Sentry.Server.Controllers.api
{
    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        [HttpPost]
        [Route("[action]")]        
        public IActionResult Login([FromBody] LoginModel model)
        {
            if(model.email == "email@address.com" && model.password == "password1")
            {
                var claims = new[]
                {
                    new Claim("uid", "500FC7B0-D6A5-44DF-83BD-BC2B42A3FCC1")
                };

                var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("478FB2C1-DCE1-4F69-8BC0-422D40BD3A66-EA19F0C7-8604-4A71-B398-2281714628C7"));
                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                var token = new JwtSecurityToken(
                    issuer: "yourdomain.com",
                    audience: "yourdomain.com",
                    claims: claims,
                    expires: DateTime.Now.AddMinutes(30),
                    signingCredentials: creds);

                  return Ok(new
        {
            token = new JwtSecurityTokenHandler().WriteToken(token)
        });

            }

            return Unauthorized();                     
        }
        
    }
}
