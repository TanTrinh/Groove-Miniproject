using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Infrastructures;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace GoGoApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get;}

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            var defaultConnectionString = "Server=(localdb)\\mssqllocaldb;Database=GoGo;Trusted_Connection=True;ConnectRetryCount=0";

            services.AddMvc();
            services.AddAutoMapper(typeof(Domains.AssemplyMarker));

            services.AddDbContext<ApplicationDbContext>(options =>
            {
                options.UseSqlServer(defaultConnectionString, sqlServerOptions =>
                {
                    sqlServerOptions.EnableRetryOnFailure();
                });
            });

            services.AddUnitOfWork<ApplicationDbContext>();

            var autofactServiceProvider = services.BuildAutofactServiceProvider(options =>
            {
                // Register services,...
                options.AddAsImplementedInterfaces(typeof(Domains.AssemplyMarker));
                // Register repositories
                options.AddAsImplementedInterfaces(typeof(Infrastructures.AssemplyMarker));
            });

            return autofactServiceProvider;
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseMvc();
        }
    }
}
