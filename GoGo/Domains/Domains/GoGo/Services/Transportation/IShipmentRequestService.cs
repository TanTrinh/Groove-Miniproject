using Domains.GoGo.Models.Transportation;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Domains.GoGo.Services.Transportation
{
    public interface IShipmentRequestService
    {
        Task CreateShipmentRequestAsync(List<int> requestIdList, int shipmentId);
        Task<LocationModel> GetPositionPicking(string code);
        int GetTotalRequest(string code);
        RequestDetailModel GetRequestDetailModel(string code);
        Task<RequestDetailModel> GetCurrentRequestAsync(string requestCode);
        Task<string> GetFirstRequestCode(string shipmentCode);
        Task<IEnumerable<RequestDetailModel>> GetRequestListAsync(string code);
        Task<string> ChangeStatusRequestAsync(string code, string status);
        Task<string> Problem(string requestCode, bool status);
    }
}
