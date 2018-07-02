using Domains.GoGo.Entities;
using Domains.GoGo.Models.Transportation;
using Groove.AspNetCore.Common.Identity;
using Kendo.Mvc.UI;
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
        Task<string> ChangeStatus(string code, string status);
        Task<int> CreateCustomerRequest(RequestModel model, int userId);
        Task<int> UpdateCustomerRequest(RequestModel model, int userId);
        Task<RequestModel> FindCustomerRequestAsync(int id, int userId);
        DataSourceResult GetCustomerRequests(DataSourceRequest request, int userId);
    }
}
