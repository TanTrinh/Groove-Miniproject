using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Domains.Identity.Entities;
using FluentValidation.AspNetCore;
using Groove.AspNetCore.Mvc;
using Infrastructures;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;

namespace GoGoApi
{
    public class Startup
    {

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

		// This method gets called by the runtime. Use this method to add services to the container.
		// For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
		public IServiceProvider ConfigureServices(IServiceCollection services)
		{
			var defaultConnectionString = Configuration.GetConnectionString("DefaultConnection");
	

			services.AddDbContext<ApplicationDbContext>(options =>
			{
				options.UseSqlServer(defaultConnectionString, sqlServerOptions =>
				{
					sqlServerOptions.EnableRetryOnFailure();
				});
			});

			services.AddGrooveMvcApi().AddFluentValidation(p => p.RegisterValidatorsFromAssemblyContaining<Domains.AssemplyMarker>().RegisterValidatorsFromAssemblyContaining<GoGoApi.Startup>());

			services.AddAutoMapper(typeof(Domains.AssemplyMarker));

			// Add UoW 
			services.AddUnitOfWork<ApplicationDbContext>();
					
			// ALL SERVICE REGISTERS SHOULD BE PLACED BEFORE THIS LINE
			// Register our custom service provider
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
            app.UseCors(builder =>
                   builder
                   .AllowAnyOrigin()
                   .AllowAnyMethod()
                   .AllowAnyHeader()
           );
            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseMvc();
        }
    }
}
