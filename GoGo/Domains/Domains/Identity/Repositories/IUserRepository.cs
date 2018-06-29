using Domains.Identity.Entities;
using Domains.Identity.Models;
using Groove.AspNetCore.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Domains.Identity.Repositories
{
	public interface IUserRepository : IGenericRepository<User,long>
	{
		Task<User> FindByUserNameAsync(string userName);
        Task<IEnumerable<UserListModel>> GetUserListAsync(long? id);
        Task<UserReadModel> FindByUserIdAsync(long? id);
        Task<UserViewUpdateModel> GetUserUpdateByIdAsync(long? id);
	}
}
