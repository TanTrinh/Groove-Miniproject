using System;
using System.Collections.Generic;
using System.Text;
using Domains.Identity.Entities;
using Domains.Identity.Repositories;
using Groove.AspNetCore.UnitOfWork.EntityFramework;
using Infrastructures;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Domains.Identity.Models;
using Groove.AspNetCore.DataBinding.AutoMapperExtentions;
using AutoMapper;

namespace Infrastructures.Repositories.Identity
{
	public class UserRepository : GenericRepository<User, long>, IUserRepository
	{
		private readonly UserManager<User> _userManager;
		private readonly ApplicationDbContext _dbContext;
        private readonly IMapper _mapper;
		public UserRepository(
            UserManager<User> userManager, 
            ApplicationDbContext dbContext,
            IMapper mapper)
			: base(dbContext)
		{
			_userManager = userManager;
			_dbContext = dbContext;
            _mapper = mapper;
		}

		public async Task<User> FindByUserNameAsync(string userName)
		{
			return await _userManager.FindByNameAsync(userName);
		}

        public async Task<UserReadModel> FindByUserIdAsync(long? id)
        {
            //return await _userManager.FindByIdAsync(id);
            return await this.dbSet.Where(p => p.Id == id).MapQueryTo<UserReadModel>(_mapper).FirstAsync();
        }

        public async Task<IEnumerable<UserListModel>> GetUserListAsync(long? id)
        {
            // Get all user ID in table userroles
            var userIds = _dbContext.UserRoles
                            .Where(a => a.RoleId == id)
                            .ToList();

            // Find all users with specific role
            return await _dbContext.Users
                            .Where(a => userIds.Any(c => c.UserId == a.Id))
                            .MapQueryTo<UserListModel>(_mapper)
                            .ToListAsync();

            // Get all users use below code
            //return await _userManager.Users.MapQueryTo<UserListModel>(_mapper).ToListAsync();
        }

        
    }
}
