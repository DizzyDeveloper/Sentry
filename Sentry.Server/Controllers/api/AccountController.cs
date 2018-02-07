using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Sentry.Server.Controllers.api
{
    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        [Route("")]
        [HttpGet]
        public IActionResult Get()
        {
            return new JsonResult ("Hello World");
            //return Ok();
        }
    }
}
