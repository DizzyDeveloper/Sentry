using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Sentry.Server.Models;
using Sentry.Server.Services;
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
        private readonly IAccountService mAccountService;

        public AccountController(IAccountService accountService)
        {
            mAccountService = accountService;
        }

        [HttpPost]
        [Route("[action]")]        
        public IActionResult Login([FromBody] LoginModel model)
        {
            var token = mAccountService.Authenticate(model.Email, model.Password);

            if(token == null)
                return Unauthorized();

            return Ok(new
            {
                token = new JwtSecurityTokenHandler().WriteToken(token)
            });      
        }        
    }
}
