using Domains.GoGo.Models.Transportation;
using Domains.Helpers;
using Kendo.Mvc.UI;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Domains.GoGo.Services
{
	public interface IRequestService
    {
		Task<RequestDetailModel> GetRequestDetails(int? id);

        Task<string> ChangeStatus(int? id, string status);


		PagedData<RequestModel> GetWaitingRequest(int pageNumber);
		DataSourceResult GetAllAsync([DataSourceRequest]DataSourceRequest request);

		//int? assignedTo = null
	}
}
	