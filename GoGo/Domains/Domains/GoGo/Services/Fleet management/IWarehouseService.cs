using Domains.Core;
using Domains.GoGo.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Domains.GoGo.Services.Fleet_management
{
	public interface IWarehouseService
	{
		Task<WarehouseModel> GetWarehouseDetailAsync(int id);
		Task<IEnumerable<DataSourceValue<int>>> GetDataSource(string value);
	
	}
}
