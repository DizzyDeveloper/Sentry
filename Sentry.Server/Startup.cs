using Autofac;
using Autofac.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Sentry.Server.Domain;
using Sentry.Server.Services;
using System;
using System.IO;

namespace Sentry.Server
{
    public class Startup
    {
        public static IConfiguration Configuration { get; private set; }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public IServiceProvider ConfigureServices(IServiceCollection services)
        {

            var configBuilder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json");

            Configuration = configBuilder.Build();

            services
                .AddMvcCore()
                .AddJsonFormatters();

            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });

            // Create the container builder.
            var builder = new ContainerBuilder();

            var connectionString = Configuration["ConnectionStrings:DefaultConnection"];
            services.AddDbContextPool<SentryContext>(options => options.UseSqlServer(Configuration["ConnectionStrings:DefaultConnection"], b => b.MigrationsAssembly("Sentry.Server")));

            builder.Populate(services);

            builder
                .RegisterInstance(Configuration)
                .As<IConfiguration>()
                .ExternallyOwned();

            builder
                .RegisterType<AccountService>()
                .As<IAccountService>();


            // Create the IServiceProvider based on the container.
            return new AutofacServiceProvider(builder.Build());
        }
        
        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "api/{controller}/{action}/{id?}");
            });

            app.UseSpa(spa => {
                 spa.Options.SourcePath = "../Sentry.Client";
                 if (env.IsDevelopment())
                 {
                     spa.UseAngularCliServer("start");
                 }
            });
        }
    }
}
