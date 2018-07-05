using Domains.Core;
using Domains.GoGo.Models.Transportation;
using Domains.Helpers;
using Kendo.Mvc.UI;
using Groove.AspNetCore.Common.Identity;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Domains.GoGo.Services
{
	public interface IRequestService
    {
		Task<RequestDetailModel> GetRequestDetails(int? id);

        Task<string> ChangeStatus(int? id, string status);

		Task<IEnumerable<DataSourceValue<int>>>  GetDataSource(string value, int warehouseId);

		DataSourceResult GetAllAsync([DataSourceRequest]DataSourceRequest request);
        Task<RequestsModel> GetRequestByIdAsync(string id);
    
        Task<int> CreateCustomerRequest(RequestModel model, UserIdentity<long> issuer);
        Task<int> UpdateCustomerRequest(RequestModel model, UserIdentity<long> issuer);
        Task<RequestModel> FindCustomerRequestAsync(int id);
        Task<LocationModel> GetPositionWarehouse(string code);
        Task<int> GetRequestID(string code);
        Task<IEnumerable<WaitingRequestModel>> GetWaitingRequest();
        Task<RequestDetailModel> GetRequestDetails(int? id);
        Task<string> ChangeStatus(string code, string status);
        Task<int> CreateCustomerRequest(RequestModel model, long userId);
        Task<int> UpdateCustomerRequest(RequestModel model, long userId);
        Task<RequestModel> FindCustomerRequestAsync(int id, long userId);
        DataSourceResult GetCustomerRequests(DataSourceRequest request, long userId);
    }
}
	