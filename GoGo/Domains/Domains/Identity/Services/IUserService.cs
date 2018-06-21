using Domains.Identity.Entities;
using Domains.Identity.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Domains.Identity.Services
{
    public interface IUserService
    {
        Task<IEnumerable<UserListModel>> GetUsersAsync();
        Task<UserReadModel> GetUserProfileAsync(long id);
    }
}
