using Domains.Core;
using Domains.GoGo.Entities;
using Domains.GoGo.Models.Transportation;
using Kendo.Mvc.UI;
using Groove.AspNetCore.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Domains.GoGo.Repositories.Transportation
{
    public interface IRequestRepository : IGenericRepository<Request, int>
    {
		DataSourceResult GetAllAsync([DataSourceRequest]DataSourceRequest request);

		Task<RequestDetailModel> GetRequestDetailAsync(int? id);

        Task<string> ChangeStatus(int? id, string status);

		Task<IEnumerable<DataSourceValue<int>>> GetDataSource(string value, int warehouseId);

        Task<RequestsModel> GetRequestByIdAsync(string code);

		IEnumerable<RequestsModel> GetRequestsByShipmentId(int shipmentId);
		IEnumerable<int> GetRequestIdList(int shipmentId);

	
        Task<RequestModel> FindCustomerRequestAsync(int id);
    }
}
