using Domains.Core;
using Domains.GoGo.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Domains.GoGo.Services
{
    public interface IWarehouseService
    {
        Task<IEnumerable<DataSourceValue<int>>> GetOnFilter(string displayName, long userId);
    }
}
