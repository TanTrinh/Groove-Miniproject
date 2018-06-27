using Domains.GoGo.Entities;
using Domains.GoGo.Models.Transportation;
using Groove.AspNetCore.Common.Identity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Domains.GoGo.Services
{
    public interface IRequestService
    {
        Task<IEnumerable<WaitingRequestModel>> GetWaitingRequest();
        Task<RequestDetailModel> GetRequestDetails(int? id);
        Task<string> ChangeStatus(int? id, string status);
        Task<int> CreateCustomerRequest(RequestModel model, UserIdentity<long> issuer);
        Task<int> UpdateCustomerRequest(RequestModel model, UserIdentity<long> issuer);
        Task<RequestModel> FindCustomerRequestAsync(int id);
    }
}
