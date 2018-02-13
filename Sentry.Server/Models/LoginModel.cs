using Newtonsoft.Json;

namespace Sentry.Server.Models
{
    public class LoginModel
    {
        public string email { get; set; }

        public string password { get; set; }
    }
}
