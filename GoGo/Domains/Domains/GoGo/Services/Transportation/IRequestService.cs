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

        Task<string> ChangeStatus(int? id, string status);

		Task<IEnumerable<DataSourceValue<int>>>  GetDataSource(string value, int warehouseId);

		DataSourceResult GetAllAsync([DataSourceRequest]DataSourceRequest request);
        Task<RequestsModel> GetRequestByIdAsync(string id);
    
        Task<int> CreateCustomerRequest(RequestModel model, UserIdentity<long> issuer);
        Task<int> UpdateCustomerRequest(RequestModel model, UserIdentity<long> issuer);
        Task<RequestModel> FindCustomerRequestAsync(int id);
    }
}
	