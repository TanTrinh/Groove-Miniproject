using Domains.Core;
using Domains.GoGo.Entities;
using Domains.GoGo.Models.Transportation;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Domains.GoGo.Repositories.Transportation
{
    public interface IRequestRepository
    {
		IEnumerable<RequestModel> GetWaitingRequestAsync(int pageNumber, int pageSize);
		DataSourceResult GetAllAsync([DataSourceRequest]DataSourceRequest request);
		int GetWaitingRequestQuantity();

		Task<RequestDetailModel> GetRequestDetailAsync(int? id);
        Task<string> ChangeStatus(int? id, string status);
		Task<IEnumerable<DataSourceValue<int>>> GetDataSource(string value);
	}
}
