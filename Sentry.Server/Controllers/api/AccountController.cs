using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Sentry.Server.Models;
using Sentry.Server.Models.User;
using Sentry.Server.Services;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;

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
        [AllowAnonymous]
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

        [HttpPost]
        [AllowAnonymous]
        [Route("[action]")]
        public IActionResult Register([FromBody] RegistrationModel registrationModel)
        {
            if (mAccountService.Register(registrationModel))
            {
                return Ok();
            }

            return BadRequest();
        }

        [Authorize]
        [HttpGet]        
        [Route("[action]")]
        public IActionResult Profile()
        {
            var result = HttpContext.User.FindFirst("uid").Value;
            Guid guid;

            if (Guid.TryParse(result, out guid))
            {
                var profileInfo = mAccountService.Profile(guid);
                if (profileInfo != null) {
                    return Ok(profileInfo);                
                }
            }

            return NotFound();
           
        }

    }
}
