using Domains.GoGo.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Domains.GoGo.Services
{
    public interface IWarehouseService
    {
        Task<IEnumerable<WarehouseOfCustomerModel>> GetWarehousesOfCustomer(int id);
    }
}
