using Domains.GoGo.Entities;
using Domains.GoGo.Models.Transportation;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Domains.GoGo.Repositories.Transportation
{
    public interface IRequestRepository
    {
		IEnumerable<WaitingRequestModel> GetWaitingRequestAsync(int pageNumber, int pageSize);
		int GetWaitingRequestQuantity();

		Task<RequestDetailModel> GetRequestDetailAsync(int? id);
        Task<string> ChangeStatus(int? id, string status);
    }
}
