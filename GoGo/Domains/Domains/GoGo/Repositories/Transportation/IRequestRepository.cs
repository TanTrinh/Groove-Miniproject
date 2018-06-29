using Domains.GoGo.Entities;
using Domains.GoGo.Models.Transportation;
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
        Task<IEnumerable<WaitingRequestModel>> GetWaitingRequestAsync();
        DataSourceResult GetCustomerRequestsAsync(DataSourceRequest request);
        
        Task<RequestDetailModel> GetRequestDetailAsync(int? id);
        Task<string> ChangeStatus(int? id, string status);
        Task<RequestModel> FindCustomerRequestAsync(int id);
    }
}
