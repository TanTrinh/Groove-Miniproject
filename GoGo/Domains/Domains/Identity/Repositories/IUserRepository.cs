using Domains.Identity.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Domains.Identity.Repositories
{
	public interface IUserRepository
	{
		Task<User> FindByUserNameAsync(string userName);
	}
}
