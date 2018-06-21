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
    }
}
