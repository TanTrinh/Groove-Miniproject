using Domains.Core;
using Domains.GoGo.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Domains.GoGo.Repositories
{
    public interface IWarehouseRepository
    {
		Task<WarehouseModel> GetWarehouseDetailAsync(int id);
		Task<IEnumerable<DataSourceValue<int>>> GetDataSource(string value);
		Task<IEnumerable<DataSourceValue<int>>> GetOnFilter(string displayName);
		WarehouseModel GetWarehouseByIdlAsync(int requestId);
	}
}
