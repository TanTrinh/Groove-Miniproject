using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Domains.GoGo.Services.Transportation
{
    public interface IShipmentRequestService
    {
		Task CreateShipmentRequestAsync(List<int> requestIdList, int shipmentId);
        string GetRequestStatus(int requestId, int userId);
    }
}
