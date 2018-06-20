using Domains.GoGo.Models.Transportation;
using Domains.Helpers;
using System.Threading.Tasks;

namespace Domains.GoGo.Services
{
	public interface IRequestService
    {
		Task<RequestDetailModel> GetRequestDetails(int? id);

        Task<string> ChangeStatus(int? id, string status);
		PagedData<WaitingRequestModel> GetWaitingRequest(int pageNumber);

		//int? assignedTo = null
	}
}
	