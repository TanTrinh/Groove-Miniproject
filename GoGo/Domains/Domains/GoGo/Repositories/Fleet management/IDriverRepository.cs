using Domains.Identity.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Domains.GoGo.Repositories.Fleet_management
{
    public interface IDriverRepository
    {
        Task<User> GetAllUnassignedDriver();
    }
}
