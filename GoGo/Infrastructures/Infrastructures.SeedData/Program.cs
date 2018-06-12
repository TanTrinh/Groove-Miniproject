using Domains.Identity.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Threading.Tasks;

namespace Infrastructures.SeedData
{
    class Program
    {
		private static IServiceProvider _serviceProvider;

		static void Main(string[] args)
		{

			Console.WriteLine("Starting to seed data");

			_serviceProvider = ConfigureService(new ServiceCollection(), args);



			using (var dbContext = _serviceProvider.GetService<ApplicationDbContext>())
			{
				using (var transaction = dbContext.Database.BeginTransaction())
				{
					SeedDataAsync(dbContext).Wait();
					transaction.Commit();

					Console.WriteLine("Commit all seed");
				}
			}

			Console.WriteLine("Seed data successful");
		}

		private static IServiceProvider ConfigureService(IServiceCollection services, string[] args)
		{
			var dbContextFactory = new DesignTimeDbContextFactory();

			services.AddLogging();
			services.AddScoped<ApplicationDbContext>(p => dbContextFactory.CreateDbContext(args));

			services.AddIdentity<User, Role>()
							.AddEntityFrameworkStores<ApplicationDbContext>()
							.AddDefaultTokenProviders(); // protection provider responsible for generating an email confirmation token or a password reset token
			services.Configure<IdentityOptions>(options =>
			{
				// Password settings
				options.Password.RequireDigit = true;
				options.Password.RequiredLength = 8;
				options.Password.RequireNonAlphanumeric = false;
				options.Password.RequireUppercase = true;
				options.Password.RequireLowercase = false;

				// User settings
				options.User.RequireUniqueEmail = true;
			});

			// Build the IoC from the service collection
			return services.BuildServiceProvider();
		}

		private static async Task SeedDataAsync(ApplicationDbContext dbContext)
		{
			await SeedUserDataAsync(dbContext);
		}

		private static async Task SeedUserDataAsync(ApplicationDbContext dbContext)
		{
			if (!await dbContext.Set<User>().AnyAsync())
			{
				Console.WriteLine("Start to seed user info");

				var userManagement = _serviceProvider.GetService<UserManager<User>>();
				var user = new User
				{
					UserName = "system",
					Email = "GoGo@groovetechnology.com",
					CreatedByUserId = 1,
					CreatedDate = DateTimeOffset.UtcNow,
					CreatedByUserName = "system",
					UpdatedByUserId = 1,
					UpdatedDate = DateTimeOffset.UtcNow,
					UpdatedByUserName = "system"
				};

				await userManagement.CreateAsync(user, "Password@1");

				Console.WriteLine("Finish seed user info");
			}
		}
	}
}
