using Domains.Core;
using Domains.GoGo.Models.Transportation;
using Domains.Helpers;
using Kendo.Mvc.UI;
using Groove.AspNetCore.Common.Identity;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Domains.GoGo.Services
{
	public interface IRequestService
    {
		Task<RequestDetailModel> GetRequestDetails(int? id);
		Task<IEnumerable<DataSourceValue<int>>>  GetDataSource(string value, int warehouseId);
		DataSourceResult GetAllAsync([DataSourceRequest]DataSourceRequest request);
        Task<RequestsModel> GetRequestByIdAsync(string id);
        Task<LocationModel> GetPositionWarehouse(string code);
        Task<int> GetRequestID(string code);
        Task<string> ChangeStatus(int? code, string status);


        // Đ
        Task<RequestModel> FindCustomerRequestAsync(int id, long userId);
        DataSourceResult GetCustomerRequests(DataSourceRequest request, long userId);
        Task<int> CreateCustomerRequest(RequestModel model, long userId);
        Task<int> UpdateCustomerRequest(RequestModel model, long userId);
        Task<string> ChangeStatus(string code, string status);
        // END Đ
    }
}
	