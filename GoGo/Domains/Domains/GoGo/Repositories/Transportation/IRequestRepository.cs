using Domains.Core;
using Domains.GoGo.Entities;
using Domains.GoGo.Models.Transportation;
using Kendo.Mvc.UI;
using Groove.AspNetCore.UnitOfWork;
using Kendo.Mvc.UI;
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
        Task<LocationModel> GetPositionWarehouseAsync(string code);
        Task<int> GetRequestID(string code);
        Task<IEnumerable<WaitingRequestModel>> GetWaitingRequestAsync();
        DataSourceResult GetCustomerRequestsAsync(DataSourceRequest request, long userId);
        Task<RequestDetailModel> GetRequestDetailAsync(int? id);
        Task<string> ChangeStatusAsync(string code, string status);
        Task<RequestModel> FindCustomerRequestAsync(int requestId, long userId);
        //void UpdateCustomerRequest(RequestModel model, long userId);
        //Task<int> CreateCustomerRequest(RequestModel model, long userId);
    }
}
