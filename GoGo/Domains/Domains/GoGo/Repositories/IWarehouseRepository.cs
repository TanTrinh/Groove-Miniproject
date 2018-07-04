using Domains.Core;
using Domains.GoGo.Models;
using Groove.AspNetCore.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Domains.GoGo.Repositories
{
    public interface IWarehouseRepository : IGenericRepository<WareHouse, int>
    {
        Task<IEnumerable<DataSourceValue<int>>> GetOnFilter(string displayName, long userId);
    }
}
