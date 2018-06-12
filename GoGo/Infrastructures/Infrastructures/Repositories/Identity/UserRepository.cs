using System;
using System.Collections.Generic;
using System.Text;
using Domains.Identity.Entities;
using Domains.Identity.Repositories;
using Groove.AspNetCore.UnitOfWork.EntityFramework;
using Infrastructures;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace Infrastructures.Repositories.Identity
{
	public class UserRepository : GenericRepository<User, long>, IUserRepository
	{
		private readonly UserManager<User> _userManager;
		private readonly ApplicationDbContext _dbContext;
		public UserRepository(UserManager<User> userManager, ApplicationDbContext dbContext)
			: base(dbContext)
		{
			_userManager = userManager;
			_dbContext = dbContext;
		}

		public async Task<User> FindByUserNameAsync(string userName)
		{
			return await _userManager.FindByNameAsync(userName);
		}


	}
}
